/**
 * This view is an example list of people.
 */
Ext.define('ipgTest.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',
    alias: 'main-list-grid',

    controller: 'main',
    viewModel: 'main',

    // Навигация по ячейкам
    selModel: 'cellmodel',

    // Редактирование ячеек по двойному клику
    plugins: {
        ptype: 'cellediting',
        clicksToEdit: 2,
    },

    title: 'ipgTest',

    listeners: {
        // Обработчик события «изменение выбора в гриде»
        selectionchange: function () {
            const vm = this.getViewModel();
            const selectionRows = this.getSelection();

            // Сетим во вьюмодель признак блокировки кнопок
            selectionRows.length
                ? vm.set('buttonDisable', false)
                : vm.set('buttonDisable', true);
        },
    },

    // Биндим стор
    bind: {
        store: '{users}',
    },

    // Тулбар
    tbar: [
        {
            text: 'Добавить',
            tooltip: 'Добавить',
            handler: 'onAddClick',
        },
        {
            text: 'Копировать',
            tooltip: 'Копировать',
            bind: {
                disabled: '{buttonDisable}',
            },
            handler: 'onCopyClick',
        },
        {
            text: 'Удалить',
            tooltip: 'Удалить',
            bind: {
                disabled: '{buttonDisable}',
            },
            handler: 'onRemoveClick',
        },
    ],

    columns: [
        {
            header: 'Имя',
            dataIndex: 'name',
            flex: 1,
            editor: {
                xtype: 'combo',
                valueField: 'name',
                displayField: 'name',
                store: {
                    type: 'personnel',
                },
                listeners: {
                    specialkey: 'sendToLocalStorage',
                },
            },
        },
        {
            header: 'Дата рождения',
            xtype: 'datecolumn',
            flex: 1,
            dataIndex: 'dateOfBirth',
            format: 'M d, Y',
            editor: {
                xtype: 'datefield',
                format: 'm/d/y',
                listeners: {
                    specialkey: 'sendToLocalStorage',
                },
            },
        },
        {
            header: 'Примечания',
            dataIndex: 'description',
            flex: 1,
            editor: {
                xtype: 'textfield',
                listeners: {
                    specialkey: 'sendToLocalStorage',
                },
            },
        },
        {
            header: 'Количество',
            dataIndex: 'quantity',
            flex: 1,
            editor: {
                xtype: 'numberfield',
                validator: function (value) {
                    return Number.isInteger(+value) && value > 0
                        ? true
                        : 'только целые положительные числа';
                },
                listeners: {
                    specialkey: 'sendToLocalStorage',
                },
            },
        },
    ],
});

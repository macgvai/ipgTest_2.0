/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('ipgTest.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    // Добавляем новую строку
    onAddClick: function () {
        const view = this.getView();
        const store = view.getStore();
        const items = store.getRange();
        const idx = items.length;
        const Model = store.getModel();
        const rec = new Model();

        store.insert(idx, rec);
    },

    // Копируем выделенную строку
    onCopyClick: function () {
        const view = this.getView();
        const store = view.getStore();
        const vm = view.getViewModel();
        const selectedRow = vm.get('selectedRow');
        const idx = store.indexOf(selectedRow);
        const data = selectedRow.getData();
        const Model = store.getModel();
        const rec = new Model();

        delete data.id;
        rec.set(data);
        store.insert(idx + 1, rec);
    },

    // Удаляем выделенную строку
    onRemoveClick: function () {
        const vm = this.getViewModel();
        const selectedRow = vm.get('selectedRow');

        selectedRow.drop();
    },

    /**
     * Записываем изменения в localStorage при нажатии enter или tab во время редактирования
     * @param {Ext.form.field} field редактируемое поле
     * @param {Ext.event.Event} event событие
     */
    sendToLocalStorage: function (field, event) {
        const ENTER = 13;
        const TAB = 9;

        if (
            field.wasDirty &&
            (event.getKey() === ENTER || event.getKey() === TAB)
        ) {
            const name = field.getName();
            const value = field.getValue();

            localStorage.setItem(name, value);
        }
    },
});

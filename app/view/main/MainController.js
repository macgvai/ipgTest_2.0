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

        view.store.insert(idx, rec);
    },

    // Копируем выделенную строку
    onCopyClick: function () {
        const view = this.getView();
        const store = view.getStore();
        const selRow = view.getSelection()[0];
        const idx = store.indexOf(selRow);
        const data = selRow && selRow.getData();
        const Model = store.getModel();
        const rec = new Model();

        delete data.id;
        rec.set(data);
        view.store.insert(idx + 1, rec);
    },

    // Удаляем выделенную строку
    onRemoveClick: function () {
        const view = this.getView();
        const selRow = view.getSelection()[0];

        selRow.drop();
    },

    // Записываем изменения в local store при нажатии enter или tab во время редактирования
    sendToLocalStorage: function (field, event) {
        const ENTER = 13;
        const TAB = 9;
        if (event.getKey() === ENTER || event.getKey() === TAB) {
            const name = field.getName();
            const value = field.getValue();

            localStorage.setItem(name, value);
        }
    },
});

// исправляет некорректное поведение combobox
Ext.define('CellEditingPluginOverride', {
    override: "Ext.view.Table",
    focusPosition: function () {
        Ext.emptyFn();
    },
});


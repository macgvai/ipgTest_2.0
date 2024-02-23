Ext.define('ipgTest.store.Personnel', {
    extend: 'Ext.data.Store',

    alias: 'store.personnel',

    model: 'ipgTest.model.Personnel',

    proxy: {
        type: 'ajax',
        url: '/app/store/mock.json',
        reader: {
            type: 'json',
            rootProperty: 'users',
        },
    },
    autoLoad: true,
});

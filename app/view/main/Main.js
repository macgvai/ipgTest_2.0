Ext.define('ipgTest.view.main.Main', {
    extend: 'Ext.Panel',
    xtype: 'app-main',

    requires: [
        'ipgTest.view.main.MainController',
        'ipgTest.view.main.MainModel',
        'ipgTest.view.main.List',
    ],

    controller: 'main',
    viewModel: 'main',

    items: [
        {
            xtype: 'mainlist',
        },
    ],
});

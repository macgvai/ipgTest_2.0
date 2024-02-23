/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'ipgTest.Application',

    name: 'ipgTest',

    requires: [
        // This will automatically load all classes in the ipgTest namespace
        // so that application classes do not need to require each other.
        'ipgTest.*'
    ],

    // The name of the initial view to create.
    mainView: 'ipgTest.view.main.Main'
});

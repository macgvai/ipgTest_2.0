Ext.define('ipgTest.model.Personnel', {
    extend: 'ipgTest.model.Base',

    fields: [
        {
            name: 'name',
            type: 'string',
            defaultValue: 'name',
        },
        {
            name: 'dateOfBirth',
            type: 'date',
            defaultValue: '1986-12-15',
        },
        {
            name: 'description',
            type: 'string',
            defaultValue: 'description',
        },
        {
            name: 'quantity',
            type: 'number',
            defaultValue: '15',
        },
    ],
});

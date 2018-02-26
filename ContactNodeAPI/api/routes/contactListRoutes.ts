'use strict';
module.exports = function (app) {
    var contactList = require('../controllers/contactListController');

    // todoList Routes
    app.route('/contacts')
        .get(contactList.getAllContacts)
        .post(contactList.createContact);


    app.route('/contacts/:contactId')
        .get(contactList.getContactbyId)
        .put(contactList.updateContact)
        .delete(contactList.deleteContact);
};
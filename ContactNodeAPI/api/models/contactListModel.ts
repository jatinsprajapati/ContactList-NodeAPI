var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var autoIncrement = require('mongoose-auto-increment');
var config = require('../../Config');

var connection = mongoose.createConnection(config.databaseURL);

autoIncrement.initialize(connection);

var contactSchema = new Schema({
    contactId: { type: Number, required: true },
    firstname: { type: String, required: true},
    lastname: { type: String, required: true },
    address: { type: String, required: true },
    mobile: { type: String, required:true },
    email: { type: String, required: true },
    dateofbirth: { type: Date, required: true},
    isactive: { type: Boolean, required: true, default: true },       
    created_on: { type: Date, required: true, default: Date.now },
});

// Just autoincrement, but there is not use to get data.
contactSchema.plugin(autoIncrement.plugin, {
    model: 'Contacts',
    field: 'contactId',
    startAt: 1);


// the schema is useless so far
// we need to create a model using it
var Contact = mongoose.model('Contacts', contactSchema);

// make this available to our users in our Node applications
module.exports = Contact;
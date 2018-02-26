var mongoose = require('mongoose'), Contact = mongoose.model('Contacts');
exports.getAllContacts = function (req, res) {
    Contact.find({}, function (err, contact) {
        if (err)
            res.send(err);
        res.json(contact);
    });
};
exports.createContact = function (req, res) {
    var newContact = new Contact(req.body);
    newContact.save(function (err, contact) {
        if (err)
            res.send(err);
        res.json(contact);
    });
};
// Pass object id to fetch data.
exports.getContactbyId = function (req, res) {
    Contact.findById(req.params.contactId, function (err, contact) {
        if (err)
            res.send(err);
        res.json(contact);
    });
};
exports.updateContact = function (req, res) {
    Contact.findOneAndUpdate({ _id: req.params.contactId }, req.body, { new: true }, function (err, contact) {
        if (err)
            res.send(err);
        res.json(contact);
    });
};
exports.deleteContact = function (req, res) {
    Contact.remove({
        _id: req.params.contactId
    }, function (err, contact) {
        if (err)
            res.send(err);
        res.json({ message: 'Contact has been deleted.' });
    });
};
//# sourceMappingURL=contactListController.js.map
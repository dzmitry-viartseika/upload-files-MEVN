const CONTACTS = require('../models/contacts');

class AppController {
    constructor(){}
    getContacts = async (req, res) => {
        console.log('getContacts', CONTACTS);
        res.json(CONTACTS)
    }
    addNewContact = async (req, res) => {
        const item = {
            id: Date.now(),
            name: req.body.form.name,
            value: req.body.form.value,
            marked: false,
        };
        CONTACTS.push(item);
        res.status(201).json(CONTACTS);
    }
    deleteContact = async (req, res) => {
        const contact = CONTACTS.find((item) => {
            return item.id === parseInt(req.params.id)
        })
        const index = CONTACTS.indexOf(contact);
        CONTACTS.splice(index, 1);
        res.status(201).json({message: 'Contact was deleted'})
    }
    changeMark = async (req, res) => {
        console.log('req', req.body.contact);
        const idx = CONTACTS.findIndex((item) => {
            return item.id === parseInt(req.params.id)
        });
        console.log('idx', idx);
        CONTACTS[idx] = req.body.contact;
        res.json(CONTACTS[idx]);
    }
}

module.exports = AppController;

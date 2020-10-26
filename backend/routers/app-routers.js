const express = require('express');
const router = new express.Router();
const AppController = require('../controllers/app-controllers');
const app_controller = new AppController();

router.get('/contacts', app_controller.getContacts);
router.post('/newContact', app_controller.addNewContact);
router.delete('/contacts/:id', app_controller.deleteContact);
router.put('/contacts/:id', app_controller.changeMark);

module.exports = router;

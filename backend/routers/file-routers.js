const express = require('express');
const multer = require('multer');
const router = new express.Router();
const FileController = require('../controllers/file-controllers');
const file_controller = new FileController();
const upload = multer({dest: 'files'})

router.post('/upload', upload.single('filedate'), file_controller.addNewFile);

module.exports = router;

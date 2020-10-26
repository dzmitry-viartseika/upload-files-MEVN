// const CONTACTS = require('../models/contacts');

class AppController {
    constructor(){}
    addNewFile = async (req, res, next) => {
        console.log('wertey');
        const fileDate  = res.file;
        if (!fileDate) {
            res.send('Ошибка при загрузки файла')
        } else {
            res.send('Файл загружен')
        }
        console.log('file uploaded');
        res.status(201).json('file uploaded');
        // const item = {
        //     id: Date.now(),
        //     name: req.body.form.name,
        //     value: req.body.form.value,
        //     marked: false,
        // };
        // CONTACTS.push(item);
        // res.status(201).json(CONTACTS);
    }
}

module.exports = AppController;

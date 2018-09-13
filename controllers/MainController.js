const csv = require('fast-csv');
const { mongoose } = require('../server/config');
const RawData = require('../models/RawData');

class MainController {

    static renderHomePage(req, res) {
        res.sendFile('index.html');
    }

    static processUploadFile(req, res) {
        if(!req.files) {
            return res.status(400).send('No file uploaded.');
        }

        const dataFile = req.files.file;
        const dataArray = [];
        
        csv.fromString(dataFile.data.toString(), {
            headers: true,
            ignoreEmpty: true,
        })
        .on('data', (data) => {
            MainController.checkIfExists(data._id)
                .then((found) => {
                    console.log(found.id);
                })
                .catch((err) => {
                    console.log('err', err);
                });
        })
        .on('end', () => {
            RawData.create(dataArray, (err, documents) => {
                if(err) throw err;
            });
            res.send(dataArray.length + ' dogs were successfully uploaded');
        })
    }

    static checkIfExists(id) {
        return new Promise((resolve, reject) => {
            RawData
                .findById(id)
                .then((foundData) => {
                    if(foundData) {
                        resolve(foundData);
                    } else {
                        reject(false);
                    }
                });
        });
    }
}

module.exports = MainController;
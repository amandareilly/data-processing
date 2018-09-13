const express = require('express');
const bodyParser = require('body-parser');
const MainController = require('../../controllers/MainController');

const router = express.Router();
router.use(bodyParser.json());

//root
router.get('/', MainController.renderHomePage);

// post file
router.post('/', MainController.processUploadFile);

module.exports = router;
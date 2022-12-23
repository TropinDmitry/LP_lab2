const express = require('express');
const router = express.Router();
const uploadFile = require('../middleware/multer.js');
const controller = require('../controller.js');

router.get('/', controller.get)
router.get('/download', controller.download)
router.post('/upload', uploadFile, controller.upload)
router.post('/create', controller.create)
router.delete('/delete', controller.delete)

module.exports = router
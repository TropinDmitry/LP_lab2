const multer = require('multer');
const path = require("path");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const { crrntPath } = req.body
        const fullPath = path.join('./files', crrntPath)
        cb(null, fullPath)
    },
    filename: (req, file, cb) => {
        req.filename = file.originalname
        cb(null, file.originalname)
    }
});

const limits = { fileSize: 1024 * 1024 * 5 }

const mObj = multer({ storage, limits});

module.exports = uploadFile = (req, res, next) => {
    const upload = mObj.single('file')
    upload(req, res, err => {
        next();
    })
}
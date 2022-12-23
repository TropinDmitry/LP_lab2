const fs = require('fs');
const path = require('path');

module.exports.get = async function(req, res) {
    try {
        let fileSize
        const { crrntPath } = req.query
        const fullPath = path.join('./files', crrntPath)

        fs.readdir(fullPath, async (err, files) => {
            const promises = files.map(file =>
                new Promise ((res, rej) => {
                    fs.stat(`${fullPath}/${file}`, (err, fileStats) => {
                        if (err) rej(err)
                        else {
                            fileSize = fileStats.isFile() ? fileStats.size + ' bytes' : '-'
                            const fileName = file
                            res({fileName, fileSize})
                        }
                    })
                })
            )
            const resp = await Promise.all(promises)
            res.status(200).json(resp)
        })
    } catch (e) {
        
    }
}

module.exports.create = async function(req, res) {
    try {
        const { crrntPath } = req.body
        const fullPath = path.join('./files', crrntPath)

        fs.mkdirSync(fullPath, { recursive: true })

        res.status(200).json({ message: 'Created' })
    } catch (e) {
        
    }
}

module.exports.download = async function(req, res) {
    try {
        const { crrntPath } = req.query
        const fullPath = path.join('./files', crrntPath)

        res.download(fullPath)
    } catch (e) {
        
    }
}

module.exports.upload = async function(req, res) {
        try {
            const path = req.file.path
            res.status(200).json({ message: 'File has been uploaded', path })
        } catch (e) {
            
        }
}

module.exports.delete = async function(req, res) {
    try {
        const { crrntPath } = req.body
        const fullPath = path.join('./files', crrntPath)

        fs.lstatSync(fullPath).isFile() ?
            fs.unlinkSync(fullPath):
            fs.rmSync(fullPath, { recursive: true })

        res.status(200).json({ deleted: fullPath })
    } catch (e) {
        
    }
}

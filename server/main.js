const cors = require('cors');
const express = require('express');
const { createServer } = require('http');
const router = require('./routes/category.js');

const app = express()
const server = createServer(app)
const PORT = 8000

app.use(cors())
app.use(express.json({ limit: '2mb' }))
app.use(express.urlencoded({ extended: true }))
app.use('/', router)
app.use('*', async (req, res) => {
    res.status(404).send('Not found 404')
})

server.listen(PORT, () => console.log(`Server started at ${PORT} port`))

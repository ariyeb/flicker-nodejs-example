const express = require('express')
const cors = require('cors')
const path = require('path')

const photosRouter = require('./routers/photosRouter')
const publicDirectoryPath = path.join(__dirname, '../public')

const port = process.env.port
const app = express()

app.use(express.static(publicDirectoryPath))
app.use(express.json())
app.use(cors())
app.use(photosRouter)

app.listen(port, () => {
    console.log('Server connectes, port:', port)
})
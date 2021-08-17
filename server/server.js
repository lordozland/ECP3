const express = require('express')


const db = require('./models')
const config = require('./config/routes')

const app = express()
const apiPort = 3333

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', config)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
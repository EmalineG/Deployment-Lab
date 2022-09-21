require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
const path = require('path')

const port = process.env.SERVER_PORT || 6060

//THIS IS MIDDLEWARE TO SEND WHOLE FOLDER
app.use('/', express.static(path.join(__dirname, '../client/index.html')))

app.use(express.static(path.join(__dirname, '../client')))

//THIS IS ENPOINTS TO SEND INDIVIDUAL FILES
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/index.html'))
// })

// app.get('/js', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/main.js'))
// })

app.post('/register', (req, res) => res.status(200).send('Registered'))

app.listen(port, () => {
  console.log('Docked at port ' + port)
})
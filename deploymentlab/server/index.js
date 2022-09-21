require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

const {SERVER_PORT} = process.env



app.listen(SERVER_PORT, () => console.log(`up on ${SERVER_PORT}`))
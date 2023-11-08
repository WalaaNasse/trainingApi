const express = require('express')
const app = express()
const PORT = process.env.port || 3000;

app.get('/', function (req, res) {
  res.send('walaa nasser is Now Online')
})

app.listen(PORT)
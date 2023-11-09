const express = require('express')
const app = express()
var cors = require('cors')
const PORT = process.env.port || 3000;
app.use(cors())

app.get('/', function (req, res) {
  res.send('walaa nasser is Now Online')
})
app.get('/students', function (req, res) {
    var data=[
        {id:1,name:'Cezar'},
        {id:2,name:'Ibrahim'},
        {id:3,name:'Walaa'}
    ]
    res.send(data)
  })

app.listen(PORT)
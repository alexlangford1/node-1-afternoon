const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mc = require('./controller/messages')
app.use(bodyParser.json())
app.use(express.static('public/build'))

app.post('/api/messages', mc.create)
app.get('/api/messages', mc.read)
app.put('/api/messages/:id', mc.update)
app.delete('/api/messages/:id', mc.delete)







const port = 3001
app.listen(port, () => console.log(`Dang, it works on ${port}`))

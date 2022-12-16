const express = require('express')
const app = express()
const port = 3000
const db = require('./database.js')
const cors = require('cors');

app.use(express.urlencoded());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('<h1>Phonebook Backend</h1>')
})

app.get('/api/getall', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    db.getAll().then((result) => res.send(result)).catch((result) => res.send(result))
})

app.get('/api/find', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    db.getOne(req.query).then((result) => res.send(result)).catch((result) => res.send(result))
})

app.get('/api/deletedata', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    db.removeData(req.query).then((result) => res.send(result)).catch((result) => res.send(result))
})

app.post('/api/insertdata', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    db.insertData(req.body).then((result) => res.send(result)).catch((result) => res.send(result))
})

app.get('/api/setfavorite', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    db.setFavorite(req.query.id, req.query.bool).then((result) => res.send(result)).catch((result) => res.send(result))
})

app.get('/api/searchbyname', (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    db.searchByName(req.query.name).then((result) => res.send(result)).catch((result) => res.send(result))
})

app.use(cors());

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})


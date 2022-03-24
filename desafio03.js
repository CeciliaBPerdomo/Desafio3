// npm init -y
// npm i
// npm i express
const container = require('./contenedor');

const express = require('express')
const app = express()
;
const productosDisp = require('./test')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('<h1 style="color:red;">Desafío 3 - Cecilia Perdomo</h1>')
})

app.get('/productos', async (req, res) => {
    res.send(await productosDisp());

})

app.get('/productosRandom', async (req, res) => {
    res.send(await productosDisp[Math.round(Math.random() * ((productosDisp().length) + 1))]);
})

const PORT = 8080;

const server = app.listen(PORT,() => {
    console.log(`Servidor Http escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Este es el error: ${error}`))

module.exports = container;
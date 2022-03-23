// npm init -y
// npm i
// npm i express
const express = require('express')
const app = express()
const fs = require('fs');
const productosDisp = require('./test')

 class container {
 constructor(filename){
     this.filename = filename;
 }

 async escribir(dato){
    try{
       const contenido = await fs.promises.writeFile(this.filename, dato);
       return contenido;
       console.log('Escrito correctamente');
    } catch(error){
        console.log(error);
    }
 }

 async leer(){
    try{
        let contenido = await fs.promises.readFile(this.filename, 'utf-8');
        return contenido;
     }catch(error){
         throw new Error(error);
     }  
 } 

}

app.get('/', (req, res) => {
    res.send('<h1 style="color:red;">Desafío 3 - Cecilia Perdomo</h1>')
})

app.get('/productos', (req, res) => {
    //res.send('<h2 style="color:red;">Productos</h2>')
    res.send(productosDisp);
})

app.get('/productoRandom', (req, res) => {
    //res.send(productosDisp);
})

const PORT = 8080;

const server = app.listen(PORT,() => {
    console.log(`Servidor Http escuchando en el puerto ${server.address().port}`)
})

server.on('error', error => console.log(`Este es el error: ${error}`))

module.exports = container;
const container = require('./desafio03');
const productos = require('./productos');

const nuevoContenedor = new container('./productos.txt');
//nuevoContenedor.escribir(JSON.stringify(productos));

const productosDisp = () => {
    console.log(nuevoContenedor.leer());
}

module.exports = productosDisp; 
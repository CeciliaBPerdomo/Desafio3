const container = require('./contenedor');
const productos = require('./productos');

const nuevoContenedor = new container('./productos.txt');
//nuevoContenedor.escribir(JSON.stringify(productos));

const productosDisp = async () => {
    return await nuevoContenedor.leer();
}

module.exports = productosDisp; 
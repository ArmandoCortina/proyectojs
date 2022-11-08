let producto = parseInt(prompt('Que produto quieres comprar: 1.Playera - 2.Taza - 3.Termo - 4.Cojin - 5.Sudadera'))
let seguirComprando = true
let total = 0
let decision

//operaciones
// productos: playera(200) taza(50) termo(150) cojin(100) sudadera(300)

// arreglo de productos
const productosArray = []

//clase de prodcutos
class nuevoProducto {
    constructor(id,nombre,precio,stock){
        this.id = id
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}

const playera = new nuevoProducto(1,'playera',200,10);
productosArray.push(playera);
const taza = new nuevoProducto(2,'taza',50,20);
productosArray.push(taza);
const termo = new nuevoProducto(3,'termo',150,20);
productosArray.push(termo);
const cojin = new nuevoProducto(4,'cojin',100,15);
productosArray.push(cojin);
const sudadera = new nuevoProducto(5,'sudadera',300,10);
productosArray.push(sudadera);



while (seguirComprando === true){
    total = total + productosArray[producto-1].precio

    decision = parseInt(prompt('Desea seguir comprando? 1.Si - 2.No'))
    if (decision === 1) {
        producto = parseInt(prompt('Que produto quieres comprar: 1.Playera - 2.Taza - 3.Termo - 4.Cojin - 5.Sudadera'))
    } else {
        seguirComprando = false
    }
}

const totalCompraConDescuento = descuento(total)

alert (`El total de tu compra es ${total}, si realizas tu compra en este momento obtendras un descuento, el total de tu compra seria de ${totalCompraConDescuento}`)

function descuento(valor) {
    let descuento = 0
    if (valor <= 300) {
        descuento = 5
    } else if (valor > 300 && valor <= 500) {
        descuento = 10

    } else if (valor > 500) {
        descuento = 15 
    }
    let valorDescuento = valor * (descuento / 100)
    let valorFinal = valor - valorDescuento
    return valorFinal
    }
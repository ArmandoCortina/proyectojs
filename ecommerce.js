
// storage y json ejemplo.

const formularioUsuario = document.getElementById('formulario')
const titulo = document.getElementById('titulo')
const nombreUsuario = document.getElementById('nombre')
const apellidoUsuario = document.getElementById('apellido')

// guardar info del usuario en objeto
const infoUsuario = {}


// evento submit
formularioUsuario.onsubmit = (e) =>{
    infoUsuario.nombre = nombreUsuario.value
    infoUsuario.apellido = apellidoUsuario.value
    localStorage.setItem('infoUsuario',JSON.stringify(infoUsuario))
}


const infoUsuarioStorage = JSON.parse(localStorage.getItem('infoUsuario'))
console.log(infoUsuarioStorage)
if(infoUsuarioStorage.nombre !== "" || infoUsuarioStorage.apellido !== ""){
    titulo.innerText = `Hola ${infoUsuarioStorage.nombre} ${infoUsuarioStorage.apellido}, bienvenido de vuelta`
}



//-------------- arreglo de productos----------------
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


//manipular dom

const selectProd = document.getElementById('lista')

productosArray.forEach(elemento=>{
    const optionProd = document.createElement('option')
    optionProd.innerText = `${elemento.nombre}: $${elemento.precio}`
    optionProd.setAttribute('id',`${elemento.id}`)
    selectProd.append(optionProd)
})



//carrito
const carrito = []

const botonIngresar = document.getElementById('ingresarProd')
const finalizarCompra = document.getElementById('finalizar')

botonIngresar.onclick = () => {
    const indexProd = selectProd.selectedIndex
    const productoSeleccionado = productosArray[indexProd]
    carrito.push(productoSeleccionado)
}

// finalizar compra

finalizarCompra.onclick = () => {
    console.log(carrito)
    let total = 0
    carrito.forEach((prod) => {
    total = total + prod.precio
    })
    alert(
    `Escogiste ${carrito.length} productos y el total de la compra es de ${total}`
    )
}
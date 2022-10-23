let producto = parseInt(prompt('Que produto quieres comprar: 1.Playera - 2.Taza - 3.Termo - 4.Cojin - 5.Sudadera'))
let seguirComprando = true
let total = 0
let decision
let porDescuento = 0


//operaciones
// productos: playera(200) taza(50) termo(150) cojin(100) sudadera(300)

while (seguirComprando === true){
    if (producto === 1) {
        total = total + 200
    } else if (producto === 2) {
        total = total + 50
    } else if (producto === 3) {
        total = total + 150
    } else if (producto === 4) {
        total = total + 100
    } else if (producto === 5) {
        total = total + 300
    }

    decision = parseInt(prompt('Desea seguir comprando? 1.Si - 2.No'))
    if (decision === 1) {
        producto = parseInt(prompt('Que produto quieres comprar: 1.Playera - 2.Taza - 3.Termo - 4.Cojin - 5.Sudadera'))
    } else {
        seguirComprando = false
    }
}

const totalConDescuento = descuento(total)

alert (`El total de tu compra es ${total}, si realizas tu compra obtendras un descuento del ${porDescuento}%`)

function descuento(valor) {
    if (valor <= 300) {
        porDescuento = 5
    } else if (valor > 300 && valor <= 500) {
        porDescuento = 10
    } else if (valor > 500) {
        porDescuento = 15 
    }
    }
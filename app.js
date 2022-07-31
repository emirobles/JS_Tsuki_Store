// Carrito eventos
const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


botonAbrir.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', () => {
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) => {
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() 
})

// ----------------------------------
// Constructor de objeto
class Producto {
    constructor(producto, cantidad) {
        this.id = producto.id;
        this.nombre = producto.nombre;
        this.editorial = producto.editorial;
        this.cantidad = cantidad; 
        this.precio = producto.precio;            
    }
}

//Array de productos manga

let stockProductos = [
    {
        id: 0,
        nombre: "Assassination Classroom",
        desc: "Tomo  N°13",
        editorial: "PANINI",
        cantidad: 1,
        precio: 750,
        img: "./img/assassinationClassroom13.jpg",

    },
    {
        id: 1,
        nombre: "Attack on Titan",
        desc: "Tomo N° 12",
        editorial: "OVNI",
        cantidad: 1,
        precio: 950,
        img: "./img/attackonTitan12.jpg",

    },
    {
        id: 2,
        nombre: "Berserk",
        desc: "Tomo N° 1",
        editorial: "PANINI",
        cantidad: 1,
        precio: 950,
        img: "./img/Berserk1.jpg",

    },
    {
        id: 3,
        nombre: "Bleach",
        desc: "Tomo N° 8",
        editorial: "IVREA",
        cantidad: 1,
        precio: 750,
        img: "./img/Bleach8.jpg",

    },
    {
        id: 4,
        nombre: "Sakura Card Captor",
        desc: "Tomo N° 1",
        editorial: "IVREA",
        cantidad: 1,
        precio: 750,
        img: "./img/CardCaptorSakura1.jpg",

    },
    {
        id: 5,
        nombre: "Dr. STONE",
        desc: "Tomo N° 12",
        editorial: "PANINI",
        cantidad: 1,
        precio: 750,
        img: "./img/dr_stone12.jpg",

    },
    {
        id: 6,
        nombre: "Dragon Ball",
        desc: "Tomo N° 2",
        editorial: "IVREA",
        cantidad: 1,
        precio: 700,
        img: "./img/DragonBall2.jpg",

    },
    {
        id: 7,
        nombre: "Erased Re:",
        desc: "Tomo único",
        editorial: "IVREA",
        cantidad: 1,
        precio: 850,
        img: "./img/erasedRe.jpg",

    },
    {
        id: 8,
        nombre: "Evangelion - Iron Maiden",
        desc: "Tomo N° 6",
        editorial: "IVREA",
        cantidad: 1,
        precio: 850,
        img: "./img/EvangelionIronMaiden6.jpg",

    },
    {
        id: 9,
        nombre: "Full Metal Alchemist",
        desc: "Tomo N° 5",
        editorial: "IVREA",
        cantidad: 1,
        precio: 750,
        img: "./img/FMA5.jpg",

    },
    {
        id: 10,
        nombre: "GANTZ",
        desc: "Tomo N° 6",
        editorial: "IVREA",
        cantidad: 1,
        precio: 700,
        img: "./img/gantz6.jpg",

    },
    {
        id: 11,
        nombre: "Given",
        desc: "Tomo N° 5",
        editorial: "PANINI",
        cantidad: 1,
        precio: 850,
        img: "./img/given5.jpg",

    },
    {
        id: 12,
        nombre: "Hight School of the Dead",
        desc: "Tomo N° 4",
        editorial: "IVREA",
        cantidad: 1,
        precio: 750,
        img: "./img/HOTD4.jpg",

    },
    {
        id: 13,
        nombre: "Jujutsu Kaisen",
        desc: "Tomo N° 1",
        editorial: "PANINI",
        cantidad: 1,
        precio: 900,
        img: "./img/Jujutsu_Kaisen1.jpg",

    },
    {
        id: 14,
        nombre: "Love is war",
        desc: "Tomo N° 1",
        editorial: "PANINI",
        cantidad: 1,
        precio: 850,
        img: "./img/love_is_war1.jpg",

    },
    {
        id: 15,
        nombre: "NARUTO",
        desc: "Tomo N° 1",
        editorial: "PANINI",
        cantidad: 1,
        precio: 850,
        img: "./img/Naruto1.jpg",

    },
    {
        id: 16,
        nombre: "One Punch",
        desc: "Tomo N° 15",
        editorial: "PANINI",
        cantidad: 1,
        precio: 850,
        img: "./img/onePunchMan15.jpg",

    },
    {
        id: 17,
        nombre: "Re:Zero",
        desc: "Tomo N° 1",
        editorial: "PANINI",
        cantidad: 1,
        precio: 800,
        img: "./img/Re_Zero1.jpg",

    },
    {
        id: 18,
        nombre: "Sailor Moon",
        desc: "Tomo N° 1",
        editorial: "IVREA",
        cantidad: 1,
        precio: 850,
        img: "./img/SailorMoon1.jpg",

    },
    {
        id: 19,
        nombre: "Yu-Gi-Oh!",
        desc: "Tomo N° 1",
        editorial: "PANINI",
        cantidad: 1,
        precio: 800,
        img: "./img/yigioh1.jpg",
    },
]

//--------------------------
//Carrito detalle
const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

// Cards de cada manga
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>
    <p>Editorial: ${producto.editorial}</p>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div)
    
    const boton = document.getElementById(`agregar${producto.id}`)
    
    boton.addEventListener('click', () => {        
        agregarAlCarrito(producto.id)        
    })
})

// Agregar items al carrito
const agregarAlCarrito = (prodId) => {
    // comprobación si el item esta en carrito
    const existe = carrito.some(prod => prod.id === prodId)

    if (existe) { // Actualiza cantidad
        const prod = carrito.map(prod => { 
            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    } else { //Sino se agrega al carrito
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }    
    actualizarCarrito()
}

//Eliminar item de carrito
const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) 
    carrito.splice(indice, 1)     
    actualizarCarrito() 
    console.log(carrito)
}

// Función para actualizar el carrito
const actualizarCarrito = () => {    
    contenedorCarrito.innerHTML = ""
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)

        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    
    contadorCarrito.innerText = carrito.length 
    console.log(carrito)
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)    

}


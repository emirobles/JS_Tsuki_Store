//Clase para armar Objetos por cada manga y métodos para el carrito
class Manga {
    constructor(manga, cantidad) {
        this.id = manga.id;
        this.titulo = manga.titulo;
        this.editorial = manga.editorial;
        this.precio = manga.precio;
        this.cantidad = cantidad;
        this.precioTotal = manga.precio;
    }

    agregarUnidad() {
        this.cantidad++;
    }

    quitarUnidad() {
        this.cantidad--;
    }

    actualizarPrecioTotal() {
        this.precioTotal = this.precio * this.cantidad;
    }
}

//Declaración de constantes

const mangas = [
    {
        id: 0,
        titulo: "Assassination Classroom",
        descripcion: "Tomo  N°13",
        editorial: "PANINI",
        precio: 750,
        img: "./img/assassinationClassroom13.jpg",

    },
    {
        id: 1,
        titulo: "Attack on Titan",
        descripcion: "Tomo N° 12",
        editorial: "OVNI",
        precio: 950,
        img: "./img/attackonTitan12.jpg",

    },
    {
        id: 2,
        titulo: "Berserk",
        descripcion: "Tomo N° 1",
        editorial: "PANINI",
        precio: 950,
        img: "./img/Berserk1.jpg",

    },
    {
        id: 3,
        titulo: "Bleach",
        descripcion: "Tomo N° 8",
        editorial: "IVREA",
        precio: 750,
        img: "./img/Bleach8.jpg",

    },
    {
        id: 4,
        titulo: "Sakura Card Captor",
        descripcion: "Tomo N° 1",
        editorial: "IVREA",
        precio: 750,
        img: "./img/CardCaptorSakura1.jpg",

    },
    {
        id: 5,
        titulo: "DR. Stone",
        descripcion: "Tomo N° 12",
        editorial: "PANINI",
        precio: 750,
        img: "./img/dr_stone12.jpg",

    },
    {
        id: 6,
        titulo: "Dragon Ball",
        descripcion: "Tomo N° 2",
        editorial: "IVREA",
        precio: 700,
        img: "./img/DragonBall2.jpg",

    },
    {
        id: 7,
        titulo: "Erased Re:",
        descripcion: "Tomo único",
        editorial: "IVREA",
        precio: 850,
        img: "./img/erasedRe.jpg",

    },
    {
        id: 8,
        titulo: "Evangelion - Iron Maiden",
        descripcion: "Tomo N° 6",
        editorial: "IVREA",
        precio: 850,
        img: "./img/EvangelionIronMaiden6.jpg",

    },
    {
        id: 9,
        titulo: "Full Metal Alchemist",
        descripcion: "Tomo N° 5",
        editorial: "IVREA",
        precio: 750,
        img: "./img/FMA5.jpg",

    },
    {
        id: 10,
        titulo: "GANTZ",
        descripcion: "Tomo N° 6",
        editorial: "IVREA",
        precio: 700,
        img: "./img/gantz6.jpg",

    },
    {
        id: 11,
        titulo: "Given",
        descripcion: "Tomo N° 5",
        editorial: "PANINI",
        precio: 850,
        img: "./img/given5.jpg",

    },
    {
        id: 12,
        titulo: "Hight School of the Dead",
        descripcion: "Tomo N° 4",
        editorial: "",
        precio: 750,
        img: "./img/HOTD4.jpg",

    },
    {
        id: 13,
        titulo: "Jujutsu Kaisen",
        descripcion: "Tomo N° 1",
        editorial: "PANINI",
        precio: 900,
        img: "./img/Jujutsu_Kaisen1.jpg",

    },
    {
        id: 14,
        titulo: "Love is war",
        descripcion: "Tomo N° 1",
        editorial: "PANINI",
        precio: 850,
        img: "./img/love_is_war1.jpg",

    },
    {
        id: 15,
        titulo: "NARUTO",
        descripcion: "Tomo N° 1",
        editorial: "PANINI",
        precio: 850,
        img: "./img/Naruto1.jpg",

    },
    {
        id: 16,
        titulo: "One Punch",
        descripcion: "Tomo N° 15",
        editorial: "PANINI",
        precio: 850,
        img: "./img/onePunchMan15.jpg",

    },
    {
        id: 17,
        titulo: "Re:Zero",
        descripcion: "Tomo N° 1",
        editorial: "PANINI",
        precio: 800,
        img: "./img/Re_Zero1.jpg",

    },
    {
        id: 18,
        titulo: "Sailor Moon",
        descripción: "Tomo N° 1",
        editorial: "IVREA",
        precio: 850,
        img: "./img/SailorMoon1.jpg",

    },
    {
        id: 19,
        titulo: "Yu-Gi-Oh!",
        descripcion: "Tomo N° 1",
        editorial: "PANINI",
        precio: 800,
        img: "./img/yigioh1.jpg",
    },
]

let carrito;

// ----- Declaración de funciones ----- //
function chequearCarritoEnStorage() {
    let contenidoEnStorage = JSON.parse(localStorage.getItem("carritoEnStorage"));

    if (contenidoEnStorage) {
        
        let array = [];

        for (const objeto of contenidoEnStorage) {
            
            let manga = new Manga(objeto, objeto.cantidad);
            manga.actualizarPrecioTotal();

            array.push(manga);
        }

        imprimirTabla(array);
        
        return array;
    }

    return [];
}



let listaDeMangas = document.getElementById("listaDeMangas");

for (const manga of mangas) {    
    let card = document.createElement("div");
    listaDeMangas.innerHTML += `
        <div class="card text-center div-padre" style="width: 18rem;">
            <div class="card-body">
                <img src="${manga.img}" id="" class="card-img-top img-fluid" alt="">
                <h2 class="card-title">${manga.titulo}</h2>
                <h3 class="card-title">${manga.descripcion}</h3>
                <h5 class="card-subtitle mb-2 text-muted">${manga.editorial}</h5>
                <p class="card-text">$${manga.precio}</p>
                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button id="agregar${manga.id}" type="button" class="btn btn-dark"> Agregar </button>
                </div>
            </div>
        </div>      
        `;

    // Se agrega card a contenedor
    listaDeMangas.appendChild(card);

    // Boton con evento para agregar manga a carrito
    let boton = document.getElementById(`agregar${manga.id}`);
    boton.addEventListener("click", () => agregarAlCarrito(manga.id));
}
 
    

function agregarAlCarrito(idProducto) {
    // Se verifica si el manga se encuentra en el array
    let mangaEnCarrito = carrito.find((elemento) => elemento.id === idProducto);

    if (mangaEnCarrito) {
        
        let index = carrito.findIndex((elemento) => elemento.id === alfajorEnCarrito.id);

        carrito[index].agregarUnidad();
        carrito[index].actualizarPrecioTotal();
    } else {
        
        carrito.push(new Manga(mangas[idProducto], 1));
    }

    localStorage.setItem("carritoEnStorage", JSON.stringify(carrito));
    imprimirTabla(carrito);
}

function eliminarDelCarrito(id) {
    
    let manga= carrito.find((manga) => alfajor.id === id);

    let index = carrito.findIndex((element) => element.id === manga.id);

    if (manga.cantidad > 1) {
       
        carrito[index].quitarUnidad();
        carrito[index].actualizarPrecioTotal();
    } else {
        
        carrito.splice(index, 1);
    }

    swal("Producto eliminado con éxito", "", "success");

    localStorage.setItem("carritoEnStorage", JSON.stringify(carrito));
    imprimirTabla(carrito);
}

function eliminarCarrito() {
    carrito = [];
    localStorage.removeItem("carritoEnStorage");

    document.getElementById("carrito").innerHTML = "";
    document.getElementById("acciones-carrito").innerHTML = "";
}

function obtenerPrecioTotal(array) {
    return array.reduce((total, elemento) => total + elemento.precioTotal, 0);
}


function imprimirTabla(array) {
    let precioTotal = obtenerPrecioTotal(array);
    let contenedor = document.getElementById("carrito");
    listaDeMangas.innerHTML = "";

    let tabla = document.createElement("div");

    tabla.innerHTML = `
        <table id="tablaCarrito" class="table table-striped">
            <thead>         
                <tr>
                    <th>Item</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>Accion</th>
                </tr>
            </thead>
            <tbody id="bodyTabla">
            </tbody>
        </table>
    `;

    listaDeMangas.appendChild(tabla);

    
    let bodyTabla = document.getElementById("bodyTabla");

    for (let manga of array) {
        let datos = document.createElement("tr");
        datos.innerHTML = `
                <td>${manga.titulo}</td>
                <td>${manga.cantidad}</td>
                <td>$${manga.precioTotal}</td>
                <td><button id="eliminar${manga.id}" class="btn btn-dark">Eliminar</button></td>
      `;

        bodyTabla.appendChild(datos);

        let botonEliminar = document.getElementById(`eliminar${manga.id}`);
        botonEliminar.addEventListener("click", () => eliminarDelCarrito(manga.id));
    }

    let accionesCarrito = document.getElementById("acciones-carrito");
    accionesCarrito.innerHTML = `
		<h5>PrecioTotal: $${precioTotal}</h5></br>
		<button id="vaciarCarrito" onclick="eliminarCarrito()" class="btn btn-dark">Vaciar Carrito</button>
	`;
}

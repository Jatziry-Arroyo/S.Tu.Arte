let productos = [];
fetch("../package/products.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    });

const contenedorProductos = document.querySelector(".obras-artistas");

function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");

        div.innerHTML = `
        <div class="product-card" style="width: 18rem;" id="${producto.id}">
        <div id="${producto.id}" class="product-card__container">
          <div id="${producto.id}" class="product-card__btn cart" data-tooltip="agregar al carrito"><span class="material-symbols-rounded"> shopping_bag </span></div>
          <div class="product-card__img">
            <img class="card-img-top" src="${producto.images}" alt="${producto.name}" />
          </div>
        </div>
        <br>
        <div class="product-card__description">
         <h3 class="card-title">${producto.name}</h3>
         <br>
         <p class="card-artist">${producto.artist}</p>
         <p class="card-text">${producto.description}</p>
         <div class="card">
           <div class="card-header"> Ficha Técnica </div>
             <ul class="list-group list-group-flush" id="ficha-tecnica">
               <li class="list-group-item">Técnica: ${producto.tecnica}</li>
               <li class="list-group-item">  Materiales: ${producto.materiales} </li>
               <li class="list-group-item"> Dimensiones : ${producto.ancho} ${producto.altura} ${producto.profundidad}</li> 
             </ul>
         </div>
         <br>
         <button id="boton-producto" class="btn btn-light" type="submit">${producto.price}</button>
        </div>
     </div>
        `;
        contenedorProductos.append(div);
    });
    actualizarBotonesAgregar();
}

function actualizarBotonesAgregar() {
    document.querySelectorAll(".product-card__btn").forEach(boton => {
        boton.addEventListener("click", function () {
            const productoId = this.closest('.product-card').dataset.productId;
            //const productoId = e.currentTarget.id;
            console.log(productoId);
            const producto = productos.find(p => p.id == productoId);
            console.log(producto);
            localStorage.setItem('Producto', productoId);
            localStorage.setItem('productosEnCarrito', 1);
            actualizarNumeroCarrito();
        });
    });
    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #4b33a8, #785ce9)",
            borderRadius: "2rem",
            textTransform: "uppercase",
            fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem',
            y: '1.5rem'
        },
        onClick: function () { } // Callback after click
    }).showToast();
    console.log("PA");
}

function actualizarNumeroCarrito() {
    const productosEnCarrito = localStorage.getItem("productosEnCarrito");
    const contenedorNumCarrito = document.querySelector("#numerito");
    //const productosEnCarrito = localStorage.getItem("productosEnCarrito") || [];
    //const totalProductos = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    /*if(productosEnCarrito==null){contenedorNumCarrito.innerHTML = ""}
    else{contenedorNumCarrito.innerHTML = "1"}*/
    contenedorNumCarrito.innerHTML = productosEnCarrito;
}
window.addEventListener('storage', actualizarNumeroCarrito);

actualizarNumeroCarrito();




//let botonesAgregar = document.querySelectorAll(".producto-agregar");

//const mostPopProducts = document.querySelector(".obras-artistas");

/*function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

function agregarAlCarrito(e) {
    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right", 
        stopOnFocus: true,
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem',
            y: '1.5rem'
          },
        onClick: function(){}
      }).showToast();

    const idBoton = e.currentTarget.id;
    console.log(idBoton);
    const productoAgregado = productos.find(producto => producto.id == idBoton);
    console.log(productoAgregado);

    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", idBoton);
}*/

/*const jsonFile = "../package/products.json";

fetch(jsonFile)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        addProductCards(mostPopProducts, data.slice(0));
    });

*/
/*
const mostPopProducts = document.querySelector(".obras-artistas");

const jsonFile = "../package/products.json";

fetch(jsonFile)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        addProductCards(mostPopProducts, data.slice(0));
    });*/
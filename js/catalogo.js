let productos = [];
fetch("../package/products2.json")
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
        if (producto.tecnica==localStorage.getItem('Tecnica')){
        div.innerHTML = `
            <div class="product-card h-100" style="width: 18rem;" data-product-id="${producto.id}">
                <div class="product-card__container">
                  <div class="galeria">
                     <div class="product-card__img">
                         <img src="${producto.images}" alt="${producto.name}"/>
                         <div class="overlay">
                             <h5> Ficha Técnica </h5>
                             <p class="card-technique"> Técnica: ${producto.tecnica}  
                                 <br> Materiales: ${producto.materiales}
                                 <br> Dimensiones: ${producto.ancho} x ${producto.altura} x ${producto.profundidad}
                              </p>  
                         </div>
                       </div>
                  </div>
                </div>
                <div class="product-card__description">
                    <h3 class="card-title">${producto.name}</h3>
                    <br>
                    <p class="card-artist">${producto.artist}</p>
                    <p class="card-text">${producto.description}</p>
                    <br>
                    <div class="product-card__price">$${producto.price}</div>
                    <button class="producto-agregar" id="${producto.id}" type="submit" >Agregar al carrito</button>
               </div>
          </div>
        `;
        contenedorProductos.append(div);}
    });
    actualizarBotonesAgregar();
}

function actualizarBotonesAgregar() {
    document.querySelectorAll(".producto-agregar").forEach(boton => {
        boton.addEventListener("click", function () {

            if (localStorage.getItem('productosEnCarrito') == 0 || localStorage.getItem('productosEnCarrito') == null) {
                console.log("Disponible")

                const productCard = this.closest('.product-card');
                const productoId = productCard.dataset.productId;
                const producto = productos.find(p => p.id == productoId);
                console.log(producto);
                localStorage.setItem('Producto', productoId);
                localStorage.setItem('productosEnCarrito', 1);
                actualizarNumeroCarrito();

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
                    onClick: function () { }
                }).showToast();
            } else {
                console.log("No disponible");
                Toastify({
                    text: "Ya tienes un producto en tu carrito",
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
                    onClick: function () { }
                }).showToast();
            }
        });

    });
}


function actualizarNumeroCarrito() {
    const productosEnCarrito = localStorage.getItem("productosEnCarrito");
    const contenedorNumCarrito = document.querySelector("#numerito");
    contenedorNumCarrito.innerHTML = productosEnCarrito || 0;
}

window.addEventListener('storage', actualizarNumeroCarrito);

actualizarNumeroCarrito();

// Guardando la tècnica para filtrar
const pageGrabado = document.getElementById('pageGrabado');
pageGrabado.addEventListener('click', function(){localStorage.setItem('Tecnica', 'Grabado')});
const pageEscultura = document.getElementById('pageEscultura');
pageEscultura.addEventListener('click', function(){localStorage.setItem('Tecnica', 'Escultura')});
const pageOleo = document.getElementById('pageOleo');
pageOleo.addEventListener('click', function(){localStorage.setItem('Tecnica', 'Óleo')});
const pageCollage = document.getElementById('pageCollage');
pageCollage.addEventListener('click', function(){localStorage.setItem('Tecnica', 'Collage')});
const pageAcuarela = document.getElementById('pageAcuarela');
pageAcuarela.addEventListener('click', function(){localStorage.setItem('Tecnica', 'Acuarela')});
const pageFotografia = document.getElementById('pageFotografia');
pageFotografia.addEventListener('click', function(){localStorage.setItem('Tecnica', 'Fotografía')});
const pageAcrilico = document.getElementById('pageAcrilico');
pageAcrilico.addEventListener('click', function(){localStorage.setItem('Tecnica', 'Acrílico')});
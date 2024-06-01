
function generateProductCard(product) {
    const { id, name, artist, description, tecnica, materiales, ancho, altura, profundidad, price, images } = product;
    return `
      <div class="product-card" style="width: 18rem;" id="${id}">
        <div class="product-card__container">
          <div class="product-card__btn cart" data-tooltip="agregar al carrito"><span class="material-symbols-rounded"> shopping_bag </span></div>
          <div class="product-card__btn fav" data-tooltip="me gusta"><span class="material-symbols-rounded"> favorite </span></div>
          <div class="product-card__img">
            <img class="card-img-top" src="${images}" alt="${name}" />
          </div>
        </div>
        <br>
        <div class="product-card__description">
         <h3 class="card-title">${name}</h3>
         <br>
         <p class="card-artist">${artist}</p>
         <p class="card-text">${description}</p>
         <div class="card">
           <div class="card-header"> Ficha Técnica </div>
             <ul class="list-group list-group-flush" id="ficha-tecnica">
               <li class="list-group-item">Técnica: ${tecnica}</li>
               <li class="list-group-item">  Materiales: ${materiales} </li>
               <li class="list-group-item"> Dimensiones : ${ancho} ${altura} ${profundidad}</li> 
             </ul>
         </div>
         <br>
         <button id="boton-producto" class="btn btn-light" type="submit">${price}</button>
        </div>
     </div>
    `;
  }

// Esta función es para agregar las tarjetas al contenedor específico
function addProductCards(container, products) {
    const html = products.map(product => generateProductCard(product)).join('');
    container.innerHTML += html;
}

const mostPopProducts = document.querySelector(".obras-artistas");

const jsonFile = "../package/products.json";

fetch(jsonFile)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        addProductCards(mostPopProducts, data.slice(0));
    });
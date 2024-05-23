
function generateProductCard(product) {
    const { id, name, artist, description, tecnica, materiales, ancho, altura, profundidad, price, images } = product;
    return `
        <div class="product-card" data-product-id="${id}">
            <div class="product-card__container">
                <div class="product-card__btn cart" data-tooltip="agregar al carrito"><span class="material-symbols-rounded"> shopping_bag </span></div>
                <div class="product-card__btn fav" data-tooltip="me gusta"><span class="material-symbols-rounded"> favorite </span></div>
                <div class="product-card__img">
                    <img src="${images}" alt="${name}" />
                </div>
            </div>
            <div class="product-card__description">
                <div class="product-card__text">${name}</div>
                <div class="product-card__text">${artist}</div>
                <div class="product-card__text">${description}</div>
                <div class="product-card__text">${tecnica}</div>
                <div class="product-card__text">${materiales}</div>
				<div class="product-card__text">${ancho}</div>
				<div class="product-card__text">${altura}</div>
				<div class="product-card__text">${profundidad}</div>
                <div class="product-card__price">${price}</div>
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
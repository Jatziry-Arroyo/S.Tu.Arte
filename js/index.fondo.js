const container = document.querySelector('.container1');
const colors = [
    'linear-gradient(45deg, #B100A8, #0D0AAF)',
    'linear-gradient(45deg, #0D0AAF, #D38F33)',
    'linear-gradient(45deg, #D38F33, #0D0AAF)',
    'linear-gradient(45deg, #0D0AAF, #B100A8)'
];

const createShape = (shape) => {
    if (!container) {
        console.error('Container element not found');
        return;
    }

    let figure = document.createElement('span');
    let select = Math.floor(colors.length * Math.random());

    figure.classList.add(shape);
    
    figure.style.top = window.innerHeight * Math.random() + 'px';
    figure.style.left = window.innerWidth * Math.random() + 'px';
    figure.style.background = colors[select];
    container.appendChild(figure);

    setInterval(() => {
        figure.style.top = window.innerHeight * Math.random() + 'px';
        figure.style.left = window.innerWidth * Math.random() + 'px';
    }, 6000);
};

const figures = () => {
    for (let i = 0; i <= 15; i++) {
        createShape('square');
        createShape('circle');
    }
};

figures();

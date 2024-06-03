// task 1
let number = 10;
document.getElementById('up').addEventListener('click', () => {
    number++;
    show.textContent = number;
});

document.getElementById('down').addEventListener('click', () => {
    number--;
    show.textContent = number;
});
document.getElementById('number');

// task 2
/*let getRandom = () => Math.floor(Math.random() * 256);
let getRGB = () => `rgb(${getRandom()},${getRandom()},${getRandom()})`;

function getElement() {
    let div = document.createElement('div');
    div.style.width = div.style.height = '150px';
    let rgb = getRGB();
    div.style.backgroundColor = rgb;
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    div.textContent = rgb;
    div.addEventListener('click', () => {
        div.remove();
    });
    document.querySelector('.task2').insertAdjacentElement('afterbegin', div);
}

document.querySelector('button').addEventListener('click', () => {
    getElement();
});*/


// task 3
let getColor = () => Math.floor(Math.random(18) * 256);
function rndColor() {
    const colors = [];
    for (let i = 0; i < 30; i++) {
        const color = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
        colors.push(color);
    }
    return colors;
}


function getSquare() {
    let div = document.createElement('div');
    div.style.width = div.style.height = '50px';
    div.style.backgroundColor = getRandomColor();
    div.style.display = 'flex';
    div.style.justifyContent = 'center';
    div.style.alignItems = 'center';
    return div; 
}

document.querySelector('button').addEventListener('click', () => {
    const palette = document.querySelector('.palette');
    const square = getSquare();
    palette.appendChild(square);
});
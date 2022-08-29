const gridContainer = document.querySelector('#grid-container');

const square = document.createElement('div')
square.classList.add('square');
// gridContainer.appendChild(square);

for (let i = 0; i < 256; i++) {
    gridContainer.appendChild(square.cloneNode(true));
    console.log(i);
};

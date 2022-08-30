const rowContainer = document.querySelector('#row-container');
const row = document.createElement('div');
const square = document.createElement('div');
square.classList.add('square');
row.classList.add('row');

let userInput = 20;

function addRows(userInput) {
    for (let i = 1; i <= userInput; i++) {
            rowContainer.appendChild(row.cloneNode(true));
        };
    };
    
function addSquares(userInput) {
    const rows = document.querySelectorAll('#row-container > *');
    rows.forEach(row => {
        for (let i = 1; i <= userInput; i++) {
            row.appendChild(square.cloneNode(true));
        };
    });
};

function addHoverEffect() {
    document.querySelectorAll('.square').forEach(square => {
        square.addEventListener('mouseenter', (e) => {
            square.classList.add('square-hover');
        });
    });
};

addRows(userInput)
addSquares(userInput)
addHoverEffect();
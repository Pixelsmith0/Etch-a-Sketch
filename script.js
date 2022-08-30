const rowContainer = document.querySelector('#row-container');
const row = document.createElement('div');
const square = document.createElement('div');
square.classList.add('square');
row.classList.add('row');

let userInput = 25;

function addRows(userInput) {
    for (let i = 1; i <= (userInput * userInput); i++) {
        if (i % userInput == 0) {
            rowContainer.appendChild(row.cloneNode(true));
        };
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

addRows(userInput)
addSquares(userInput)

document.querySelectorAll('.square').forEach(square => {
    square.addEventListener('mouseenter', (e) => {
        square.classList.add('square-hover');
    });
});
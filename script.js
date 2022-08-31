const rowContainer = document.querySelector('#row-container');
const row = document.createElement('div');
const square = document.createElement('div');
square.classList.add('square');
row.classList.add('row');
let userInput = getUserInput();
//Asks the user to input a number <=100, if they input a number >100, defaults to 100. Returns that value
function getUserInput() {
    let userInput = prompt('Please enter the number of rows you would like. (Max 100)', '');
    if (userInput > 100) {
        userInput = 100;
    }
    return userInput;
};

// Adds (userInput) amount of ".row" divs to #row-container
function addRows(userInput) {
    for (let i = 1; i <= userInput; i++) {
            rowContainer.appendChild(row.cloneNode(true));
        };
    };
// Adds (userInput) amount of ".square(s)"" to each child of #row-container
function addSquares(userInput) {
    const rows = document.querySelectorAll('#row-container > *');
    rows.forEach(row => {
        for (let i = 1; i <= userInput; i++) {
            row.appendChild(square.cloneNode(true));
        };
    });
};
// Adds hover-trail effect to all individual ".square(s)" 
function addHoverEffect() {
    document.querySelectorAll('.square').forEach(square => {
        square.addEventListener('mouseenter', (e) => {
            square.classList.add('square-hover');
        });
    });
};
// Removes all ".row" divs
function clearGrid() {
    const toRemove = document.querySelectorAll('.row')
    for (const row of toRemove) {
        row.remove();
    };  
};
// Adds the initial grid
addRows(userInput);
addSquares(userInput);
addHoverEffect();

// On click, removes all divs in #row-container, gets the desired grid size from the user, adds the appropriate amount of 
// .row divs and .square divs, and adds the hover effect.
document.querySelector('#generate-btn').addEventListener('click', (e) => {
    clearGrid();
    let newInput = getUserInput();
    addRows(newInput);
    addSquares(newInput);
    addHoverEffect();
});
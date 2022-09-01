const rowContainer = document.querySelector('#row-container');
const row = document.createElement('div');
const square = document.createElement('div');
square.classList.add('square');
row.classList.add('row');
let userInput = getUserInput();

//Asks the user to input a number <=50, if they input a number >50, defaults to 50. Returns that value
function getUserInput() {
    let userInput = prompt('Please enter the number of rows you would like. (Max 50)', '');
    if (userInput > 50) {
        userInput = 50;
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

// When the mouse enters a .square div, applies a random color with HSL(Hue, Saturation, Lightness). When re-entering a     
// .square div, checks the lightness percentage and will reduce by 7% if above 0%.  
function addRgbEffect() {
    document.querySelectorAll('.square').forEach(square => {
        let lightness = 70;
        square.addEventListener('mouseenter', (e) => {
            square.style.backgroundColor = `hsl(${360 * Math.random()}, 100%, ${lightness}%`;
            if (lightness > 0) {
                lightness -= 7;
            };
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
// Same as the generate button but uses addRgbEffect instead of addHoverEffect.
document.querySelector('#rgb-btn').addEventListener('click', (e) => {
    clearGrid();
    let newInput = getUserInput();
    addRows(newInput);
    addSquares(newInput);
    addRgbEffect();
});
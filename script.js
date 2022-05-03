function removeGrid(remove) {
    for (i = 1; i <= remove; i++) {
        let child = document.getElementById(`row${[i]}`);
        containerDiv.removeChild(child);
    }
}

function eraseGrid() {
        const squares = document.getElementsByClassName('squareBox');
        for (i = 0; i < squares.length; i++) {
            squares[i].style.backgroundColor = 'rgb(227, 227, 227)';
        }
}

function resizeGrid() {
    removeGrid(sliderValue);
    sliderValue = slider.value;
    createGrid(sliderValue);
}

function toggleColorMode(button) {
    const getBtnValue = button.value;
    if (getBtnValue === 'normal') {
        return btnValue = 'normal';
    } else if (getBtnValue === 'random') {
        return btnValue = 'random';
    }
}

function getRandomNum() { // gets random number to use to randomly pick a color for squares when moused over
    return Math.floor(Math.random() * 256);
}

function createGrid(rows) {
    for (i = 1; i <= rows; i++) {
        const row = document.createElement('div');
        row.setAttribute('id', `row${[i]}`);
        containerDiv.appendChild(row);
    
        for (j = 0; j < rows; j++) {
            const squareBox = document.createElement('div');
            squareBox.setAttribute('class', `squareBox`);
            row.appendChild(squareBox);

            // This changes the colors of the squares when moused over
            squareBox.addEventListener('mouseover', () => {
                if (btnValue === 'normal') {
                    squareBox.style.backgroundColor = 'rgb(0, 0, 0)';
                } else if (btnValue === 'random') {
                    squareBox.style.backgroundColor = `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`;
                }
            });
        }
    }
}

const containerDiv = document.getElementById('container');
const clearBtn = document.getElementById('clear');
let slider = document.getElementById('myRange');
let sliderValue = slider.value;
let btnValue = 'normal';

slider.addEventListener('input', resizeGrid);
clearBtn.addEventListener('click', eraseGrid);

createGrid(slider.value);
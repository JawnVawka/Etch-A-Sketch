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

function createGrid(rows) {
    for (i = 1; i <= rows; i++) {
        const row = document.createElement('div');
        row.setAttribute('id', `row${[i]}`);
        containerDiv.appendChild(row);
    
        for (j = 0; j < rows; j++) {
            const squareBox = document.createElement('div');
            squareBox.setAttribute('class', `squareBox`);
            row.appendChild(squareBox);
            squareBox.addEventListener('mouseover', () => {
                squareBox.style.backgroundColor = '#000000';
            })
            squareBox.addEventListener('touchmove', () => {
                squareBox.style.backgroundColor = '#000000';
            })
        }
    }
}

const containerDiv = document.getElementById('container');
const clearBtn = document.getElementById('clear');
let slider = document.getElementById('myRange');
let sliderValue = slider.value;

slider.addEventListener('input', resizeGrid);
clearBtn.addEventListener('click', eraseGrid);

createGrid(slider.value);
const ROWS = 32;
const DIV_SQUARES = 32;

const containerDiv = document.createElement('div');
containerDiv.setAttribute('id', 'container');
document.body.appendChild(containerDiv);

for (i = 1; i <= ROWS; i++) {
    const container = document.getElementById('container');
    const row = document.createElement('div');
    row.setAttribute('id', `row${[i]}`);
    container.appendChild(row);

    for (j = 0; j < DIV_SQUARES; j++) {
        const parent = document.getElementById(`row${[i]}`);
        const squareBox = document.createElement('div');
        squareBox.setAttribute('id', `squareBox${[i]}`);
        parent.appendChild(squareBox);
        squareBox.addEventListener('mouseover', () => {
            squareBox.style.backgroundColor = '#000000';
        })
    }
}
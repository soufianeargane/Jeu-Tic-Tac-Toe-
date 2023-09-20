// get html elements
const gameBoard = document.getElementById('gameBoard');

let currentPlayer = 'X';

// create game board
for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.dataset.row = i;
        square.dataset.col = j;
        square.addEventListener('click', handleClick);
        gameBoard.appendChild(square);
    }
}

function handleClick(event) {
    const row = event.target.dataset.row;
    const col = event.target.dataset.col;
    console.log("position is" +row, col);
    event.target.textContent = currentPlayer;
    event.target.classList.add(currentPlayer);
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    event.target.removeEventListener('click', handleClick);
}

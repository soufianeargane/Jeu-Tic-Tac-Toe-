// get html elements
const gameBoard = document.getElementById('gameBoard');

// set initial variables
let tracking_game = Array(20).fill().map(() => Array(20).fill(''));
console.log(tracking_game);
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
    tracking_game[row][col] = currentPlayer;
    event.target.textContent = currentPlayer;
    event.target.classList.add(currentPlayer);
    if( checkWin()){
        console.warn("it is over. " + currentPlayer + "  Wins")
    }else{
        //i need a condition hna
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        event.target.removeEventListener('click', handleClick);
        console.log(tracking_game);
    }
}

function checkWin() {
    console.log("messi");
    // Check for horizontal wins
    for (let i = 0; i < 20; i++) {
        for (let j = 0; j < 16; j++) {
            if(tracking_game[i][j]=== currentPlayer &&
                tracking_game [i][j + 1] === currentPlayer &&
                tracking_game [i][j + 2] === currentPlayer &&
                tracking_game [i][j + 3] === currentPlayer &&
                tracking_game [i][j + 4] === currentPlayer
            ){
                return true;
            }
        }
    }
    return false;
}

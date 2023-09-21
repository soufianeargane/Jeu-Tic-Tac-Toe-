// get html elements
const gameBoard = document.getElementById('gameBoard');
const playerXScore = document.getElementById('playerXScore');
const playerOScore = document.getElementById('playerOScore');
let xWins = 0;
let oWins = 0;

// set initial variables
let tracking_game = Array(20).fill().map(() => Array(20).fill(''));
//console.log(tracking_game);


let currentPlayer = 'X';



init();

function handleClick(event) {
    const row = event.target.dataset.row;
    const col = event.target.dataset.col;
    tracking_game[row][col] = currentPlayer;
    event.target.textContent = currentPlayer;
    event.target.classList.add(currentPlayer);
    if( checkWin(row, col)){
        //console.warn("it is over. " + currentPlayer + "  Wins")
        //announceWinner();
        // stop the game
        //stopGame();
        // announce the winner
    }else{
        //i need a condition hna
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        event.target.removeEventListener('click', handleClick);
    }
}

function checkWin(row, col) {

        if (
            (checkRight(row, col) + checkLeft(row, col) + 1)       === 5 ||
            (checkUp(row, col) + checkDown(row, col) + 1)          === 5 ||
            (checkRightDown(row, col) + checkLeftUp(row, col) + 1) === 5 ||
            (checkLeftDown(row, col) + checkRightUp(row, col) + 1) === 5
        ) {
            console.warn("Player " + currentPlayer + " wins!");
        }else{
            return console.log("no win");
        }
        return ;
    }



function stopGame() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.removeEventListener('click', handleClick);
    });
}

// initialize the game
function init() {
    gameBoard.innerHTML = '';
    // create the game board
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
    currentPlayer = 'X';
    tracking_game = Array(20).fill().map(() => Array(20).fill(''));
}

function announceWinner() {
    if (currentPlayer === 'X') {
        xWins++;
        playerXScore.textContent = xWins;
        console.warn('Player X wins!');
    } else {
        oWins++;
        playerOScore.textContent = oWins;
        console.warn('Player O wins!');
    }
    init();
}

// reset the game
document.getElementById('reset').addEventListener('click', init);

function checkRight(row, col) {
    let count = 0;
    // Check to the right
    for (let i = (parseInt(col)+1) ; i < 20; i++) {
        if (tracking_game[row][i] === currentPlayer) {
            count++;
        } else {
            break;
        }
    }
    return count;
}

function checkLeft(row, col) {
    let count = 0;

    // Check to the left
    for (let i = col - 1; i >= 0; i--) {
        if (tracking_game[row][i] === currentPlayer) {
            count++;
        } else {
            break; // Stop counting if a different symbol is encountered
        }
    }

    return count;
}

function checkUp(row, col) {
    let count = 0;

    // Check up
    for (let i = (row - 1); i >= 0; i--) {
        if (tracking_game[i][col] === currentPlayer) {
            count++;
        } else {
            break; // Stop counting if a different symbol is encountered
        }
    }

    return count;
}

function checkDown(row, col) {
    let count = 0;

    // Check down
    for (let i = parseInt(row + 1); i < 20; i++) {
        if (tracking_game[i][col] === currentPlayer) {
            count++;
        } else {
            break; // Stop counting if a different symbol is encountered
        }
    }

    return count;
}

function checkRightDown(row, col) {
    let count = 0;
    // Check down and right
    for(let i = parseInt(row) + 1, j = parseInt(col) + 1; i < 20 && j < 20; i++, j++) {
        if (tracking_game[i][j] === currentPlayer) {
            count++;
        } else {
            break; // Stop counting if a different symbol is encountered
        }
    }
    return count;
}

function checkLeftUp(row, col) {
    let count = 0;
    // Check up and left
    for(let i = parseInt(row) - 1, j = parseInt(col) - 1; i >= 0 && j >= 0; i--, j--) {
        if (tracking_game[i][j] === currentPlayer) {
            count++;
        } else {
            break; // Stop counting if a different symbol is encountered
        }
    }
    return count;
}

function checkLeftDown(row, col){
    let count = 0;
    // Check down and left
    for(let i = parseInt(row) + 1, j = parseInt(col) - 1; i < 20 && j >= 0; i++, j--) {
        if (tracking_game[i][j] === currentPlayer) {
            count++;
        } else {
            break; // Stop counting if a different symbol is encountered
        }
    }
    return count;
}

function checkRightUp(row, col){
    let count = 0;
    // Check up and right
    for(let i = parseInt(row) - 1, j = parseInt(col) + 1; i >= 0 && j < 20; i--, j++) {
        if (tracking_game[i][j] === currentPlayer) {
            count++;
        } else {
            break;
        }
    }
    return count;
}

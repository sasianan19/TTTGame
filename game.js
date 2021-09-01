const x_class = 'x'; //const = that var will stay constant!
const circle_class = 'circle';
const winningSequences = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const cellElements = document.querySelectorAll('[data-game-cell]');
const board = document.getElementById('board');
let circleTurn; //t or f flag
const restartBtn = document.getElementById("restartButton");

startGame()
restartBtn.addEventListener('click', startGame);
function startGame() {
    circleTurn = false //x is first
    cellElements.forEach(function(cell) {
        cell.classList.remove(x_class);
        cell.classList.remove(circle_class);
        cell.addEventListener('click', handleClick, {once: true});
    })
    document.getElementById("winning-message").style.display = "none";
    
    setHoverBoardClass()

}

function handleClick(e) {
    const cell = e.target;

    //!players turn
    const currentPlayer = circleTurn ? circle_class : x_class; //if circleTurn is t, currentPlayer = circle_class; if f, = x_class

    //!mark the box
    placeMark(cell, currentPlayer);

    //!check for win
    if(checkWin(currentPlayer)) {
        console.log("win");
        document.getElementById("winning-message").style.display = "flex";
    } 

    //!check for tie?
   

    //!switch players
  switchPlayer();
  //!add classes to get hover effect
  setHoverBoardClass();

}

function placeMark(cell, currentPlayer) {
    cell.classList.add(currentPlayer)
}

function switchPlayer() {
    circleTurn = !circleTurn
}

function checkWin(currentPlayer) {
    return winningSequences.some(combination => {
        console.log(`This is ${combination}`) 
        return combination.every(index => {
            console.log(`This is ${index}`)
            return cellElements[index].classList.contains(currentPlayer)
        })
    })
}

function setHoverBoardClass() {
    board.classList.remove(x_class);
    board.classList.remove(circle_class);
    if(circleTurn) {
        board.classList.add(circle_class)
    } else {
        board.classList.add(x_class);
    }
}

//!reset board



//?check for a  tie

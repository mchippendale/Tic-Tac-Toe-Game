
document.querySelector('.game-tile').dataset.square

// DECLARATIONS: 

var gameTile = document.querySelectorAll('.game-tile')

var player1Btn = document.querySelector('.player1-btn')
var player1SelectBox = document.querySelector('#select-p1')

var player2Btn = document.querySelector('.player2-btn')
var player2SelectBox = document.querySelector('#select-p2')

var newGameBtn = document.querySelector('.new-game-btn')

var p1Moves = []
var p2Moves = []
var currentPlayer = ""


// FUNCTIONS:


function handleTurn (event) {
    if (currentPlayer == 'player1') {
        playerOneMove(event)
    } else if (currentPlayer == 'player2'){
        playerTwoMove(event)
    } 
}


function SelectPlayerOne() {
    player1SelectBox.classList.toggle('light-green')
    currentPlayer = "player1"
}

function playerOneMove(event) {

    var tile = event.target
    tile.classList.add('light-green') 
    p1Moves.push(tile.dataset.square)
    player1SelectBox.classList.remove('light-green')
    currentPlayer = ""

    if (p1Moves.includes('1') && p1Moves.includes('2') && p1Moves.includes('3')) {
        return console.log('you win')
    } else if (p1Moves.includes('4') && p1Moves.includes('5') && p1Moves.includes('6')) {
        return console.log('you win')
    } else if (p1Moves.includes('7') && p1Moves.includes('8') && p1Moves.includes('9')) {
        return console.log('you win')
    } else if (p1Moves.includes('1') && p1Moves.includes('5') && p1Moves.includes('9')) {
        return console.log('you win')
    } else if (p1Moves.includes('7') && p1Moves.includes('5') && p1Moves.includes('3')) {
        return console.log('you win')
    } else if (p1Moves.includes('1') && p1Moves.includes('4') && p1Moves.includes('7')) {
        return console.log('you win')
    } else if (p1Moves.includes('2') && p1Moves.includes('5') && p1Moves.includes('8')) {
        return console.log('you win')
    } else if (p1Moves.includes('3') && p1Moves.includes('6') && p1Moves.includes('9')) {
        return console.log('you win')
    } else {
        checkDraw()
    }
}

function playerOneWins() {
    
}

function playerTwoMove(event) {

    var tile = event.target
    tile.classList.add('light-purple') 
    p2Moves.push(tile.dataset.square)
    
    player2SelectBox.classList.remove('light-purple')
    currentPlayer = ""

    if (p2Moves.includes('1') && p2Moves.includes('2') && p2Moves.includes('3')) {
        return p2Moves
    } else if (p2Moves.includes('4') && p2Moves.includes('5') && p2Moves.includes('6')) {
        return console.log('you win')
    } else if (p2Moves.includes('7') && p2Moves.includes('8') && p2Moves.includes('9')) {
        return console.log('you win')
    } else if (p2Moves.includes('1') && p2Moves.includes('5') && p2Moves.includes('9')) {
        return console.log('you win')
    } else if (p2Moves.includes('7') && p2Moves.includes('5') && p2Moves.includes('3')) {
        return console.log('you win')
    } else if (p2Moves.includes('1') && p2Moves.includes('4') && p2Moves.includes('7')) {
        return console.log('you win')
    } else if (p2Moves.includes('2') && p2Moves.includes('5') && p2Moves.includes('8')) {
        return console.log('you win')
    } else if (p2Moves.includes('3') && p2Moves.includes('6') && p2Moves.includes('9')) {
        return console.log('you win')
    } else {
        checkDraw()
    }

}


function SelectPlayerTwo() {
    player2SelectBox.classList.toggle('light-purple')
    currentPlayer = 'player2'
}


function checkDraw(params) {
    if (p1Moves.length  + p2Moves.length == 9) {
        console.log('Game is a draw')
    }
}


function handleNewGame() {
    for (var i = 0; i < gameTile.length; i++) {
        gameTile[i].classList.remove('light-green', 'light-purple')
    }
    p1Moves = []
    p2Moves = []
}










// EVENT LISTENERS:

for (var i = 0; i < gameTile.length; i++) {
    gameTile[i].addEventListener('click', handleTurn)
}

player1Btn.addEventListener('click', SelectPlayerOne)
player2Btn.addEventListener('click', SelectPlayerTwo)
newGameBtn.addEventListener('click', handleNewGame)

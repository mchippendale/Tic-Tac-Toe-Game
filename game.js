
document.querySelector('.game-tile').dataset.square

// -----------------------------------DECLARATIONS:-----------------------------------

var gameTile = document.querySelectorAll('.game-tile')

var player1Btn = document.querySelector('.player1-btn')
var player1SelectBox = document.querySelector('#select-p1')

var player2Btn = document.querySelector('.player2-btn')
var player2SelectBox = document.querySelector('#select-p2')

var newGameBtn = document.querySelector('.new-game-btn')

var displayWinner = document.querySelector('#display-winner')

var p1Moves = []
var p2Moves = []
var currentPlayer = ""


// -----------------------------------FUNCTIONS:-----------------------------------


function handleTurn (event) {
    if (currentPlayer == 'player1') {
        var tile = event.target
        tile.classList.add('light-green')
        player1SelectBox.classList.remove('light-green')
        currentPlayer = ""
        playerMove(event, p1Moves)

    } else if (currentPlayer == 'player2'){
        var tile = event.target
        tile.classList.add('light-purple')
        player1SelectBox.classList.remove('light-green')
        currentPlayer = ""
        playerMove(event, p2Moves)
    } 
}

function playerMove (event, array) {
    var tile = event.target
    array.push(tile.dataset.square)

    if (array.includes('1') && array.includes('2') && array.includes('3')) {
        return displayWinner.textContent = `You win`
    } else if (array.includes('4') && array.includes('5') && array.includes('6')) {
        return displayWinner.textContent = `You win`
    } else if (array.includes('7') && array.includes('8') && array.includes('9')) {
        return displayWinner.textContent = `You win`
    } else if (array.includes('1') && array.includes('5') && array.includes('9')) {
        return displayWinner.textContent = `You win`
    } else if (array.includes('7') && array.includes('5') && array.includes('3')) {
        return displayWinner.textContent = `You win`
    } else if (array.includes('1') && array.includes('4') && array.includes('7')) {
        return displayWinner.textContent = `You win`
    } else if (array.includes('2') && array.includes('5') && array.includes('8')) {
        return displayWinner.textContent = `You win`
    } else if (array.includes('3') && array.includes('6') && array.includes('9')) {
        return displayWinner.textContent = `You win`
    } else {
        checkDraw()
    }
}


function SelectPlayerOne() {
    player1SelectBox.classList.toggle('light-green')
    currentPlayer = "player1"
}


function playerOneWins() {
    
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




// -----------------------------------EVENT LISTENERS:-----------------------------------

for (var i = 0; i < gameTile.length; i++) {
    gameTile[i].addEventListener('click', handleTurn)
}



player1Btn.addEventListener('click', SelectPlayerOne)
player2Btn.addEventListener('click', SelectPlayerTwo)
newGameBtn.addEventListener('click', handleNewGame)



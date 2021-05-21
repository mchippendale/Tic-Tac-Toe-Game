
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

var gameTitle = document.querySelector('.game-title')
var gameDescription = document.querySelector('.game-description')
var gameInstruction = document.querySelector('.game-instructions')
var factOne = document.querySelector('.fact-1')
var exitFactOne = document.querySelector('.exit1-symbol')
var fact1Container = document.querySelector('.fact1-container')

var factTwo = document.querySelector('.fact-2')
var exitFactTwo = document.querySelector('.exit2-symbol')

var factThree = document.querySelector('.fact-3')
var exitFactThree = document.querySelector('.exit3-symbol')

//-----------------------------------FUNCTIONS:-----------------------------------


function handleTurn (event) {
    if (currentPlayer == 'player1') {
        var tile = event.target
        tile.classList.add('light-green-text')
        tile.textContent = 'X'

        player1SelectBox.classList.remove('light-green')
        currentPlayer = ""
        playerMove(event, p1Moves)

    } else if (currentPlayer == 'player2'){
        var tile = event.target
        tile.classList.add('light-purple-text')
        tile.textContent = 'O'

        player2SelectBox.classList.remove('light-purple')
        currentPlayer = ""
        playerMove(event, p2Moves)
    } 
}

function playerMove (event, array) {
    var tile = event.target
    array.push(tile.dataset.square)

    if (array.includes('1') && array.includes('2') && array.includes('3')) {
        displayWinner.textContent = `You win`
        gameTile[0].style.backgroundColor = '#fecc91'
        gameTile[1].style.backgroundColor = '#fecc91'
        gameTile[2].style.backgroundColor = '#fecc91'
        return displayWinner.textContent = `You win`
    } else if (array.includes('4') && array.includes('5') && array.includes('6')) {
        gameTile[3].style.backgroundColor = '#fecc91'
        gameTile[4].style.backgroundColor = '#fecc91'
        gameTile[5].style.backgroundColor = '#fecc91'
        return displayWinner.textContent = `You win`
    } else if (array.includes('7') && array.includes('8') && array.includes('9')) {
        gameTile[6].style.backgroundColor = '#fecc91'
        gameTile[7].style.backgroundColor = '#fecc91'
        gameTile[8].style.backgroundColor = '#fecc91'
        return displayWinner.textContent = `You win`
    } else if (array.includes('1') && array.includes('5') && array.includes('9')) {
        gameTile[0].style.backgroundColor = '#fecc91'
        gameTile[4].style.backgroundColor = '#fecc91'
        gameTile[8].style.backgroundColor = '#fecc91'
    } else if (array.includes('7') && array.includes('5') && array.includes('3')) {
        gameTile[6].style.backgroundColor = '#fecc91'
        gameTile[4].style.backgroundColor = '#fecc91'
        gameTile[2].style.backgroundColor = '#fecc91'
        return displayWinner.textContent = `You win`
    } else if (array.includes('1') && array.includes('4') && array.includes('7')) {
        gameTile[0].style.backgroundColor = '#fecc91'
        gameTile[3].style.backgroundColor = '#fecc91'
        gameTile[6].style.backgroundColor = '#fecc91'
        return displayWinner.textContent = `You win`
    } else if (array.includes('2') && array.includes('5') && array.includes('8')) {
        gameTile[1].style.backgroundColor = '#fecc91'
        gameTile[4].style.backgroundColor = '#fecc91'
        gameTile[7].style.backgroundColor = '#fecc91'
        return displayWinner.textContent = `You win`
    } else if (array.includes('3') && array.includes('6') && array.includes('9')) {
        gameTile[2].style.backgroundColor = '#fecc91'
        gameTile[5].style.backgroundColor = '#fecc91'
        gameTile[8].style.backgroundColor = '#fecc91'
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


function checkDraw() {
    if (p1Moves.length  + p2Moves.length == 9) {
        return displayWinner.textContent = `DRAW`
    }
}


function handleNewGame() {
    for (var i = 0; i < gameTile.length; i++) {
        gameTile[i].classList.remove('light-green-text', 'light-purple-text')
        gameTile[i].textContent = ""
        gameTile[i].style.backgroundColor = ''
    }
    p1Moves = []
    p2Moves = []
    displayWinner.textContent = ""

} 

function turnOnFact1() {
    exitFactOne.style.color = 'black'
    factOne.textContent = 'Games played on three-in-a-row boards can be traced back to ancient Egypt, where such game boards have been found on roofing tiles dating from around 1300 BC'
}

function turnOffFact1() {
    exitFactOne.style.color = 'white'
    factOne.textContent = ''
}

function turnOnFact2() {
    exitFactTwo.style.color = 'black'
    factTwo.textContent = 'Medieval pagan rituals were often linked to the game. Back then, they thought the nine square grid held magical properties.'
}

function turnOffFact2() {
    exitFactTwo.style.color = 'white'
    factTwo.textContent = ''
}

function turnOnFact3() {
    exitFactThree.style.color = 'black'
    factThree.textContent = 'The word "Tic" is kind of an Americanization. In the 1800s England, was callled "Tit-Tat-Toe". A "tit" was another word for a slap. "Tat" meant retribution, such as "going tit-for-tat". "Toe" was the name for a third thing in a row.So, "Tit-Tat-Toe" was just a name for the three Xs or Os in a row.'
}

function turnOffFact3() {
    exitFactThree.style.color = 'white'
    factThree.textContent = ''
}


// -----------------------------------EVENT LISTENERS:----------------------------------

for (var i = 0; i < gameTile.length; i++) {
    gameTile[i].addEventListener('click', handleTurn)
}



player1Btn.addEventListener('click', SelectPlayerOne)
player2Btn.addEventListener('click', SelectPlayerTwo)
newGameBtn.addEventListener('click', handleNewGame)

gameTitle.addEventListener('click', turnOnFact1)
exitFactOne.addEventListener('click', turnOffFact1)

gameDescription.addEventListener('click', turnOnFact2)
exitFactTwo.addEventListener('click', turnOffFact2)

gameInstruction.addEventListener('click', turnOnFact3)
exitFactTwo.addEventListener('click', turnOffFact3)


// displayWinner.addEventListener('mouseover', flashMessage) 

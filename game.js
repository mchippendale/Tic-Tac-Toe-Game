
document.querySelector('.game-tile').dataset.square

// DECLARATIONS: 

var gameTile = document.querySelectorAll('.game-tile')

var player1Btn = document.querySelector('.player1-btn')
var player1SelectBox = document.querySelector('#select-p1')

var player2Btn = document.querySelector('.player2-btn')
var player2SelectBox = document.querySelector('#select-p2')

var resetBtn = document.querySelector('.reset-btn')

var p1Moves =[]

// FUNCTIONS:

function playerOneMove(event) {

    if (player1SelectBox.classList[1] == 'light-green') {
        var tile = event.target
        tile.classList.toggle('light-green') 
        p1Moves.push(tile.dataset.square)
    } 
    player1SelectBox.classList.remove('light-green')

//  debugger   

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
        return console.log('keep playing')  
    }

}

var array =[]



function SelectPlayerOne() {
    player1SelectBox.classList.toggle('light-green')
}

function handleReset() {
    for (var i = 0; i < gameTile.length; i++) {
        gameTile[i].classList.remove('light-green')
    }
}

// function playerTwoMove(event) {

//     if (playerTwoSelectBox.classList[1] == 'light-purple') {
//         var tile = event.target
//         tile.classList.toggle('light-purple') 
//     }   
// }

// function SelectPlayerTwo() {
//     player2SelectBox.classList.toggle('light-purple')
// }



// EVENT LISTENERS:

for (var i = 0; i < gameTile.length; i++) {
    gameTile[i].addEventListener('click', playerOneMove)
}

// for (var i = 0; i < gameTile.length; i++) {
//     gameTile[i].addEventListener('click', playerTwoMove)
// }


player1Btn.addEventListener('click', SelectPlayerOne)
player2Btn.addEventListener('click', SelectPlayerTwo)
resetBtn.addEventListener('click', handleReset)

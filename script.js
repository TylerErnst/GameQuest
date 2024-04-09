// Project Details
// MVP - Minimum Viable Product
 

// Built with HTML, CSS and JavaScript (must be visual and use the DOM not the Console)
// Must be a two player game (either against the computer or against another player)
// - Example: Blackjack: A player plays against the dealer. The dealer is the computer
// - Example: Connect Four: Two players pass the game between themselves to take turns,
// - Example: tic-tac toe: two players against each other

// A win state - a way for the player to win the game

// High score can be considered a win state

// A lose state - a way for the player to lose the game

// Example: Blackjack - a player must be able to lose all of their money with losing hands and cannot play
//          if their bankroll is at 0
// Example: Connect Four - the other player has won or there are no possible plays left

// A way to keep playing if the game is not over

// Multiple rounds to play - a round must begin, end, and there must be a way to check if the game should
//       continue or the overall game is won or lost
// - Example: Blackjack: a player takes turns playing a hand versus a computer - the player's hand can either win,
//            lose or tie the dealer. If the player has enough money in their bankroll they can keep playing.
//            A player must be able to win several rounds and increase their bankroll
// - Example: Connect Four: two (non-computer) players take turns adding chips to the board.
//            The game will check if a player won or if the board is full and there are no more plays possible.
//            A player gets four chips in a row (vertically or horizontally)- one person wins, one loses,
//            there are no further plays in this case




//Player turn
//  Highlight player's turn indicator
//  Select piece
    //highligh bottom row and player piece
//  Highlight possible cells to interact with
//       Can select any of the lowest row, must place on top of that column
            //after selecting
            //unhighlight all
            //highlight only availible top cell
            //clicking anywhere else cancels and rehighlights possibilities
//    OR Select top row and place thier color if column is not full
            // check if column is full
            // check if player still has pieces left
//  unhighlight all
// . seleted and . availible classes for css manip
//  readjust cell colors
// Check for win conditions
// next turn

const player1 = {
    name: 'player1',
    color: 'red',
    piecesRemaining: 15
}

const player2 = {
    name: 'player2',
    color: 'blue',
    piecesRemaining: 15
}

const placeColor = 'hotpink';
const shiftColorStep1 = '#0FFF50'; //Neon green
const shiftColorStep2 = 'coral';


let currentPlayer = player1;
let otherPlayer = player2;


const gameBoard = document.getElementById('gameBoard');
const winnerList = [];



//Set colors for testing
// for (let k = 0; k < 5; k++){
//     const currentCellId = 'grid-item'+(7 + (k*5));
//     const currentCell = document.getElementById(currentCellId);
//     currentCell.style.backgroundColor = 'red'
// }

// for (let k = 0; k < 5; k++){
//     const currentCellId = 'grid-item'+(31 + (k*1));
//     const currentCell = document.getElementById(currentCellId);
//     currentCell.style.backgroundColor = 'blue'
// }


// Adjust size of grid elements

gameBoard.style.height = `${.9 * innerHeight}px`;
gameBoard.style.width = `${.5 * gameBoard.style.height.match(/\d+/)}px`;
document.getElementById('player1').style.width = `${.5 * gameBoard.style.height.match(/\d+/)+10}px`;
document.getElementById('player2').style.width = `${.5 * gameBoard.style.height.match(/\d+/)+10}px`;



//show current player info
let currentPlayerInfo = document.getElementById(currentPlayer.name);
currentPlayerInfo.lastElementChild.innerHTML = currentPlayer.piecesRemaining;
console.log('remaining pieces',currentPlayerInfo.lastElementChild.innerHTML)
currentPlayerInfo.style.display = 'grid';
setOptions();

// Set player 'colors'
document.getElementById('player1').lastElementChild.style.backgroundColor = player1.color;
document.getElementById('player2').lastElementChild.style.backgroundColor = player2.color;

// Initial Setup

for (const cell of gameBoard.children){
    // cell.innerHTML = cell.id;
    
    const cellNumber = Number(cell.id.match(/\d+/));


    // const cellPadding = `${window.innerWidth*.07}px 0`
    // if (cellPadding > window.innerHeight+100){
    //     cellPadding = window.innerHeight/1000
    // }
    // cell.style.padding = cellPadding;

    cell.style.backgroundColor = '';
    

    // if (cellNumber <= 5){
    //     cell.innerHTML = 'place'

        
        

    //     // Place piece
    //     setPlacementAvailability(cellNumber);
    //     clearAvailability(cellNumber);
    //     if (cellNumber == 2){
    //         cell.style.borderColor = 'pink'
    //     }
    // }

    // Score Board
    // if (6 <= cellNumber && cellNumber <= 35){
    //     // cell.innerHTML = 'score'

    

    //     // Check for 5 in a row
    //     // If so, return winning color
    //     let check = checkFiveInARow(cellNumber)
    //     if(check){
    //         winnerList.push(check);
    //     }
        
    // }


    if (36 <= cellNumber && cellNumber <= 40){
        // cell.innerHTML = 'nope'
        if (cellNumber % 2){
            cell.style.backgroundColor = player1.color;
        }else{
            cell.style.backgroundColor = player2.color;
        }
    }
    if (cellNumber >= 41){
        // cell.innerHTML = 'choose'
        if (cellNumber % 2){
            cell.style.backgroundColor = player1.color;
        }else{
            cell.style.backgroundColor = player2.color;
        }
        //document.getElementById('grid-item'+(cellNumber)).style.borderColor = 'greenyellow';
    }
 
}
// console.log(winnerList);
// checkWinner(0,winnerList);





function changePlayer(){
    console.log('Changing player');
    let currentPlayerInfo = document.getElementById(currentPlayer.name);

    //Hide current player
    currentPlayerInfo.style.display = 'none';

    // Switch players
    if (currentPlayer == player1){
        currentPlayer = player2;
        otherPlayer = player1;
        console.log('Changed to player 2');
    }else{
        currentPlayer = player1;
        otherPlayer = player2;
        console.log('Changed to player 1');
    }
    currentPlayerInfo = document.getElementById(currentPlayer.name);
    // console.log(currentPlayerInfo)
    // console.log(currentPlayerInfo.lastChild)

    // Show updated remaining pieces
    currentPlayerInfo.lastElementChild.innerHTML = currentPlayer.piecesRemaining;
    console.log('remaining pieces',currentPlayerInfo.lastElementChild.innerHTML);

    // Show current player
    currentPlayerInfo.style.display = 'grid';
    setOptions();
}


function setOptions(){
    for (let i = 41; i <= 45; i++){
        if (document.getElementById('grid-item'+(i-10)) .style.backgroundColor != ''){
            document.getElementById('grid-item'+i).style.borderColor = shiftColorStep1;
        }
    }
    setPlacementAvailability();
}

// function checkPlayerRemainingPieces(){
//     return (currentPlayer.piecesRemaining != 0);
// }





//Check for winner
//If multiple 5 in a rows created, player that just played wins
function checkWinner(currentPlayer, otherPlayer, winnerList){
    checkBoard();
    let currentWin = false;
    let otherWin = false;
    winnerList.forEach(win => {

        // Is the current player on the win list?
        console.log('win',win)
        console.log('currentplayer',currentPlayer.color)
        if (win == currentPlayer.color){
            currentWin = true;
        }else if (win == otherPlayer.color){
            otherWin = true;
        }
        console.log('winner check', win);
    });
    console.log('currentWin',currentWin);
    console.log('otherWin',otherWin);
    if (currentWin){
        setTimeout(() => {
            console.log('*************************************')
            alert(`${currentPlayer.name} Wins!`);
        }, 0);
        return currentPlayer;
    }else if (otherWin){
        setTimeout(() => {
            console.log('*************************************')
            alert(`${otherPlayer.name} Wins!`);
        }, 0);
        return otherPlayer;
    }
    return false;
}

function shiftColumnCells(column){
    //Grab color of bottom cell
    const topColor = document.getElementById('grid-item'+(column+40)).style.backgroundColor;
    //Shift all colors down 1
    for (let i = 8; i > 0; i--){
        // console.log(document.getElementById('grid-item'+(column+(i*5))).style.backgroundColor)
        // console.log('grid-item'+(column+(i*5)))
        document.getElementById('grid-item'+(column+(i*5))).style.backgroundColor = document.getElementById('grid-item'+(column+((i-1)*5))).style.backgroundColor;
    }
    //place bottom cell on top
    let emptyCell = checkPlacementAvailability(column);
    document.getElementById('grid-item'+(emptyCell)).style.backgroundColor = topColor;
}

function setShiftAvailability(cellNumber){
    cellNumber -= 40;
    document.getElementById('grid-item'+(cellNumber)).style.borderColor = shiftColorStep2;
}

function setPlacementAvailability(){
    if (currentPlayer.piecesRemaining == 0){return;}
    for (let i = 1; i <= 5; i++){
        if (checkPlacementAvailability(i)){
            document.getElementById('grid-item'+i).style.borderColor = placeColor;
        }
    }
    // console.log('done')
}

function checkPlacementAvailability(cellNumber){
    if (!checkColumn(cellNumber+5)){
        // Check cells
        for (let i = 0; i < 6; i++){
            const currentCellId = 'grid-item'+(cellNumber+30-(5*i));
            const currentCell = document.getElementById(currentCellId);
            if (currentCell.style.backgroundColor == ''){
                // currentCell.innerHTML='avail';
                //place piece
                //currentCell.style.backgroundColor = currentPlayer;
                // document.getElementById('grid-item'+cellNumber).classList.add('available')
                //document.getElementById('grid-item'+cellNumber).style.borderColor = 'hotpink'
                return cellNumber+30-(5*i);
            }
        }
    }else{
        // document.getElementById('grid-item'+cellNumber).innerHTML = 'No'
        return false;
    }
}

function clearAvailability (){
    for (let i = 1; i <= 5; i++){
        document.getElementById('grid-item'+i).style.borderColor = 'black'
    }   
}

function clearSelection(cellNumber){
    for (let i = 41; i <= 45; i++){
        console.log(i,cellNumber)
        if (i != cellNumber){
            document.getElementById('grid-item'+(i)).style.borderColor = 'black';
        }
    }
}








function checkBoard(){
    for (const cell of gameBoard.children){
        const cellNumber = Number(cell.id.match(/\d+/));
        if (6 <= cellNumber && cellNumber <= 35){
            // cell.innerHTML = 'score'
    
            // Check for 5 in a row
            // If so, return winning color
            let check = checkFiveInARow(cellNumber)
            if(check){
                winnerList.push(check);
            }
            
        }
    }
}

function checkFiveInARow(cellNumber){
    let check;
    //Diagoinal logic
    // 6 10 11 15
    switch (cellNumber){
        case 6:
        case 11:
            check = checkDiagonalTopLeft(cellNumber);
            if (check){return check;}
            break;
        case 10:
        case 15:
            check = checkDiagonalTopRight(cellNumber);
            if (check){return check;}
            break;      
    }

    //Collum logic
    // 6 7 8 9 10
    if (6 <= cellNumber && cellNumber <= 15){
        check = checkColumn(cellNumber);
        if (check){return check;}
    }

    //Row logic
    // 6 11 16 21 26 31
    if ((cellNumber-1) % 5 === 0){
        check = checkRow(cellNumber);
        if (check){return check;}
    }
}

function checkDiagonalTopLeft(cellNumber){
    // console.log('Function checkDiagonalTopLeft');
    return checkCells(cellNumber, 6);
}

function checkDiagonalTopRight(cellNumber){
    // console.log('Function checkDiagonalTopRight');
    return checkCells(cellNumber, 4);
}

function checkColumn(cellNumber){
    // console.log('Function checkColumn');
    return checkCells(cellNumber, 5);
}

function checkRow(cellNumber){
    // console.log('Function checkRow');
    return checkCells(cellNumber, 1);
}

function checkCells(cellNumber, cellIncrement){
    const currentCellId = 'grid-item'+(cellNumber);
    const currentCell = document.getElementById(currentCellId);
    //Check 5 in a row down
    for (let i = 1; i < 5; i++){
        const nextCellId = 'grid-item'+(cellNumber+(i*cellIncrement));
        const nextCell = document.getElementById(nextCellId);

        // Compare colors and exit early if not the same color
        // console.log('comparing',checkSameColor(currentCell,nextCell))
        if (!checkSameColor(currentCell,nextCell))return false;  
    }
    // console.log(currentCell.style.backgroundColor, 'Wins');
    return currentCell.style.backgroundColor;
}

function checkSameColor(cell1, cell2){
    // console.log('comparing',cell1.style.backgroundColor,'and',cell2.style.backgroundColor)
    if (cell1.style.backgroundColor == '') {
        return false;
    }
    if (cell1.style.backgroundColor === cell2.style.backgroundColor){
        return true;
    }else{
        return false;
    }
}






gameBoard.addEventListener("click", (event) => {
    const cellNumber = Number(event.target.id.match(/\d+/));
    // console.log(event.target)

    //Show current player
    //Show possible pieces that can be selected
    


    // If existing piece
    // Shift piece step
    if (event.target.style.borderColor === shiftColorStep1){
        clearAvailability();
        setShiftAvailability(cellNumber);
        clearSelection(cellNumber);
        
    }
    // Click available spot
    if (event.target.style.borderColor === shiftColorStep2){
        // console.log('shift');
        // event.target.innerHTML = 'shift';

        //move column down
        //place bottommost color on top
        
        shiftColumnCells(cellNumber);
        clearAvailability();
        console.log(winnerList);
        checkWinner(currentPlayer, otherPlayer, winnerList);
        changePlayer();
    }else


    // If new piece
    // Place piece step
    if (event.target.style.borderColor === placeColor){
        // console.log('place');
        // event.target.innerHTML = 'placed';
        // Place Piece
        let bottommostAvailable = checkPlacementAvailability(cellNumber)
        console.log(bottommostAvailable)
        if (bottommostAvailable) {
            document.getElementById('grid-item'+bottommostAvailable).style.backgroundColor = currentPlayer.color;
        }
        currentPlayer.piecesRemaining -= 1;
        // console.log('pieces left:',currentPlayer.piecesRemaining)
        clearAvailability();
        console.log(winnerList);
        checkWinner(currentPlayer, otherPlayer, winnerList);
        changePlayer();
    }

});





// for (const cell of gameBoard.children){
//     cell.innerHTML = cell.className;
//     const cellNumber = Number(cell.className.match(/\d+/));
//     if (cellNumber <= 5){
//         cell.innerHTML = 'place'
//     }
//     if (5 < cellNumber && cellNumber <= 35){
//         cell.innerHTML = 'score'

//         //Diagoinal logic
//         switch (cellNumber){
//             case 6:
//             case 10:
//             case 11:
//             case 15:
//                 cell.innerHTML = "dia"
                
//         }
        
//     }
//     if (35 < cellNumber && cellNumber <= 40){
//         cell.innerHTML = 'nope'
//     }
//     if (cellNumber > 40){
//         cell.innerHTML = 'choose'
//     }
 
// }
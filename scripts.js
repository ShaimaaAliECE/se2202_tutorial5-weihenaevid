let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns

//initialize the game
// var intialize = document.createElement('button');
// intialize.innerText = 'Start a New Game';
// document.getElementById('game-over-lbl').appendChild(intialize);
// intialize.addEventListener('click', (initalEvent) => (initialEvent.target.hidden=true));

// use the value stored in the nextPlayer variable to indicate who the next player is
let player = document.createTextNode(nextPlayer);
document.getElementById('next-lbl').appendChild(player);

let playerTurn = document.querySelector('b');
playerTurn.innerText = 'Next Player:';
createGameBoard();

//This call will create the buttons needed for the gameboard.
function createGameBoard()
{

    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
   for(let i = 0; i<9;i++){
        let cell = 'c' + (i+1);
        var buttonNew = document.createElement('button');
        buttonNew.className = "buttonClass";
        buttonNew.setAttribute('id', 'b' + i);
        document.getElementById(cell).appendChild(buttonNew);
   }
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let button = document.querySelectorAll('button');
for (let i=0; i<button.length; i++)
{
    button[i].addEventListener('click', (event) => { takeCell(event)});
}
var buttonsNum = 0;
// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{

    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

        let buttonClicked = event.target.id;
        document.getElementById(buttonClicked).innerHTML = nextPlayer;
        document.getElementById(buttonClicked).disabled = true;
        if (nextPlayer == 'X'){
            nextPlayer = 'O';
        } else if (nextPlayer == 'O'){
            nextPlayer = 'X';
        }

        player.remove();
        player = document.createTextNode(nextPlayer);
        document.getElementById('next-lbl').appendChild(player);

        buttonsNum++;

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )


    // Check if the game is over
    if (isGameOver())
    {
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
        let label = document.getElementById('game-over-lbl');
        var header = document.createElement('h1');
        header.innerText = 'Game Over';
        label.appendChild(header);
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
}

function isGameOver()
{
    // This function returns true if all the buttons are disabled and false otherwise 
    if (buttonsNum == 9){
            return true;
    }  else {
        return false;
    }

}
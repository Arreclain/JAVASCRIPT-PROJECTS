//This variable keeps track of whose turn it is.
let activePlayer = 'X';
//This array stores an array of moves.  We use this to determine win conditions.
let selectedSquares = [];

//This function is for placing an X or an O in a square.
function placeXOrO(squareNumber) {
    //This condition ensures a square hasn't been selected already.
    //The .some() method is used to check each element of the selectedSquare array
    //to see if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        //This variable retrieves the html element id that was clicked.
        let select = document.getElementById(squareNumber);
        //This condition checks who's turn it is.

        if (activePlayer === 'X') {
            //If activePlayer is equal to 'X', the x.png is placed in html.
            select.style.backgroundImage = 'url("images/x.png")';
            //Active player may only be X or O, so, if not X, then O.
        } else {
            //If activePlayer is equal to O, the o.png is placed in html.
            select.style.backgroundImage = 'url("images/o.png")';
        }
        //squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer);
        //This calls a function to check for any win conditions.
        checkWinConditions();
        //This condition is for changing the active player.
        if (activePlayer === 'X'){ activePlayer = 'o';}
        //The above changes the player from X to o.
        //If the active player is anything other than x, then the below triggers.
        else {
            //Change active player to X.
            activePlayer = 'X';
        }
        //This function plays placement sound.
        audio('./media/place.mp3');
        //This condition checks to see if it is the computer's turn.
        if (activePlayer ==='o') {
            //This function disables clicking for computer's turn.
            disableClick();
            //This function waits 1 second before the computer places an image an enables click.
            setTimeout(function () { computersTurn();}, 1000);
        }
        //Returning true is needed for our computerTurn() function to work.
        return true;
    }
    //This function  results in a random square being selected by the computer.
    function computersTurn(){
        //This boolean is needed for our while loop.
        let success = false;
        //This variable stores a random number between 0-8.
        let pickASquare;
        //This condition allows our while loop to keep trying if a square hasn't been selected yet.
        while(!success){
            
        }
    }
}

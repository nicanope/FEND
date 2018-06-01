// this array holds all the individual icons for the cards
const icons = [ 'fa-diamond', 
                'fa-paper-plane-o', 
                'fa-anchor', 
                'fa-bolt', 
                'fa-cube', 
                'fa-bomb', 
                'fa-leaf', 
                'fa-bicycle'
            ];

/* To avoid having to write the icons twice, 
I concatenated the array to itself */
const allIcons = icons.concat(icons);

// array that will hold the cards you've opened
let openCards = [];
// variable that stores the whole deck for the event listener
const deck = document.querySelector('.deck');
// variable that holds the move count
let moves = 0;
// store the repeat button to restart the game
const restartBtn = document.querySelector('.fa-repeat');
// store the moves element in a variable
const movesCounter = document.querySelector('.moves');
// once the cards exist, this variable holds them
const card = document.querySelectorAll('.card');
// array that will hold all matched cards
let matchedCards = [];

let matchingCards = document.getElementsByClassName('match');

// function called when the restart button is pressed
// function restartGame(){
//     moves = 0;
//     // timer reset;
//     // stars reset;
//     // shuffle(allIcons);
// createCards();
// }

// restartBtn.addEventListener('click', restartGame);

// using the shuffle algorithm that was provided in the starter code
shuffle(allIcons);

// once the icons are shuffled, this loop generates the cards within the deck
// ? Should I store this in a function to call it when I reset the game?
function createCards(){    
    for (let icon of allIcons) {
        let card = document.createElement('li');
        card.innerHTML = `<li class="card hide"><i class="fa ${icon}"></i></li>`;
        deck.appendChild(card);
    }
}

createCards();
/* this function checks whether the cards opened match,
then, if they do, turns them green and keeps them open,
then clears the openCards array.
If they don't match, it starts a timeout, and then flips
the cards back and clears the openCards array.
*/
function match(){
    const card1 = openCards[0].querySelector('i').className;
    const card2 = openCards[1].querySelector('i').className;
    console.log(`1: ${card1} 2: ${card2}`);
    if (card1 === card2) {
        openCards[0].className = 'card match show';
        openCards[1].className = 'card match show';
        matchedCards.push(card1);
        matchedCards.push(card2);
        openCards = [];
    } else {
        setTimeout(function() {
            openCards[0].className = 'card hide';
            openCards[1].className = 'card hide';
            openCards = [];
            console.log('in timeout');
        }, 500)
    } if (matchingCards.length == 16){
        setTimeout(function() {
            winner();
        }, 500)
    }
}

/* this function listens to the click within the deck
with the card as the target, and turns the card once clicked.
then it adds one to the move counter. 
it specifies to only turn the card if it's hidden and there are
less than two cards in the openCards array.
if two cards are open, check if they match with the `match()`
function */
function turnCard(e){
    let clickedCard = e.target;
    if (clickedCard.classList.contains('card')) {
    moves++;
    movesCounter.innerText = `${moves} moves`;
    }
    console.log(moves);
    console.log(openCards);
    if (clickedCard.classList.contains('hide') && openCards.length<2) {
        clickedCard.className = 'card open show';
        openCards.push(clickedCard);
    } if (openCards.length == 2){
           match();
    }
}

// event listener for the cards that triggers the function above
deck.addEventListener('click', turnCard);


/* Shuffle function from http://stackoverflow.com/a/2450976 
provided with the starter code*/
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

function winner(){
    alert('You have won!');
}
/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

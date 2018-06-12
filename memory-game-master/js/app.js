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
// stores the moves counter
const movesCounter = document.querySelector('.moves');
// store the repeat button to restart the game
const restartBtn = document.querySelector('.fa-repeat');
// store the modal window
let modalDialog = document.querySelector('.modalDialog');

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
    let matchedCards = [];
    let matchingCards = document.getElementsByClassName('match');
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
        stopwatch.stop();
        setTimeout(function() {
            winner();
        }, 500)
    }
    starRating();
}

/* this function listens to the click within the deck
with the card as the target, and turns the card once clicked.
then it adds one to the move counter. 
it specifies to only turn the card if it's hidden and there are
less than two cards in the openCards array.
if two cards are open, check if they match with the `match()`
function */
function turnCard(e){
    // store the moves element in a variable
    let clickedCard = e.target;
    if (clickedCard.classList.contains('card')) {
        if (clickedCard.className === "card open show") {
            moves -= 1;
        }
        if (moves === 0) {
            stopwatch.start();
        }
        moves++;
        movesCounter.innerText = `${moves} moves`;
    }
    if (clickedCard.classList.contains('hide') && openCards.length<2) {
        clickedCard.className = 'card open show';
        openCards.push(clickedCard);
    }
    if (openCards.length == 2 && openCards != "undefined"){
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

/* this function runs during the game and determines how
many stars you get in the star rating, depending on how many
moves you've made */
function starRating(){
    const stars = document.querySelectorAll('.fa-star');
    const starsArray = Array.apply(null, stars);
    if (moves === 0) {
        starsArray.forEach(x => x.className = "fa fa-star");
    }
    if (moves > 29 && moves <= 36) {
        starsArray[2].className = 'fa fa-star hide';
    }
    if (moves > 36) {
        starsArray[2].className = 'fa fa-star hide';
        starsArray[1].className = 'fa fa-star hide';
    }
}

/* when you finish the game (all cards match) this function
is called to trigger the modal with the game stats */
function winner() {
    let finalMoves = document.querySelector('.total-moves');
    let finalStars = document.querySelector('.star-rating');
    let finalTime = document.querySelector('.total-time');
    let starScore = document.querySelector('.stars')
    modalDialog.className = "modalDialog";
    finalMoves.innerHTML = `<p>You made ${moves} moves</p>`;
    finalStars.innerHTML = `${starScore.innerHTML}`;
    finalTime.innerHTML = `<p>It took you ${timer.innerText}</p>`
}

/* function called then the modal is clicked
to reset and restart the game */
function close() {
    modalDialog.className = "modalDialog hide";
    resetGame();
}

modalDialog.addEventListener('click', close);

// function called when the restart button is pressed
function resetGame(){
    let timer = document.getElementById('timer');
    deck.innerHTML = '';
    shuffle(allIcons);
    createCards();
    moves = 0;
    movesCounter.innerText = `${moves} moves`;
    stopwatch.stop();
    timer.innerText = '00:00';
    starRating();
}

restartBtn.addEventListener('click', resetGame);

/* Code for the timer functionality from 
https://codepen.io/mythicalpizza/pen/WvdeJG 
with modifications so it starts when the first card is clicked
and stops when all cards are matched */

var min,sec,ms,count, malt, salt, msalt;

var stopwatch = {
    start: function(){
        sec = 0;
        min = 0;
        count = setInterval(function() {
            if(sec == 60){
                sec = 0;
                min++;
            }
            else{
                sec++;
            }
        
            malt = stopwatch.pad(min);
            salt = stopwatch.pad(sec);
            
            stopwatch.update(`${malt} : ${salt}`);
        }, 1000);
    },
    stop: function(){
        clearInterval(count);
    },
  
    update: function (txt) {
        var temp = document.getElementById("timer");
    temp.firstChild.nodeValue = txt;
    },
    
    pad: function(time){
        var temp;
        if(time < 10){
        temp = "0" + time;
        }
        else{
        temp = time;
        }
        return temp;
    }
}

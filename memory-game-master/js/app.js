/*
 * Create a list that holds all of your cards
 */
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

let openCards = [];
const deck = document.querySelector('.deck');

shuffle(allIcons);

for (let icon of allIcons) {
    let card = document.createElement('li');
    card.innerHTML = `<li class="card hide"><i class="fa ${icon}"></i></li>`;
    deck.appendChild(card);
}

const card = document.querySelectorAll('.card');

function match(){
    const card1 = openCards[0].querySelector('i').className;
    const card2 = openCards[1].querySelector('i').className;
    if (card1 === card2) {
        openCards[0].className = 'card match show';
        openCards[1].className = 'card match show';
        openCards = [];
    } else {
        setTimeout(function() {
            openCards[0].className = 'card hide';
            openCards[1].className = 'card hide';
        }, 500)
        openCards = [];
    }
    
}

function turnCard(e){
    let clickedCard = e.target;
    console.log(openCards);
    if (e.target.classList.contains('hide') && openCards.length<2) {
        e.target.className = 'card open show';
        openCards.push(clickedCard);
    } else {
        match();
    }
}

deck.addEventListener('click', turnCard);



/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
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

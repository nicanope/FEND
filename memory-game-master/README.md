# Memory Game Project

## Table of Contents

* [Game Instructions] (#game)
* [Functionality] (#functionality)
* [Udacity Project Instructions](#instructions)
* [Contributing](#contributing)

## Game

Flip cards to attempt to match them. You win the game once all card pairs are matched. Your score is in star rating; the less moves you need to win the game, the more stars you get. Try to finish the game in less than 30 moves for a 3-star rating (maximum).

## Functionality

Upon clicking a card, the moves counter will start counting and the timer will start running. The card will flip and stay. When you click a second card, the game will check if they match. If they do, they will turn a different color and stay open; if they don't, they will turn back over.

Every click on a card counts as a move.

Once all 16 cards are matched, the game will stop the timer and open a modal with your game stats: 
- the number of moves you needed
- the time it took you to finish
- your star rating

Upon clicking anywhere on the screen, the modal will disappear and the game, timer, moves and stars will be reset.

## Udacity Project Instructions

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

# Memory Game Project

## Table of Contents

* [Game Instructions](#game)
* [Functionality](#functionality)
* [Bugs](#bugs)
* [Dependencies](#dependencies)
* [Udacity Project Instructions](#instructions)
* [Contributing](#contributing)

## Game

Flip cards to attempt to match them. You win the game once all card pairs are matched. Your score is in star rating; the less moves you need to win the game,the more stars you get. Try to finish the game in less than 14 moves for a 3-star rating (maximum).

## Functionality

Upon clicking a card, the moves counter will start counting and the timer will start running. The card will flip and stay. When you click a second card, the game will check if they match. If they do, they will turn a different color and stay open; if they don't, they will turn back over.

Every click on a card counts as a move.

Once all 16 cards are matched, the game will stop the timer and open a modal with your game stats: 
- the number of moves you needed
- the time it took you to finish
- your star rating

Upon clicking anywhere on the screen, the modal will disappear and the game, timer, moves and stars will be reset.

## Bugs

Please report any bugs here or by emailing nicanope@gmail.com.
Thanks!

## Dependencies

- [Font Awesome](https://fontawesome.com/)
(in head: https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css)
- [Google Fonts](https://fonts.google.com/)
(in head: https://fonts.googleapis.com/css?family=Coda)
 
 **Both of these were already in Udacity's starter code for this project**  

- Code for the [timer](https://codepen.io/mythicalpizza/pen/WvdeJG) functionality. Adapted to start with the first card turned and stop either when the game ends or when the restart button is pressed. 

- Shuffle function from http://stackoverflow.com/a/2450976 provided with the starter code

 _______________________________________________________
 
 Everything below this line was in the file originally supplied by Udacity

## Udacity Project Instructions 

The starter project has some HTML and CSS styling to display a static version of the Memory Game project. You'll need to convert this project from a static project to an interactive one. This will require modifying the HTML and CSS files, but primarily the JavaScript file.

To get started, open `js/app.js` and start building out the app's functionality

For specific, detailed instructions, look at the project instructions in the [Udacity Classroom](https://classroom.udacity.com/me).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

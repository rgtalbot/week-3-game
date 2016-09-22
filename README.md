# 80's Movies Hangman Game

### Overview
A 80s movies based hangman game that uses Javascript for the logic and jQuery to manipulate the HTML.

 [80s Hangman Link](https://eightieshangman.herokuapp.com)

--------

### Why I chose my  theme? 
I wanted something fun and a theme that many people would know the answers to. I also knew I wanted to have some cool theme music to play.

--------

### How I built it:
* I started with some very basic pseudo code of what I wanted it to do. I knew I wanted the javascript file to select a chosen movie from an array of movies and then display the choice as blanks on the webpage. 
* From there, it was a matter of logging keystrokes, comparing the keystroke to the answer and then running one function if the letter was part of the answer and another if it was not. 
* I also then had to build a function to check to see if the word was completely guessed or not an another function to reset the game on a win. In addition, I added a win and loss counter so that the screen would display the number of wins and losses.
* Finally I wanted to display a picture and play a song from the chosen movie when the user had won the game.
* With the pseudo coing all done, I proceeded to build my game out with very vanilla JS and some css.
* I have since gone back to the game to change and update things with the more that I learn. I have refactored most of the vanilla JS in to jQuery and removed a lot of the redundancies in the code to DRY it up.
* I also added buttons to make the game playable in mobile without a keyboard.

### Future changes I would still like to make:
* I would like to clean up the css to make the game look better and be more responsive in general.
* I would like to add a function that removes already played words from the choice when it builds a new game so that you play through all the choices before seeing the same one twice.

-------

## Copyright
Ryan Talbot (C) 2016. All Rights Reserved.
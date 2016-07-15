var wins = 0;
var losses = 0;
var misses = 6;
// List of Computer Answers
var movieList = {
    movies: ['Ghostbusters', 'The Goonies', 'Back to the Future', 'Top Gun', 'Gremlins', 'The Breakfast Club', 'Blade Runner', 'Die Hard', 'Rambo', 'Rocky IV', 'Indiana Jones', 'The Karate Kid', 'Police Academy', 'Revenge of the Nerds', 'The Terminator', 'Weekend at Bernies'],

    winCheck: function() {
        var a = blanks.indexOf("_");
        if (a < 0) {
            wins++;
            document.getElementById("wins").innerHTML = "Wins: " + wins;
            alert("Congrats, " + computerAnswer + " was correct!")
            movieList.resetGame();
        }
    },

    wordUpdate: function() {
        displayAnswer = "";
        for (var i = 0; i < computerAnswer.length; i++) {
            displayAnswer += blanks[i] + " ";
        }
        console.log(displayAnswer);
        document.getElementById("word").innerHTML = displayAnswer.replace(/\^/gi, '&nbsp');
    },



    resetGame: function() {
        misses = 6;
        document.getElementById('guesses').innerHTML = "Number of Guesses Left: " + misses;
        computerAnswer = movieList.movies[Math.floor(Math.random() * movieList.movies.length)].toUpperCase();
        console.log(computerAnswer);
        guessed = [];
        document.getElementById('letters').innerHTML = "Letters guessed: " + guessed;
        blanks = [];
        for (var i = 0; i < computerAnswer.length; i++) {
            if (computerAnswer[i] == " ") {
                blanks.push("^");
            } else {
                blanks.push("_");
            }
        }
        movieList.wordUpdate();
    },
};
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML = "Losses: " + losses;
document.getElementById('guesses').innerHTML = "Number of Guesses Left: " + misses;
// Randomly selecting which answer the computer will use
var computerAnswer = movieList.movies[Math.floor(Math.random() * movieList.movies.length)].toUpperCase();
console.log(computerAnswer);


var blanks = [];
var guessed = [];

for (var i = 0; i < computerAnswer.length; i++) {
    if (computerAnswer[i] == " ") {
        blanks.push("^");
    } else {
        blanks.push("_");
    }
}
movieList.wordUpdate();
// user keystroke executing function
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode);
    document.getElementById('start').style.display = 'none'
    if (guessed.includes(userGuess)) {
        //do nothing
    } else {
        guessed.push(userGuess)
        document.getElementById('letters').innerHTML = "Letters guessed: " + guessed.join(", ");
        if (computerAnswer.includes(userGuess)) {
            var guessToChar = userGuess.charAt(0);
            var missTracker = 0;
            //check to see if the key was a hit
            for (var k = 0; k < computerAnswer.length; k++) {
                if (computerAnswer[k] == guessToChar) {
                    missTracker = 100;
                    blanks[k] = guessToChar;
                    movieList.wordUpdate();
                }
            }
        } else {
            misses--;
            misstracker = 0;
            if (misses == 0) {
                losses++;
                document.getElementById('losses').innerHTML = "Losses: " + losses;
                alert("Sorry, the correct answer was " + computerAnswer);
                movieList.resetGame();
            }
            document.getElementById('guesses').innerHTML = "Number of Guesses Left: " + misses;
        }
    }
    movieList.winCheck();
}

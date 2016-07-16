var wins = 0;
var losses = 0;
var misses = 6;

var movieList = {
    // List of Computer Answers
    movies: ['Ghostbusters', 'The Goonies', 'Back to the Future', 'Top Gun', 'Gremlins', 'The Breakfast Club', 'Blade Runner', 'Die Hard', 'Rambo', 'Rocky IV', 'Indiana Jones', 'The Karate Kid', 'Police Academy', 'Stripes', 'Revenge of the Nerds', 'The Terminator', 'Weekend at Bernies'],

    //check to see if there is a win
    winCheck: function() {
        var a = blanks.indexOf("_");
        if (a < 0) {
            wins++;
            musicPicture();
            document.getElementById("wins").innerHTML = "Wins: " + wins;
            // alert("Congrats, " + computerAnswer + " was correct!");
            movieList.resetGame();
        }
    },



    //update the displayed word after a correct hit, win, or loss
    wordUpdate: function() {
        displayAnswer = "";
        for (var i = 0; i < computerAnswer.length; i++) {
            displayAnswer += blanks[i] + " ";
        }
        console.log(displayAnswer);
        document.getElementById("word").innerHTML = displayAnswer.replace(/\^/gi, '&nbsp');
    },

    //reset the game if a win or loss is detected
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

//display inital counts
document.getElementById("wins").innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML = "Losses: " + losses;
document.getElementById('guesses').innerHTML = "Number of Guesses Left: " + misses;

// Randomly selecting which answer the computer will use
var computerAnswer = movieList.movies[Math.floor(Math.random() * movieList.movies.length)].toUpperCase();
console.log(computerAnswer);

var blanks = [];
var guessed = [];

//create blank array for displaying
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
    document.getElementById('picture').innerHTML = "";
    audioStop();
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

//Play music and display picture for win
var audio = new Audio ()
function musicPicture() {
    if (displayAnswer == "G H O S T B U S T E R S ") {
        audio.src = "assets/music/ghostbusters.mp3";
        audio.play();
        document.getElementById('picture').innerHTML = "<img class='img-responsive center-block' src='assets/images/ghostbusters.jpg' />";
    } else if (displayAnswer == "T H E ^ G O O N I E S ") {
        audio.src = "assets/music/goonies.mp3";
        audio.play();
        document.getElementById('picture').innerHTML = "<img class='img-responsive center-block' src='assets/images/goonies.jpg' />";
    } else if (displayAnswer == "B A C K ^ T O ^ T H E ^ F U T U R E ") {
        audio.src = "assets/music/bttf.mp3";
        audio.play();
        document.getElementById('picture').innerHTML = "<img class='img-responsive center-block' src='assets/images/bttf.jpg' />";
    } else if (displayAnswer == "T O P ^ G U N ") {
        audio.src = "assets/music/topgun.mp3";
        audio.play();
        document.getElementById('picture').innerHTML = "<img class='img-responsive center-block' src='assets/images/topgun.jpg' />";
    }  else if (displayAnswer == "G R E M L I N S ") {
        audio.src = "assets/music/gremlins.mp3";
        audio.play();
        document.getElementById('picture').innerHTML = "<img class='img-responsive center-block' src='assets/images/gremlins.jpg' />";
    } else if (displayAnswer == "T H E ^ B R E A K F A S T ^ C L U B ") {
        audio.src = "assets/music/breakfast.mp3";
        audio.play();
        document.getElementById('picture').innerHTML = "<img class='img-responsive center-block' src='assets/images/breakfast.jpg' />";
    } else if (displayAnswer == "B L A D E ^ R U N N E R ") {
        audio.src = "assets/music/blrunner.mp3";
        audio.play();
        document.getElementById('picture').innerHTML = "<img class='img-responsive center-block' src='assets/images/blrunner.jpg' />";
    } else if (displayAnswer == "D I E ^ H A R D ") {
        audio.src = "assets/music/dieHard.mp3";
        audio.play();
        document.getElementById('picture').innerHTML = "<img class='img-responsive center-block' src='assets/images/dieHard.jpg' />";
    } else if (displayAnswer == "R A M B O ") {
        audio.src = "assets/music/rambo.mp3";
        audio.play();
        document.getElementById('picture').innerHTML = "<img class='img-responsive center-block' src='assets/images/rambo.jpg' />";
    } else if (displayAnswer == "R O C K Y ^ I V ") {
        audio.src = "assets/music/rocky.mp3";
        audio.play();
        document.getElementById('picture').innerHTML = "<img class='img-responsive center-block' src='assets/images/rocky.jpg' />";
    } else if (displayAnswer == "I N D I A N A ^ J O N E S ") {
        audio.src = "assets/music/indy.mp3";
        audio.play();
        document.getElementById('picture').innerHTML = "<img class='img-responsive center-block' src='assets/images/indy.jpg' />";
    } else if (displayAnswer == "T H E ^ K A R A T E ^ K I D ") {
        audio.src = "assets/music/karate.mp3";
        audio.play();
        document.getElementById('picture').innerHTML = "<img class='img-responsive center-block' src='assets/images/karate.png' />";
    } else if (displayAnswer == "P O L I C E ^ A C A D E M Y ") {
        audio.src = "assets/music/police.mp3";
        audio.play();
        document.getElementById('picture').innerHTML = "<img class='img-responsive center-block' src='assets/images/police.jpg' />";
    } else if (displayAnswer == "S T R I P E S ") {
        audio.src = "assets/music/stripes.mp3";
        audio.play();
        document.getElementById('picture').innerHTML = "<img class='img-responsive center-block' src='assets/images/stripes.jpg' />";
    } else if (displayAnswer == "R E V E N G E ^ O F ^ T H E ^ N E R D S ") {
        audio.src = "assets/music/nerds.mp3";
        audio.play();
        document.getElementById('picture').innerHTML = "<img class='img-responsive center-block' src='assets/images/nerds.jpg' />";
    } else if (displayAnswer == "T H E ^ T E R M I N A T O R ") {
        audio.src = "assets/music/terminator.mp3";
        audio.play();
        document.getElementById('picture').innerHTML = "<img class='img-responsive center-block' src='assets/images/terminator.jpg' />";
    } else if (displayAnswer == "W E E K E N D ^ A T ^ B E R N I E S ") {
        audio.src = "assets/music/bernie.mp3";
        audio.play();
        document.getElementById('picture').innerHTML = "<img class='img-responsive center-block' src='assets/images/bernie.jpg' />";
    }
}

//stop music for when you start guessing again
function audioStop() {
    audio.pause();
}

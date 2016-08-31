var wins = 0,
    losses = 0,
    misses = 6,
    blanks = [],
    guessed = [];

var movieList = {
    // List of Computer Answers
    movies: ['Ghostbusters', 'Ferris Buellers Day Off', 'The Goonies', 'Back to the Future', 'Top Gun', 'Gremlins', 'The Breakfast Club', 'Blade Runner', 'Die Hard', 'Rambo', 'Rocky IV', 'Indiana Jones', 'The Karate Kid', 'Police Academy', 'Stripes', 'Revenge of the Nerds', 'The Terminator', 'Weekend at Bernies'],

    //check to see if there is a win
    winCheck: function () {
        var a = blanks.indexOf("_");
        if (a < 0) {
            wins++;
            musicPicture(computerAnswer);
            audio.play();
            $("#wins").html("Wins: " + wins);
            movieList.resetGame();
        }
    },

    //update the displayed word after a correct hit, win, or loss
    wordUpdate: function () {
        displayAnswer = "";
        for (var i = 0; i < computerAnswer.length; i++) {
            displayAnswer += blanks[i] + " ";
        }
        $("#word").html(displayAnswer.replace(/\^/gi, "&nbsp &nbsp"));
    },

    //reset the game if a win or loss is detected
    resetGame: function () {
        misses = 6;
        $("#guesses").html("Number of Guesses Left: " + misses);
        computerAnswer = movieList.movies[Math.floor(Math.random() * movieList.movies.length)].toUpperCase();
        console.log(computerAnswer);
        guessed = [];
        $("#letters").html("Letters guessed: " + guessed);
        blanks = [];
        for (var i = 0; i < computerAnswer.length; i++) {
            if (computerAnswer[i] == " ") {
                blanks.push("^");
            } else {
                blanks.push("_");
            }
        }
        movieList.wordUpdate();
    }
};

//display inital counts
$("#wins").html("Wins: " + wins);
$("#losses").html("Losses: " + losses);
$("#guesses").html("Number of Guesses Left: " + misses);

// Randomly selecting which answer the computer will use
var computerAnswer = movieList.movies
    [Math.floor(Math.random() * movieList.movies.length)].toUpperCase();

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
document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode);
    $("#start").hide();
    $("#picture").attr("src", "assets/images/eighty.png");
    audioStop();
    if (guessed.includes(userGuess)) {
        //do nothing
    } else {
        guessed.push(userGuess);
        guessed.join(", ");
        $("#letters").html("Letters guessed: " + guessed);
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
                $("#losses").html("Losses: " + losses);
                alert("Sorry, the correct answer was " + computerAnswer);
                movieList.resetGame();
            }
            $("#guesses").html("Number of Guesses Left: " + misses);
        }
    }
    movieList.winCheck();
};

//Play music and display picture for win
var audio = new Audio();
function musicPicture(expression) {

    switch(expression) {
        case "GHOSTBUSTERS":
            audio.src = "assets/music/ghostbusters.mp3";
            $("#picture").attr("src", "assets/images/ghostbusters.jpg");
            break;
        case "FERRIS BUELLERS DAY OFF":
            audio.src = "assets/music/ferris.mp3";
            $("#picture").attr("src", "assets/images/ferris.jpg");
            break;
        case "THE GOONIES":
            audio.src = "assets/music/goonies.mp3";
            $("#picture").attr("src", "assets/images/goonies.jpg");
            break;
        case "BACK TO THE FUTURE":
            audio.src = "assets/music/bttf.mp3";
            $("#picture").attr("src", "assets/images/bttf.jpg");
            break;
        case "TOP GUN":
            audio.src = "assets/music/topgun.mp3";
            $("#picture").attr("src", "assets/images/topgun.jpg");
            break;
        case "GREMLINS":
            audio.src = "assets/music/gremlin.mp3";
            $("#picture").attr("src", "assets/images/gremlins.jpg");
            break;
        case "THE BREAKFAST CLUB":
            audio.src = "assets/music/breakfast.mp3";
            $("#picture").attr("src", "assets/images/breakfast.jpg");
            break;
        case "BLADE RUNNER":
            audio.src = "assets/music/blrunner.mp3";
            $("#picture").attr("src", "assets/images/blrunner.jpg");
            break;
        case "DIE HARD":
            audio.src = "assets/music/dieHard.mp3";
            $("#picture").attr("src", "assets/images/dieHard.jpg");
            break;
        case "RAMBO":
            audio.src = "assets/music/rambo.mp3";
            $("#picture").attr("src", "assets/images/rambo.jpg");
            break;
        case "ROCKY IV":
            audio.src = "assets/music/rocky.mp3";
            $("#picture").attr("src", "assets/images/rocky.jpg");
            break;
        case "INDIANA JONES":
            audio.src = "assets/music/indy.mp3";
            $("#picture").attr("src", "assets/images/indy.jpg");
            break;
        case "THE KARATE KID":
            audio.src = "assets/music/karate.mp3";
            $("#picture").attr("src", "assets/images/karate.png");
            break;
        case "POLICE ACADEMY":
            audio.src = "assets/music/police.mp3";
            $("#picture").attr("src", "assets/images/police.jpg");
            break;
        case "STRIPES":
            audio.src = "assets/music/stripes.mp3";
            $("#picture").attr("src", "assets/images/stripes.jpg");
            break;
        case "REVENGE OF THE NERDS":
            audio.src = "assets/music/nerds.mp3";
            $("#picture").attr("src", "assets/images/nerds.jpg");
            break;
        case "THE TERMINATOR":
            audio.src = "assets/music/terminator.mp3";
            $("#picture").attr("src", "assets/images/terminator.jpg");
            break;
        case "WEEKEND AT BERNIES":
            audio.src = "assets/music/bernie.mp3";
            $("#picture").attr("src", "assets/images/bernie.jpg");
            break;
        default:
            alert("something went wrong");
    }
}

//stop music for when you start guessing again
function audioStop() {
    audio.pause();
}

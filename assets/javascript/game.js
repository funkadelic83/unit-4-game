var targetScore = (Math.floor(Math.random() * 102) + 19);
console.log(targetScore);
var rubyValue = (Math.floor(Math.random() * 12) + 1);
var tourmalineValue = (Math.floor(Math.random() * 12) + 1);
var quartzValue = (Math.floor(Math.random() * 12) + 1);
var emeraldValue = (Math.floor(Math.random() * 12) + 1);

function resetValues() {
    targetScore = (Math.floor(Math.random() * 102) + 19);
    targetScoreElement.textContent = targetScore.toString();
    currentScore = 0;
    currentScoreElement.textContent = currentScore.toString();
    rubyValue = (Math.floor(Math.random() * 12) + 1);
    tourmalineValue = (Math.floor(Math.random() * 12) + 1);
    quartzValue = (Math.floor(Math.random() * 12) + 1);
    emeraldValue = (Math.floor(Math.random() * 12) + 1);
}

function checkWinner() {
    if (currentScore === targetScore) {
        alert("You win!");
        wins++;
        winsElement.textContent = wins.toString();
        resetValues();
    
    } else if (currentScore > targetScore) {
        alert("You lose!");
        losses++;
        lossesElement.textContent = losses.toString();
        resetValues();
    };
}

var currentScore = 0;
var wins = 0;
var losses = 0;

var winsElement = document.getElementById("wins-number");
winsElement.textContent = wins.toString(); 
var lossesElement = document.getElementById("losses-number");
lossesElement.textContent = losses.toString(); 

var targetScoreElement = document.getElementById("target-score");
targetScoreElement.textContent = targetScore.toString();
var currentScoreElement = document.getElementById("current-score");
currentScoreElement.textContent = currentScore.toString();

//For practice, I used two different types of jQuery events: .click and .on.

$( "#ruby" ).click(function() {
    currentScore += rubyValue;
    currentScoreElement.textContent = currentScore.toString();
    checkWinner();
});


$("#tourmaline").on("click", function() {
    currentScore += tourmalineValue;
    checkWinner();
    currentScoreElement.textContent = currentScore.toString();
});

$("#quartz").on("click", function() {
    currentScore += quartzValue;
    checkWinner();
    currentScoreElement.textContent = currentScore.toString();
});

$("#emerald").on("click", function() {
    currentScore += emeraldValue;
    checkWinner();
    currentScoreElement.textContent = currentScore.toString();
});
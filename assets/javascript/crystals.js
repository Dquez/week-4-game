var targetNumber;
var numberOptions;
var counterTotal = 0;
$("#counter-total").text(counterTotal);
var wins = 0;
$("#wins").text(wins);
var losses = 0;
$("#losses").text(losses);
var numberOptionsArr = [];
numberOptionsArr = [numberOptions(), numberOptions(), numberOptions(), numberOptions()];

function numberOptions() {
    var randomNumber = Math.floor(Math.random() * 12) + 1;
    return randomNumber;
}

function randomOneThruThree() {
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
}

$(document).ready(function() {
    targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
    $("#current-random-num").text(targetNumber);



    function restart() {
        targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;

        numberOptions();
        numberOptionsArr = [numberOptions(), numberOptions(), numberOptions(), numberOptions()];
    }

    function randomOneThruFour() {
        var randomNumber = Math.floor(Math.random() * 4) + 1;
        return randomNumber;
    }


    var crystalOne = $("#crystal-1");
    var crystalTwo = $("#crystal-2");
    var crystalThree = $("#crystal-3");
    var crystalFour = $("#crystal-4");



    $(crystalOne).attr("data-crystalvalue", numberOptionsArr[randomOneThruThree()]);
    $(crystalTwo).attr("data-crystalvalue", numberOptionsArr[randomOneThruThree()]);
    $(crystalThree).attr("data-crystalvalue", numberOptionsArr[randomOneThruThree()]);
    $(crystalFour).attr("data-crystalvalue", numberOptionsArr[randomOneThruThree()]);


    // while (first === second || first === third || first === fourth) {
    //     numberOptionsArr[randomOneThruThree()];
    //     console.log(first);
    // } else if (second === first || second === third || second === fourth) {
    //     first = numberOptionsArr[randomOneThruThree()];
    // } else if (third === first || third === second || third === fourth) {
    //     first = numberOptionsArr[randomOneThruThree()];
    // } else if (fourth === first || fourth === second || fourth === third) {
    //     first = numberOptionsArr[randomOneThruThree()];
    // } else {


// Fix alert when lose 

// * Get the numbers to have their own individual counter **


    $(".crystal-image").on("click", function() {

        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);
        console.log(crystalValue);
        // Add the crystalValue to the user's "counter" which is a global variable.
        // Every click, from every crystal adds to the global counter.
        counterTotal += crystalValue;
        $("#counter-total").text(counterTotal);

        if (counterTotal === targetNumber) {
            alert("You win!");
            wins++;
            $("#wins").text(wins);
            restart();

        } else if (counterTotal >= targetNumber) {
            alert("You lose!!");
            losses++;
            $("#losses").text(losses);
            restart();
        }
    });

});





// $("#crystal-1").attr("data-crystalvalue", numberOptionsArr[i]);
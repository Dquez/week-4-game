var targetNumber;
var numberOptions;
var counterTotal = 0;

$("#counter-total").text(counterTotal);
$("#counter-total").empty();
var wins = 0;
$("#wins").text(wins);
var losses = 0;
$("#losses").text(losses);
var crystalOne = $("#crystal-1");
var crystalTwo = $("#crystal-2");
var crystalThree = $("#crystal-3");
var crystalFour = $("#crystal-4");
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var ranNums = [];
targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;

$(document).ready(function() {


    var topRanPixels = Math.floor(Math.random() * 200);


    setInterval(createStarRight, 2000);

    function createStarRight() {
        topRanPixels = Math.floor(Math.random() * 200);
        $(".shooting-star").css({ top: topRanPixels, left: 1500, position: 'absolute', visibility: 'initial' });
    }

    setInterval(createStarLeft, 4700);

    function createStarLeft() {
        topRanPixels = Math.floor(Math.random() * 200);
        $(".shooting-star").css({ top: topRanPixels, left: -100, position: 'absolute', visibility: 'initial' });
    }

    setInterval(shootingStarsRight, 2000);


    function shootingStarsRight() {

        $(".shooting-star").animate({ left: "-=1600px", top: topRanPixels }, "slow");
    }

    setInterval(shootingStarsLeft, 4700);

    function shootingStarsLeft() {
        $(".shooting-star").animate({ left: "+=1600px", top: topRanPixels }, "slow");

    }



    var star = $("<div>");
    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    star.addClass("shooting-star");
    // Each imageCrystal will be given a src link to the crystal image
    // star.attr("src", "https://qzprod.files.wordpress.com/2016/06/shooting-star.jpg?quality=80&strip=all&w=320");
    $("#background").append(star);

    $("#current-random-num").text(targetNumber);

    function restart() {
        counterTotal = 0;
        $("#counter-total").text(counterTotal);
        $("#counter-total").empty();
        $("#current-random-num").empty();
        targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;
        $("#current-random-num").text(targetNumber);
        ranNums = [];
        nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        randomCrystalValues();
    }

    function randomCrystalValues() {
        (i = nums.length), (j = 0);

        while (i--) {
            j = Math.floor(Math.random() * (i + 1));
            ranNums.push(nums[j]);
            nums.splice(j, 1);
        }

        console.log(ranNums);
    }
    randomCrystalValues();

    $(".crystal-image").on("click", function() {
        $(crystalOne).attr("data-crystalvalue", ranNums[0]);
        $(crystalTwo).attr("data-crystalvalue", ranNums[1]);
        $(crystalThree).attr("data-crystalvalue", ranNums[2]);
        $(crystalFour).attr("data-crystalvalue", ranNums[3]);

        var crystalValue = $(this).attr("data-crystalvalue");
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
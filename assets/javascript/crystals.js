

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
// numbers for crystal value to randomize after game reset
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// This array is used so that when we take a number out of the nums array, we won't pick a duplicate for one of the four crystal values
var ranNums = [];
targetNumber = Math.floor(Math.random() * (120 - 19)) + 19;

$(document).ready(function() {

  // pixels on a random y-axis of 0 - 299
  var topRanPixels = Math.floor(Math.random() * 300);
// Interval to create a star on the right side outside of the average screen size
  setInterval(createStarRight, 2000);

  function createStarRight() {
    topRanPixels = Math.floor(Math.random() * 300);
    $(".shooting-star-fast").css({
      top: topRanPixels,
      left: 2000,
      position: "absolute",
      visibility: "initial"
      // I set the visibility to initial because otherwise, you'd see the stars when the game begins in the flow of the page.
    });
  }
// now a star is created on the left side outside the screen size
  setInterval(createStarLeft, 4700);

  function createStarLeft() {
    topRanPixels = Math.floor(Math.random() * 300);
    $(".shooting-star-fast").css({
      top: topRanPixels,
      left: -100,
      position: "absolute",
      visibility: "initial"
    });
  }

  setInterval(shootingStarsRight, 2000);
// What I wanted to do was get the star to move in small increments but very quickly (10 milliseconds) 
// so it looks like it's moving fast but its actually doing hundreds of small steps per second
// But when I drop the interval timer less than 1000 the star appears off the page and continues 
// going to the left way off frame, not resetting on the interval as well

  function shootingStarsRight() {
    $(".shooting-star-fast").animate(
      { left: "-=2100px", top: topRanPixels },
      "slow"
    );
  }

  setInterval(shootingStarsLeft, 4700);

  function shootingStarsLeft() {
    $(".shooting-star-fast").animate(
      { left: "+=2100px", top: topRanPixels },
      "slow"
    );
  }

  setInterval(createStarRightSlow, 6000);

  function createStarRightSlow() {
    $(".shooting-star-slow").css({
      top: topRanPixels,
      left: 1800,
      position: "absolute",
      visibility: "initial"
    });
  }

  setInterval(shootingStarsRightSlow, 1000);

  function shootingStarsRightSlow() {
    $(".shooting-star-slow").animate(
      {left: "-=1900px", top: topRanPixels },
      "slow"
    );
  }
// Here's where I create the stars
  var starSlow = $("<div>");
  starSlow.addClass("shooting-star-slow");
  $("#background").append(starSlow);

  var starFast = $("<div>");
  starFast.addClass("shooting-star-fast");
  $("#background").append(starFast);

  $("#current-random-num").text(targetNumber);

// The instructions said to start the game with no number visibile for our crystal score so I set the counter to 0 and THEN I emptied it
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

// This function gets the length of the nums array and iterates through it, taking out a random "i" number and splicing it so we don't get duplicates
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

// I set the values to the indexes of 0 - 3 because either index in the array will be randomized from the inital array.
  $(".crystal-image").on("click", function() {
    $(crystalOne).attr("data-crystalvalue", ranNums[0]);
    $(crystalTwo).attr("data-crystalvalue", ranNums[1]);
    $(crystalThree).attr("data-crystalvalue", ranNums[2]);
    $(crystalFour).attr("data-crystalvalue", ranNums[3]);

// I receive the value from earlier on the crystal I click
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


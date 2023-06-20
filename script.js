"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉 Correct number";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 4;

// document.querySelector(".guess").value = 9;
// console.log(document.querySelector(".guess").value);

// This code is before the refactoring

// Implementing highscore ------------------------------------------------------
// Highscore variable
let highscore = 0;

// Score variable
let score = 20;

// Generating the random number -----------------------------------------------------------------------

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);

// Handling the event in the check button -------------------------------------------------------------

// document.querySelector(".check").addEventListener("click", function () {
//     const guess = Number(document.querySelector(".guess").value);

//     console.log(guess, typeof guess);

//     if (!guess) {
//         // when the is no input--------------------------------------------
//         document.querySelector(".message").textContent =
//             "⛔ No number entered!";
//     } else if (guess === secretNumber) {
//         // when the player wins---------------------------------------------
//         document.querySelector(".number").textContent = secretNumber;
//         document.querySelector(".message").textContent = "🎉 Correct number";

//         document.querySelector("body").style.backgroundColor = "#60b347";
//         document.querySelector(".number").style.width = "30rem";

//         if (score > highscore) {
//             highscore = score;
//             document.querySelector(".highscore").textContent = highscore;
//         }
//     } else if (guess > secretNumber) {
//         // when guess is too high-----------------------------------------
//         if (score > 1) {
//             document.querySelector(".message").textContent = "📈 Too high!";
//             score--;
//             document.querySelector(".score").textContent = score;
//         } else {
//             document.querySelector(".message").textContent =
//                 "😭 You lose the game!";

//             document.querySelector(".score").textContent = 0;
//         }
//     } else if (guess < secretNumber) {
//         // when guess is too low------------------------------------------
//         if (score > 1) {
//             document.querySelector(".message").textContent = "📉 Too low!";
//             score--;
//             document.querySelector(".score").textContent = score;
//         } else {
//             document.querySelector(".message").textContent =
//                 "😭 You lose the game!";

//             document.querySelector(".score").textContent = 0;
//         }
//     }
// });

/*
code challenge #1 --------------------------------------------------------------
Implement the game reset functionality, so that the player can make a new guess!

Tasks :
-Select the reset button
-generate a new secret number and hide it
-Reset the message
-Reset the score
-Clear the input textContent
*/

const resetButton = document.querySelector(".again");
console.log(resetButton);

// resetButton.addEventListener("click", function () {
//     // generate the new secret number and hide it
//     secretNumber = Math.trunc(Math.random() * 20) + 1;
//     document.querySelector(".number").textContent = "?";
//     document.querySelector("body").style.backgroundColor = "#222";
//     document.querySelector(".number").style.width = "15rem";

//     // Reset the info message
//     document.querySelector(".message").textContent = "Start guessing...";

//     // Reset the score
//     score = 20;
//     document.querySelector(".score").textContent = score;

//     // Clear the guess input box
//     document.querySelector(".guess").value = "";
// });

// Refactoring Our Code: The DRY Principle --------------------------------

// we use in multiple places the document.querySelector(".message").textContent
// so we better create a function that help us to reduce that repetitive code

// const displayMessage = function (message) {
//     document.querySelector(".message").textContent = message;
// };

function displayMessage(message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);

    console.log(guess, typeof guess);

    if (!guess) {
        // when the is no input--------------------------------------------

        displayMessage("⛔ No number entered!");
    } else if (guess === secretNumber) {
        // when the player wins---------------------------------------------
        document.querySelector(".number").textContent = secretNumber;
        displayMessage("🎉 Correct number");

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        if (score > highscore) {
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
        }
    } else if (guess !== secretNumber) {
        // when the guess is wrong
        if (score > 1) {
            // here we use a ternary operator to display a different message
            // document.querySelector(".message").textContent =
            //     guess > secretNumber ? "📈 Too high!" : "📉 Too low!";
            // also we use the new displayMessage function
            displayMessage(
                guess > secretNumber ? "📈 Too high!" : "📉 Too low!"
            );

            score--;
            document.querySelector(".score").textContent = score;
        } else {
            // document.querySelector(".message").textContent =
            //     "😭 You lose the game!";

            displayMessage("😭 You lose the game!");

            document.querySelector(".score").textContent = 0;
        }
    }
});

resetButton.addEventListener("click", function () {
    // generate the new secret number and hide it
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";

    // Reset the info message
    displayMessage("Start guessing...");
    // Reset the score
    score = 20;
    document.querySelector(".score").textContent = score;

    // Clear the guess input box
    document.querySelector(".guess").value = "";
});

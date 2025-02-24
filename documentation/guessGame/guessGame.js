/* 
BRIEF - I want you to create a simple "guess the number" type game. 
It should choose a random number between 1 and 100, 
then challenge the player to guess the number in 10 turns. After each turn, 
the player should be told if they are right or wrong, 
and if they are wrong, whether the guess was too low or too high. 
It should also tell the player what numbers they previously guessed. 
The game will end once the player guesses correctly, or once they run out of turns. 
When the game ends, the player should be given an option to start playing again.
STEPS - 
1. Generate a random number between 1 and 100
2. Record the turn number the player is on. Start it on 1.
3. Provide the player with a way to guess what the number is.
4. Once a guess has been submitted first record it somewhere so the user can see their previous guesses.
5. Next, check whether it is the correct number.
6. If it is correct:
* Display congratulations message.
* Stop the player from being able to enter more guesses (this would mess the game up).
* Display control allowing the player to restart the game.
7. If it is wrong and the player has turns left:
* Tell the player they are wrong and whether their guess was too high or too low.
* Allow them to enter another guess.
* Increment the turn number by 1.
8. If it is wrong and the player has no turns left:
* Tell the player it is game over.
* Stop the player from being able to enter more guesses (this would mess the game up).
* Display control allowing the player to restart the game.
9. Once the game restarts, make sure the game logic and UI are completely reset, then go back to step 1.
*/

// 1. Generate a random number between 1 and 100
let randomNumber = Math.ceil(Math.random() * 100);

const guesses = document.querySelector(".guesses");
const guessField = document.querySelector(".guessField");
const lastResult = document.querySelector(".lastResult");

const guessSubmit = document.querySelector(".guessSubmit");
const lowOrHi = document.querySelector(".lowOrHi");

let guessCount = 1;
let resetButton;
guessField.focus();

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Previous guesses:";
  }
  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Congratulations! You got it right!";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!!GAME OVER!!!";
    lowOrHi.textContent = "";
    setGameOver();
  } else {
    lastResult.textContent = "Wrong!";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Last guess was too low!";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Last guess was too high!";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Start new game";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}

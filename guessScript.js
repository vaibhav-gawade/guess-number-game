let num = Math.floor(Math.random()*(100) + 1);

const guess = document.querySelector('#guess');
const button = document.querySelector('#guessing');
const result = document.querySelector('.result');
const prevGuess = document.querySelector('#prev-guess');
const attemptsLeft = document.querySelector('#attempts-left');
const playAgain = document.querySelector('#play-again');

let attempts = 0;

button.addEventListener('click',function(e){
    if (guess.value === "") {
        result.textContent = "Please enter a number!";
        guess.focus();
        return;
    }

    let guessed = Number(guess.value);

    if (guessed < 1 || guessed > 100) {
        result.textContent = "Enter a number between 1 and 100!";
        guess.value = "";
        guess.focus();
        return;
    }

    if(guessed === num){
        result.style.color = "green";
        result.textContent = "YOU WON 🎉"
        playAgain.style.display = "block";
        guess.placeholder = "HIT PLAY AGAIN";
        button.disabled = true;
        guess.disabled = true;
    }else if(guessed > num){
        result.style.color = "#D97706";
        result.textContent = "Your Guess is High!";
    }else{
        result.style.color = "#2563EB";
        result.textContent = "Your Guess is Low!";
    }
    
    prevGuess.textContent = guessed;
    attempts++;
    attemptsLeft.textContent = 10 - attempts;
    guess.value = "";

    if(attempts === 10){
        result.style.color = "red";
        result.textContent = "YOU LOSE 😢"
        playAgain.style.display = "block";
        guess.placeholder("HIT PLAY AGAIN");
        button.disabled = true;
        guess.disabled = true;
    }

    guess.focus();
});

playAgain.addEventListener('click',function(e){
    num = Math.floor(Math.random()*(100) + 1);
    button.disabled = false;
    guess.disabled = false;
    guess.focus();
    playAgain.style.display = "None";
    guess.value = "";
    guess.placeholder = "Enter a Number";
    result.style.color = "orange";
    
    attempts = 0;
    prevGuess.textContent = "None";
    attemptsLeft.textContent = "10";

    result.textContent = "";
});
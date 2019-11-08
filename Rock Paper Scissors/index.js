const computerPlay = () => {
    let array = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * 3);
    return array[randomNum];
}

let playerWins = 0;
let computerWins = 0;

const gameRound = (playerSelectionEntry) => {
    let playerSelection = playerSelectionEntry.toLowerCase();
    let computerSelection = computerPlay();

    console.log(`Computer selection is: ${computerSelection}.`);

    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerWins++;
            console.log("You lose!Paper beats Rock.")
        } else if (computerSelection === "scissors") {
            playerWins++;
            console.log("You win!Rock beats Scissors.");

        } else if (computerSelection === "rock") {

            console.log(`Even, try again.`);

        }

    } else if (playerSelection === "paper") {

        if (computerSelection === "paper") {

            console.log(`Even, try again.`);

        } else if (computerSelection === "scissors") {
            computerWins++;
            console.log("You lose!Scissors beats Paper.");


        } else if (computerSelection === "rock") {
            playerWins++;
            console.log("You win!Paper beats Rock.");

        }

    } else if (playerSelection === "scissors") {

        if (computerSelection === "paper") {
            playerWins++;
            console.log(`You win, Scissors beats Paper.`);

        } else if (computerSelection === "scissors") {

            console.log("Even, try again.");


        } else if (computerSelection === "rock") {
            computerWins++;
            console.log("You lose!Rock beats Scissors.");

        }
    }


}
const game = (playerSelection) => {
    
    let element = document.createElement("span");
    let playersChoice = prompt(playerSelection).toLowerCase();
    for (let i = 0; i < 5; i++) {
        gameRound(playersChoice)


    }

    console.log(`Computer: ${computerWins}`, `Player Wins: ${playerWins}`);
    if (playerWins > computerWins) {
        // console.log("Player is the absolute winner!")
        element.innerHTML = "Player is the absolute winner!";
    } else {
        // console.log("Sorry, you lose..");
        element.innerHTML = "Sorry, you lose..";
    }
    document.getElementById("wrapper").appendChild(element);


}


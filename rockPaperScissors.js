// Select all DOM elements
const playButtons = document.querySelectorAll(".select-btn");
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const actionButtonsBox = document.querySelector(".actionButtons");
const playerCountDisplay = document.querySelector(".player-count");
const computerCountDisplay = document.querySelector(".computer-count");
const roundsLeft = document.querySelector(".rounds-left");
const roundInformation = document.querySelector(".information");
const chooseMove = document.querySelector(".chooseMove");
const rounds = document.querySelector(".rounds");
const result = document.querySelector(".result");
const winner = document.querySelector(".winner");
const restartButton = document.querySelector(".restart");
const celebrate = document.querySelector(".celebrate");

// Define all choices
const choices = ["rock", "paper", "scissors"];

// Step One: Get computer's input
const computerPlay = () => {
	const randomNumber = Math.floor(Math.random() * 3);
	// console.log(randomNumber);
	return choices[randomNumber];
};

function playerInput() {
	let playerSelection = prompt("Please choose: Rock, Paper or Scissors");
	while (!playerSelection) {
		alert("ATTENTION! You need to make a choice");
		playerSelection = prompt("Please choose: Rock, Paper or Scissors");
	}
	playerSelection = playerSelection.toLowerCase();
	if (
		playerSelection == "rock" ||
		playerSelection == "scissor" ||
		playerSelection == "paper"
	) {
		return playerSelection;
	} else {
		alert("Invalid choice!!! Please choose: Rock, Paper or Scissors ");
		playerSelection = playerInput();
		return playerSelection;
	}
}

// The LOGIC of the game. Determine the winner by comparing both user and computer inputs
const playRound = (playerSelection, computerSelection) => {
	let gameResult = "";
	let winStatus = "";

	if (playerSelection == computerSelection) {
		gameResult = "The game is a tie";
		winStatus = "tie";
		roundInformation.textContent = `${gameResult}`;
	} else if (playerSelection === "rock") {
		if (computerSelection === "paper") {
			gameResult = "You loose, Paper covers Rock.";
			winStatus = "computer";
			roundInformation.textContent = `You loose! Computer chose ${computerSelection}`;
		} else if (computerSelection === "scissors") {
			gameResult = "You Win, Rock crushes Scissors.";
			winStatus = "player";
			roundInformation.textContent = `You Win! Computer chose ${computerSelection}`;
		}
	} else if (playerSelection === "paper") {
		if (computerSelection === "scissors") {
			gameResult = "You loose, Scissors cuts Paper";
			winStatus = "computer";
			roundInformation.textContent = `You loose! Computer chose ${computerSelection}`;
		} else if (computerSelection === "rock") {
			gameResult = "You Win, Paper covers Rock.";
			winStatus = "player";
			roundInformation.textContent = `You Win! Computer chose ${computerSelection}`;
		}
	} else if (playerSelection === "scissors") {
		if (computerSelection === "rock") {
			gameResult = "You loose. Rock crushes Scissors";
			winStatus = "computer";
			roundInformation.textContent = `You loose! Computer chose ${computerSelection}`;
		} else if (computerSelection === "paper") {
			gameResult = "You Win, Scissors cuts Paper.";
			winStatus = "player";
			roundInformation.textContent = `You Win! Computer chose ${computerSelection}`;
		}
	}
	// console.log(gameResult);
	return winStatus;
};

const game = () => {
	let playerCount = 0;
	let computerCount = 0;
	let tieCount = 0;
	let computerSelection = computerPlay();
	// let rounds = 0;

	playButtons.forEach((button) => {
		button.addEventListener("click", () => {
			const playerSelection = button.textContent;
			let winStatus = playRound(playerSelection, computerSelection);
			if (winStatus === "computer") {
				computerCount++;
				computerCountDisplay.textContent = computerCount;
			} else if (winStatus === "player") {
				playerCount++;
				playerCountDisplay.textContent = playerCount;
			} else {
				tieCount += 1;
				// console.log(tieCount);
			}
			console.log(playerCount, computerCount);
			if (playerCount === 5 || computerCount === 5) {
				gameOver();
			}
		});
	});

	const gameOver = () => {
		actionButtonsBox.classList.toggle("hide");
		roundInformation.classList.toggle("hide");
		result.classList.toggle("unhide");

		if (playerCount > computerCount) {
			winner.textContent = "You won the game";
		} else {
			winner.textContent = "You lost the game";
			winner.classList.toggle("loser");
			celebrate.classList.toggle("hide");
		}
	};

	// ####################################################################
	// ************* PREVIOUS CODE ******************
	// ####################################################################

	// for (let i = 0; i < 5; i++) {
	// 	// let playerSelection = playerInput();
	// 	let computerSelection = computerPlay();
	// 	let winStatus = playRound(playerSelection, computerSelection);
	// 	if (winStatus === "computer") {
	// 		computerCount += 1;
	// 	} else if (winStatus === "player") {
	// 		playerCount += 1;
	// 	} else {
	// 		tieCount += 1;
	// 	}
	// }

	// console.log(playerCount);
	// console.log(computerCount);
	// console.log(tieCount);

	// playerCount > computerCount
	// 	? alert("After 5 rounds, Player Won overall")
	// 	: alert("After 5 rounds, Computer Won overall");
};

game();

restartButton.addEventListener("click", () => {
	window.location.reload();
});

party.confetti(runButton, {
	count: party.variation.range(20, 40),
});

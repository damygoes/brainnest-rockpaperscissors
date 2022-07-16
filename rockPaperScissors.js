// Define all choices
const choices = ["rock", "paper", "scissors"];

// Step One: Get computer's input
const computerPlay = () => {
	const randomNumber = Math.floor(Math.random() * 3);
	// console.log(randomNumber);
	return choices[randomNumber];
};

// The LOGIC of the game. Determine the winner by comparing both user and computer inputs
const playRound = (playerSelection, computerSelection) => {
	let gameResult = "";
	let winStatus = "";

	if (playerSelection == computerSelection) {
		gameResult = "The game is a tie";
		winStatus = "tie";
	} else if (playerSelection === "rock") {
		if (computerSelection === "paper") {
			gameResult = "You loose, Paper covers Rock.";
			winStatus = "computer";
		} else if (computerSelection === "scissors") {
			gameResult = "You Win, Rock crushes Scissors.";
			winStatus = "player";
		}
	} else if (playerSelection === "paper") {
		if (computerSelection === "scissors") {
			gameResult = "You loose, Scissors cuts Paper";
			winStatus = "computer";
		} else if (computerSelection === "rock") {
			gameResult = "You Win, Paper covers Rock.";
			winStatus = "player";
		}
	} else if (playerSelection === "scissors") {
		if (computerSelection === "rock") {
			gameResult = "You loose. Rock crushes Scissors";
			winStatus = "computer";
		} else if (computerSelection === "paper") {
			gameResult = "You Win, Scissors cuts Paper.";
			winStatus = "player";
		}
	}
	console.log(gameResult);
	return winStatus;
};

const game = () => {
	let playerCount = 0;
	let computerCount = 0;
	let tieCount = 0;

	for (let i = 0; i < 5; i++) {
		let userInput = prompt("Please choose: rock, paper or scissors");
		let playerSelection = userInput.toLowerCase();
		let computerSelection = computerPlay();
		let winStatus = playRound(playerSelection, computerSelection);
		if (winStatus === "computer") {
			computerCount += 1;
		} else if (winStatus === "player") {
			playerCount += 1;
		} else {
			tieCount += 1;
		}
	}
	// console.log(playerCount);
	// console.log(computerCount);
	// console.log(tieCount);

	playerCount > computerCount
		? alert("After 5 rounds, Player Won overall")
		: alert("After 5 rounds, Computer Won overall");
};

game();

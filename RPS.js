console.log("Hello World!")

function randomInt(min, max){
	return Math.floor(Math.random() * (max + 1 - min) + min);
}

function getComputerChoice(){
	let num = randomInt(1, 3);
	let choice;
	if(!num) choice = "rock";
	else if(num === 1) choice = "paper";
	else choice = "scissor";
	return choice;
}

function getHumanChoice(){
	let choice;

	let validChoice = 0;
	while(!validChoice){
		let s = prompt("Enter your choice: ");
		choice = s.toLowerCase();
		if(choice === 'rock' || choice === 'paper' || choice === 'scissor') validChoice = 1;
		else alert("Enter a valid choice.");
	}
	return choice;
}

function playGame(playRound){
	let humanScore = 0,
		computerScore = 0;
	while(playRound){
		console.log("Round ", 6-playRound);
		let humanChoice = getHumanChoice();
		let computerChoice = getComputerChoice();

		console.log("Computer's choice: ", computerChoice);
		console.log("Your choice: ", humanChoice);

		if(humanChoice === computerChoice){
			humanScore++;
			computerScore++;
			console.log("Both scored a point");
		}
		else if(humanChoice === "rock" && computerChoice === "scissor"){
			humanScore++;
			console.log("You scored a point.");
		}
		else if(humanChoice === "rock" && computerChoice === "paper"){
			computerScore++;
			console.log("Computer scored a point.");
		}
		else if(humanChoice === "scissor" && computerChoice === "paper"){
			humanScore++;
			console.log("You scored a point.");
		}
		else if(humanChoice === "scissor" && computerChoice === "rock"){
			computerScore++;
			console.log("Computer scored a point.");
		}
		else if(humanChoice === "paper" && computerChoice === "rock"){
			humanScore++;
			console.log("You scored a point.");
		}
		else if(humanChoice === "paper" && computerChoice === "scissor"){
			computerScore++;
			console.log("Computer scored a point.");
		}

		console.log("Your Score: ", humanScore);
		console.log("Computer's score: ", computerScore);
		console.log("\n");
		playRound--;
	}
	if(humanScore === computerScore) console.log("Draw!");
	else if(humanScore > computerScore) console.log("You Won!");
	else console.log("Computer Won!");
}

playGame(5);

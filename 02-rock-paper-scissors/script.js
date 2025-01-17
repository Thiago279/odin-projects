function getComputerChoice () {
    const choice = Math.random();
    if (choice < (1/3)){
        return "rock";
    }
    else if (choice < (2/3)){
        return "paper";
    }
    else return "scissors";
}

function getHumanChoice (){
    const choice = prompt("Choose between Rock, Paper or Scissors!").toLowerCase()
    console.log(choice)
    if (choice != "rock" && choice != "paper" && choice != "scissors"){
        alert("Invalid choice! Please choose rock, paper, or scissors.");
        return getHumanChoice();
    }
    return choice;
}

function rockGame (opponent){
    if (opponent === "rock") return "draw";
    else if (opponent === "scissors") return "win";
    else return "lose";
}

function paperGame (opponent){
    if (opponent === "rock") return "win";
    else if (opponent === "scissors") return "lose";
    else return "draw";
}

function scissorsGame (opponent){
    if (opponent === "rock") return "lose";
    else if (opponent === "scissors") return "draw";
    else return "win";
}

function playRound (humanChoice, computerChoice) {
    if (humanChoice === "rock"){
        return rockGame(computerChoice);
    }
    else if (humanChoice=== "paper"){
        return paperGame(computerChoice);
    }
    else return scissorsGame(computerChoice);
}

function showChoices (humanChoice,computerChoice){
    console.log("Your choice:" + humanChoice);
    console.log("\nComputer's choice:" + computerChoice);
}

function showScores(score1 , score2 ){
    console.log(`player score:${score1}`);
    console.log(`computer score:${score2}`);
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let roundNum = 0;
    while(roundNum < 5){        
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        showChoices(humanChoice,computerChoice);
        let round = playRound(humanChoice, computerChoice);
        if (round === "win") {
            humanScore++;
            roundNum ++;
        }
        else if (round === "lose"){
            computerScore++;
            roundNum ++;
        }
        else{
            console.log("Draw! play again!")
        }
        showScores(humanScore, computerScore);
    }
    if (humanScore > computerScore) {
        alert("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        alert("Computer wins! Better luck next time!");
    }
}

playGame();


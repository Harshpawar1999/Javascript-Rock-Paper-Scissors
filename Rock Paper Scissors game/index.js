function computerPlay(){
    var array = ["ROCK", "PAPER", "SCISSORS"];
    var random = Math.floor(Math.random() * 3);
    var selectRandom = array[random];
    return selectRandom; 
}

function roundPlay(playerSelection, computerSelection){
    var capital = playerSelection.toUpperCase();
    if(capital === computerSelection){
        return "Draw";
    }
    else if(capital === "ROCK" && computerSelection === "PAPER"){
        return "You Lose";
    }
    else if(capital === "ROCK" && computerSelection === "SCISSORS"){
        return "You Won";
    }
    else if(capital === "PAPER" && computerSelection === "SCISSORS"){
        return "You Lose";
    }
    else if(capital === "PAPER" && computerSelection === "ROCK"){
        return "You Won";
    }
    else if(capital === "SCISSORS" && computerSelection === "Rock"){
        return "You Lose";
    }
    else if(capital === "SCISSORS" && computerSelection === "PAPER"){
        return "You Won";
    }
}

function game(){
    let playerScore = 0;
    let comScore = 0;
    for(let i = 0; i < 100; i++) {
        playerSelection = prompt("Enter Your Choice Rock, Paper Scissors");
        computerSelection = computerPlay();
        console.log("Computer - " + computerSelection);
        console.log("Your - " + playerSelection);
        var result = roundPlay(playerSelection,computerSelection);
        if(result === "You Won"){
            playerScore++;
            console.log(result + " Your Score = " + playerScore + "  Computer Score = " + comScore);
            if(playerScore === 5){
                break;
            }
        } else if(result === "You Lose") {
            comScore++;
         console.log(result + " Your Score = " + playerScore + "  Computer Score = " + comScore);
            if(comScore === 5){
                break;
            }
        }
        else{
            console.log("Draw");
        }
    }
    if(playerScore === 5){
        console.log("Congratulation!5 Rounds you Won!!!");
    }
    else{
        console.log("You Lose a round of 5 games");
    }
}
game();
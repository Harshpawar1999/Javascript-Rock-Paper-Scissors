// function computerPlay(){
//     var array = ["rock", "paper", "scissors"];
//     var random = Math.floor(Math.random() * 3);
//     var selectRandom = array[random];
//     return selectRandom; 
// }
// const btn = document.getElementsByClassName("btn");
// const 
// function roundPlay(playerSelection, computerSelection){
//     var capital = playerSelection.toUpperCase();
//     if(capital === computerSelection){
//         return "Draw";
//     }
//     else if(capital === "ROCK" && computerSelection === "PAPER"){
//         return "You Lose";
//     }
//     else if(capital === "ROCK" && computerSelection === "SCISSORS"){
//         return "You Won";
//     }
//     else if(capital === "PAPER" && computerSelection === "SCISSORS"){
//         return "You Lose";
//     }
//     else if(capital === "PAPER" && computerSelection === "ROCK"){
//         return "You Won";
//     }
//     else if(capital === "SCISSORS" && computerSelection === "Rock"){
//         return "You Lose";
//     }
//     else if(capital === "SCISSORS" && computerSelection === "PAPER"){
//         return "You Won";
//     }
// }

// function game(){
//     let playerScore = 0;
//     let comScore = 0;
//     // for(let i = 0; i < 100; i++) {
//     //     // playerSelection = prompt("Enter Your Choice Rock, Paper Scissors");
//     //     computerSelection = computerPlay();
//     //     console.log("Computer - " + computerSelection);
//     //     console.log("Your - " + playerSelection);
//     //     var result = roundPlay(playerSelection,computerSelection);
//     //     if(result === "You Won"){
//     //         playerScore++;
//     //         console.log(result + " Your Score = " + playerScore + "  Computer Score = " + comScore);
//     //         if(playerScore === 5){
//     //             break;
//     //         }
//     //     } else if(result === "You Lose") {
//     //         comScore++;
//     //      console.log(result + " Your Score = " + playerScore + "  Computer Score = " + comScore);
//     //         if(comScore === 5){
//     //             break;
//     //         }
//     //     }
//     //     else{
//     //         console.log("Draw");
//     //     }
//     // }
//     // if(playerScore === 5){
//     //     console.log("Congratulation!5 Rounds you Won!!!");
//     // }
//     // else{
//     //     console.log("You Lose a round of 5 games");
//     // }
// }

var you;
var yourScore = 0;
var opponent;
var opponentScore = 0;
var choices = ["rock","paper","scissors"];

window.onload = function() {
    for(let i = 0; i < choices.length; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
    }
}
function selectChoice() {
    you = this.id;
    document.getElementById("your-choice").src = you + ".png"; 

    opponent = choices[Math.floor(Math.random() * 3)];
    document.getElementById("opponent-choice").src = opponent + ".png";
    
    if(you == opponent) {
        //
    }
    else{
        if(you == "rock") {
            if(yourScore == 5){
                document.getElementById("result").innerText = "You won";
            }
            else if(opponentScore == 5) {
                document.getElementById("result").innerText = "You Lost";
            }
            if(opponent == "scissors") {
                yourScore++;
            }
            else if(opponent == "paper") {
                opponentScore++;
            }
        }
        else if(you == "paper") {
            if(opponent == "rock") {
                yourScore++;
            }
            else if(opponent == "scissors") {
                opponentScore++;
            }
        }
        if(you == "scissors") {
            if(opponent == "paper") {
                yourScore++;
            }
            else if(opponent == "rock") {
                opponentScore++;
            }
        }
    }
    document.getElementById("opponent-score").innerText = opponentScore;
    document.getElementById("your-score").innerText = yourScore;
    if(yourScore === 5){
        document.getElementById("result").InnerHTML = "<h1>You Won</h1>";
    }
    else{
        document.getElementById("result").InnerHTML = "<h1>OOPS You Lost</h1>";
    }
}

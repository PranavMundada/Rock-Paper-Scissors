let scores = { humanScore: 0, computerScore: 0 };
let current_result;
let flag=0;

function playround(scores, humanChoice) {
    if(flag==0)return;
    let rand = Math.floor(Math.random()*10) % 3;
    if (rand == 0) {
        computerChoice = "ROCK";
        if (humanChoice == "ROCK") {
            current_result = "Round Tied!";
        }
        else if (humanChoice == "PAPER") {
            scores.humanScore += 1;
            current_result = "You Win! Paper beats Rock.";
        }
        else if (humanChoice == "SCISSOR") {
            scores.computerScore += 1;
            current_result = "You Lose! Rock beats Scissor.";
        }
    }
    else if (rand == 1) {
        computerChoice = "PAPER";
        if (humanChoice == "ROCK") {
            scores.computerScore += 1;
            current_result = "You Lose! Paper beats Rock.";
        }
        else if (humanChoice == "PAPER") {
            current_result = "Round Tied!";
        }
        else if (humanChoice == "SCISSOR") {
            scores.humanScore += 1;
            current_result = "You Win! Scissor beats Paper.";
        }
    }
    else {
        computerChoice = "SCISSORS";
        if (humanChoice == "ROCK") {
            scores.humanScore += 1;
            current_result = "You Win! Rock beats Scissor.";;
        }
        else if (humanChoice == "PAPER") {
            scores.computerScore += 1;
            current_result = "You Lose!Scissors beats Paper.";
        }
        else if (humanChoice == "SCISSOR") {
            current_result = "Round Tied!";
        }
    }
    document.getElementById('human_score').innerText = `Your Score: ${scores.humanScore}`;
    document.getElementById('computer_score').innerText = `Computer Score: ${scores.computerScore}`;
    document.getElementById('currentResult').innerText=`Round Result: ${current_result}`;
    if(scores.humanScore===5){
        document.getElementById('Result').innerText='YOU WON THE GAME';
        flag=0;
    }
    if(scores.computerScore===5){
        document.getElementById('Result').innerText='YOU LOST THE GAME';
        flag=0;
    }
}

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => {
    playround(scores, "ROCK");
});

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => {
    playround(scores, "PAPER");
});

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => {
    playround(scores, "SCISSOR");
});

const restart=document.querySelector('#restart');
restart.addEventListener("click",()=>{
    flag=1;
    scores.humanScore=0;
    scores.computerScore=0;
    document.getElementById('human_score').innerText = `Your Score: ${scores.humanScore}`;
    document.getElementById('computer_score').innerText = `Computer Score: ${scores.computerScore}`;
    document.getElementById('currentResult').innerText=`Round Result:`;
    document.getElementById('Result').innerText=' ';
    document.getElementById('restart').innerText="Restart";
});
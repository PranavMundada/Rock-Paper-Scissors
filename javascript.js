function playround(scores){
    let humanChoice,computerChoice;
    let rand=Math.floor(Math.random()*11)%3;
    humanChoice=prompt("Enter Your choice:").toUpperCase();
    if(rand==0){
        computerChoice="ROCK";
        if(humanChoice=="ROCK")
        {
            console.log("Round Tied!");
        }
        else if(humanChoice=="PAPER")
        {
            console.log("You Win! Paper beats Rock.");
            scores.humanScore+=1;
        }
        else if(humanChoice=="SCISSOR")
        {
            console.log("You Lose! Rock beats Scissor.");
            scores.computerScore+=1;
        }
        else
        {
            console.log("WRONG INPUT");
        }
    }
    else if(rand==1){
        computerChoice="PAPER";
        if(humanChoice=="ROCK")
            {
                console.log("You Lose! Paper beats Rock.");
                scores.computerScore+=1;
            }
            else if(humanChoice=="PAPER")
            {
                console.log("Round Tied!");
            }
            else if(humanChoice=="SCISSOR")
            {
                console.log("You Win! Scissor beats Paper.");
                scores.humanScore+=1;
            }
            else
            {
                console.log("WRONG INPUT");
            }
    }
    else{
        computerChoice="SCISSORS";
        if(humanChoice=="ROCK")
            {
                console.log("You Win! Rock beats Scissor.");
                scores.humanScore+=1;
            }
            else if(humanChoice=="PAPER")
            {
                console.log("You Lose!Scissors beats Paper.");
                scores.computerScore+=1;
            }
            else if(humanChoice=="SCISSOR")
            {
                console.log("Round Tied!");
            }
            else
            {
                console.log("WRONG INPUT");
            }
    }
}

function playgame(){
    let scores={humanScore:0,computerScore:0};
    for(let i=0;i<5;i++){
        playround(scores);
    }
    if(scores.humanScore>scores.computerScore){
        console.log("YOU WON THE GAME!");
    }
    else if(scores.humanScore<scores.computerScore){
        console.log("YOU LOST THE GAME!");
    }
    else
    {
        console.log("GAME TIED!");
    }
}

playgame();
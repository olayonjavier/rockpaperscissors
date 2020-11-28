let moves = ['Rock', 'Paper', 'Scissors']; 
const NUM_OF_TURNS = 5;
let playerScore = 0;
let computerScore = 0;
String.prototype.equalsIgnoreCase = function (compareString) { return this.toUpperCase() === compareString.toUpperCase();}; 

function computerPlay(){
    return moves[Math.floor(Math.random() * Math.floor(3))]; 
}

function rockLogic(computerSelection){
    if(computerSelection === moves[0]){
        return `You tied! ${moves[0]} ties with ${computerSelection}`;
    } else if(computerSelection === moves[1]){
        return `You lose! ${computerSelection} beats ${moves[0]}`;
    } else if (computerSelection === moves[2]){
        return `You win! ${moves[0]} beats ${computerSelection}`;
    }
}

function paperLogic(computerSelection){
    if(computerSelection === moves[0]){
        return `You win! ${moves[1]} beats ${computerSelection}`;
    } else if (computerSelection === moves[1]){
        return `You tied! ${moves[1]} ties with ${computerSelection}`;
    } else if(computerSelection === moves[2]){
        return `You lose! ${computerSelection} beats with ${moves[0]}`;
    }
}

function scissorsLogic(computerSelection){
    if(computerSelection === moves[2]){
        return `You lose! ${computerSelection} beats with ${moves[0]}`;
    } else if (computerSelection === moves[1]){
        return `You win! ${moves[2]} beats ${computerSelection}`;
    } else if(computerSelection === moves[2]){
        return `You tied! ${moves[2]} ties with ${computerSelection}`;
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection === moves[0]){ 
        //console.log(`playRound got ${playerSelection} from player and ${computerSelection} from computer`);
        return rockLogic(computerSelection);
    } else if(playerSelection === moves[1]){
        //console.log(`playRound got ${playerSelection} from player and ${computerSelection} from computer`);
        return paperLogic(computerSelection);
    } else if(playerSelection === moves[2]){
        //console.log(`playRound got ${playerSelection} from player and ${computerSelection} from computer`);
        return scissorsLogic(computerSelection);
    } else{
        return "Invalid move";
    }
}

function game(playerChoice){
    //let winCount = 0;
    //let compWinCount = 0;
    console.log("Made it to the game through button press");
    //for(let i = 0; i < NUM_OF_TURNS; i++){ //for limiting number of turns       
        const computerSelection = computerPlay();
        const playerSelection = parsePrompt(playerChoice);
        console.log(`Computer got ${computerSelection}`);
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if(result.includes("win")){
            console.log(`Recording a win`);
            scoreboard('player');
        }else{
            scoreboard('computer');
        }
    //}
    
    //console.log(`You beat the computer ${winCount} time(s)!`);
}

function scoreboard(winner){
    const scorePlayer = document.querySelector('#playerScore');
    const scoreComputer = document.querySelector('#computerScore');
    if(winner === 'player'){
        playerScore++;
        scorePlayer.textContent = `${playerScore}`;
    }else if(winner === 'computer'){
        computerScore++;
        scoreComputer.textContent = `${computerScore}`;
    }

    if(playerScore === NUM_OF_TURNS || computerScore === NUM_OF_TURNS){
        declareWinner(winner);
    }
}

function declareWinner(winner){
    const resultDiv = document.querySelector('#results');
    const resultH1 = document.createElement('h1');
    resultH1.textContent = `${winner} won!`;
    resultDiv.appendChild(resultH1);
}

function parsePrompt(input){
    if (input.equalsIgnoreCase(moves[0])){
        console.log(`Got ${moves[0]}`);
        return moves[0];
    } else if(input.equalsIgnoreCase(moves[1])){
        console.log(`Got ${moves[1]}`);
        return moves[1];
    } else if(input.equalsIgnoreCase(moves[2])){
        console.log(`Got ${moves[2]}`);
        return moves[2];
    } else{
        return "invalid";
    }
}

const btns = Array.from(document.querySelectorAll('.btn'));
btns.forEach(choice => choice.addEventListener('click', function(){
    game(this.id)
}));

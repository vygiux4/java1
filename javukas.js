let zodziai = ['rock', 'scisors', 'paper'];
const winner = 'the player won';
const lost = 'the pc';
let playerScore = 0;
     let computerScore = 0;

 const computerSelection = computerplay();    

function computerplay() {
    const randomresult = zodziai[Math.floor(Math.random() * zodziai.length)]
    return randomresult;

}



function getResult(playerSelection, computerSelection){

    
       
   
    if (playerSelection === computerSelection) {
         return  "tie"
    }
    else if (playerSelection === "rock"){
        if (computerSelection === "paper"){
            return lost
        }
         
    
        else if (playerSelection === "rock"){
            if (computerSelection === "scisors"){
                return winner
            }
             else if (playerSelection === "rock"){
            if (computerSelection === "scisors"){
                return winner
            }
    }
    else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            return winner
        }
    }
        else if (playerSelection === "paper"){
            if (computerSelection === "scisors"){
                return lost
            }
    }
    else if (playerSelection === "scisors") {
        if (computerSelection === "rock"){
            return lost
        }
    }
    else if (playerSelection === 'scisors') {
        if (computerSelection === 'paper'){
            return winner
        }
    }
} }

}

function game (){

  

     for (let i = 0; i < 5; i++) {

       let playerSelection = window.prompt('Choose your fighter');
       let computerSelection = computerplay();
       getResult(playerSelection, computerSelection)
       
        
     
     
     if (getResult(playerSelection, computerSelection) === winner) {
         console.log(winner);
         playerScore++;
     }
         else if (getResult(playerSelection, computerSelection) === lost) {
             console.log(lost);
             computerScore++;
         } else console.log('tie');
     }
    
        if(playerScore > computerScore){
            console.log('player winner')
        } else if (computerScore > playerScore) {
           console.log('pc winner')
        } else if (computerScore === playerScore){
        console.log('equal')
        }
    }
 console.log(game())
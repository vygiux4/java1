let zodziai = ['rock', 'scisors', 'paper'];
const winner = 'wooho wiiner dinner ';
const lost = 'no winer no dinner';
playerSelection = window.prompt('what is your number')


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
}
    
const resultatito = getResult(playerSelection, computerSelection)

console.log(computerplay(resultatito))

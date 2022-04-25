let zodziai = ['rock', 'scisors', 'paper'];
const winner = 'the player won';
const lost = 'the pc';


 const computerSelection = computerplay();    

function computerplay() {
    const randomresult = zodziai[Math.floor(Math.random() * zodziai.length)]
    return randomresult
 
}



       rock.addEventListener('click', function () {
   playerSelection = 'rock'
   game()
       })



       paper.addEventListener('click', function () {
        playerSelection = 'paper'
       game()
            })

            scicors.addEventListener('click', function() {
                playerSelection = 'scisors'
               game()
                    })

                
                    const player = document.createElement("div");
                    container.append(player);
                    player.innerText = "player =";
                    
                    const computer = document.createElement("div");
                    container.append(computer);
                    computer.innerText = "computer =";

function getResult(playerSelection, computerSelection){


   
    if (playerSelection === computerSelection) {
         return  "equal"
    }
     if (playerSelection === "rock" && computerSelection === "paper"){
            return lost
        }
         
        if (playerSelection === "rock" && computerSelection === "scisors"){
                return winner
            }
             if (playerSelection === "rock" && computerSelection === "scisors"){
                return winner
            }
    if (playerSelection === "paper" && computerSelection === "rock"){
            return winner
        }
    
         if (playerSelection === "paper" && computerSelection === "scisors"){
                return lost
            }
    
    if (playerSelection === "scisors" && computerSelection === "rock"){
            return lost
        }
    
     if (playerSelection === 'scisors' && computerSelection === 'paper'){
     
        return winner
     }
    } 


  

    let computerScore = 0;
    let playerScore = 0 
function game (){
  
  
    for (let i = 0; i < 1; i++){
    
       let computerSelection = computerplay();
       
        
     if (getResult(playerSelection,computerSelection) === winner) {
         console.log(winner)
         playerScore++;
     }  if (getResult(playerSelection,computerSelection) === lost) {
            (console.log(lost))
             computerScore++;   
         }
        player.textContent ='player = '+ playerScore
        computer.textContent = 'computer = ' + computerScore
         
        if (playerScore === 5) {
            window.alert('you won')
            playerScore = 0
            computerScore = 0
        }
         if (computerScore === 5) {
            window.alert('game over')
            playerScore = 0
            computerScore = 0
         
        }   
    }}
   
     


  
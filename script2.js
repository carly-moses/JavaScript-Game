//Lab 2

"use strict";

{
    function startGame() {
        let greeting = prompt ("Would you like to play the game?");
        if(greeting.toLowerCase() === "yes"){
            let userName = prompt ("What's your character's name?");
            startCombat(userName);
        } else if (greeting.toLowerCase()=== "no") {
            console.log ("Dang Nabbit! That's lame."); 
        } else {
            console.log (`Well, what happened here? You simply had to enter "yes" or "no"`);
        }

    
  
    function startCombat(name){
        let userHealth = 40; 
        let grantHealth = 10; 
        let wins = 0; 
            while (grantHealth > 0) {
                let gamePlay = prompt ("Would you like to attack or quit?");
                if (gamePlay === "attack"){ 
                    console.log (`${name}'s Health: ${userHealth -= getDamage()}`);
                    console.log (`Grant's Health: ${grantHealth -= getDamage()}`);
                    if (wins === 3) {
                        console.log (`Congrats ${name}!`); 
                        break;
                    } else if (userHealth <= 0) {
                        console.log (`Game Over - ${name} loses, Grant wins!"`); 
                        break; 
                    } else if (grantHealth <= 0) {
                        wins++; 
                        console.log (`${name} wins: ${wins}`);
                        grantHealth = 10; 
                    } else {
                        console.log (" "); //I know this is needed, and I needed it to make my else if gamePlay condition to work, 
                                            //but I wasn't really sure what I should console.log
                    }

                } else if (gamePlay === "quit") {
                    console.log ("Fine, Forfeit then."); 
                    break; 
                }
                    
                }  
            }   

        function getDamage(){
            return Math.floor(Math.random() * 5+1);
        }

    }
 startGame(); 

    }
   


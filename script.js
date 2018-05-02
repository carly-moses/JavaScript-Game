"use strict";
//re-link if you want to use this! Part 1 to JavaScript Game Lab
let greeting = prompt ("Would you like to play the game?");

if (greeting.toLowerCase() === "yes") {
    let userHealth = 40; 
    let grantHealth = 10; 
    let userName = prompt ("What's your character's name?");
    let wins = 0; 
    while (greeting) {
        console.log (`${userName}'s Health: ${userHealth}`);
        console.log (`Grant's Health: ${grantHealth}`);
        console.log (`${userName}'s Health: ${userHealth -= Math.floor(Math.random() * 2+1)}`);
        console.log (`Grant's Health: ${grantHealth -= Math.floor(Math.random() * 2+1)}`);
        if (wins === 3) {
            console.log (`Congrats ${userName}!`); 
            break;
        } else if (userHealth <= 0) {
            console.log (`Game Over - ${userName} loses, Grant wins!"`); 
            break; 
        } else if (grantHealth <= 0) {
            wins++; 
            console.log (`${userName} wins: ${wins}`);
            grantHealth = 10; 
        }
    } 
} else if (greeting === "no") {
    console.log ("Bummer. Maybe next time!");
} 


"use strict";
{
  // let play = prompt("Do you want to play the game?");
  let play = "yes";
  if (play.toLowerCase() === "yes") {
    const name = prompt("Enter your name.");
    let userHealth = 40;
    let grantHealth = 10;
    let wins = 0;
    console.log(`${userHealth}, ${grantHealth}, ${wins}`);
    while (play) {
      console.log(`${name} gets hit. They have ${userHealth -= Math.floor(Math.random() * 10 + 1)} health left.`);
      console.log(`Grant gets hit. They have ${grantHealth -= Math.floor(Math.random() * 10 + 1)} health left.`);
      if (userHealth <= 0) {
        console.log("You lose. Sucks to suck.");
        break;
      }
      if (grantHealth <= 0) {
        wins++;
        if (wins === 3) {
          console.log("You're the best around. Nothings ever gonna keep you down!");
          break;
        } else {
          grantHealth = 10;
          console.log(`Grant has been defeated. You need to defeat him ${3 - wins} more time(s).`);
        }
      }  
    }
  } else {
    console.log("Maybe later?");
  }
}



// let numbers = [];
// for (let i = 0; i <= 5; i++) {
//   numbers.push(Math.floor(Math.random() * 9 + 1));
// }
// console.log(numbers);
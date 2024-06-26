#! /usr/bin/env node 
import inquirer from "inquirer";
// 1) computer will generate number -done
// 2) user input guessing number -done
// 3) computer user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
console.log("Welcome to number Guessing Game");
const answers = await inquirer.prompt([
    {
        name: "userGussedNumber",
        type: "number",
        message: "please guess a  between 1-6:",
    }
]);
if (answers.userGussedNumber === randomNumber) {
    console.log("congragulations! you gussed right number.");
}
else {
    console.log("you guessed wrong number");
}

#! /usr/bin/env node
import inquirer from "inquirer";
const randomNumber = "math.floor(math.random()* 5 + 1)";
const answer = await inquirer.prompt([{
        name: "userNumber",
        type: "number",
        message: "Pleas Enter a user guessing number",
    }]);
if (answer.userNumber === randomNumber) {
    console.log("Congratulation ueser guessing a right number");
}
else {
    console.log("Your guessing ronge number");
}

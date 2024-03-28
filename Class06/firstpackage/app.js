import inquirer from "inquirer";
import chalk from 'chalk';
let answer = await inquirer.prompt([{
    name: "userName",
    type: "string",
    message: "What is your name? ",
}]);

console.log(chalk.blue("Welcome! " + answer.userName));

//await 
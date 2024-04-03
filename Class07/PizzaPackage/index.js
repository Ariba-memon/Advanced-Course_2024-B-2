#! /usr/bin/env node
// import inquirer from "inquirer";
// import chalk from "chalk";
// let answer = await inquirer.prompt([{
//     name: "userName",
   
//     message: "What is your name? ",
// }]);

// console.log(chalk.blue("Welcome! " + answer.userName));

//var es5
//let const es6

//prompt takay user sy kuch data lia jaye
//inquirer cli 




import inquirer from "inquirer";
import chalk from "chalk"
let answers = await inquirer.prompt([{
  name: "UserOutput",
  type:'list',
  choices:["CheddarCheese","Mozellera Cheese","Parmesan Cheese"],
  message:"Select Your Cheese Flavour"

}
])
console.log(chalk.blue(" Congratulations Your pizza is ready with" + answers.UserOutput ));
//jb tak user ka response nh aye tb tak wait krtay rahein
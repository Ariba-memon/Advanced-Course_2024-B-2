import inquirer from "inquirer";
import chalk from 'chalk';

async function generateTable() {
    const { table } = await inquirer.prompt([
        {
            name: "table",
            type: "number",
            message: "Enter the number you want the table for: ",
        }
    ]);

    console.log(chalk.blue(`Table for ${table}`));

    for (let i = 1; i <= 10; i++) {
        console.log(`${table} x ${i} = ${table * i}`);
    }
}

generateTable();

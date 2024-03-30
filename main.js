import inquirer from 'inquirer';
let num1 = await inquirer.prompt({
    name: 'input1',
    type: 'number',
    message: 'What is the first number?'
});
let opr = await inquirer.prompt({
    name: 'operator',
    type: 'list',
    choices: ['+', '-', '*', '/'],
});
let num2 = await inquirer.prompt({
    name: 'input2',
    type: 'number',
    message: 'What is the second number?'
});
if (opr.operator === '+') {
    console.log(num1.input1 + num2.input2);
}
else if (opr.operator === '-') {
    console.log(num1.input1 - num2.input2);
}
else if (opr.operator === '*') {
    console.log(num1.input1 * num2.input2);
}
else if (opr.operator === '/') {
    console.log(num1.input1 / num2.input2);
}

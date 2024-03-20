import inquirer from "inquirer";
const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstNum" },
  { message: "enter second number", type: "number", name: "secondNumber" },
  { message: "select one of the operator", type: "list", name: "operator" , choices : ['addition', 'subtraction','multiplication', 'division']},
]);

 if(answer.operator === 'addition'){
    console.log(`your value is ${answer.firstNum + answer.secondNumber}`);
} else if(answer.operator === 'subtraction'){
    console.log(`your value is ${answer.firstNum - answer.secondNumber}`);
} else if(answer.operator === 'multiplication'){
     console.log(`your value is ${answer.firstNum *  answer.secondNumber}`);
} else if(answer.operator === 'division'){
    console.log(`your value is ${answer.firstNum / answer.secondNumber}`);
}else{"please select correct operator"};

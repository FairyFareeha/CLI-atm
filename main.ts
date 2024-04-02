import { log } from "console";
import inquirer from "inquirer";
let myBalance = 10000;
const ACC_NUMBER = 1234567890;
let myPin = 1234;
let myId = "Fareeha Khurram";
console.log("Welcome To Bank Islami...!");

let pinAnswer = await inquirer.prompt([
  {
    name: "user_id",
    type: "input",
    message: "Please Enter Your User_Id To Confirm",
  },
  {
    name: "pin",
    message: " Please Enter Your 4 Digit  Pin Code ",
    type: "input",
  },
]);
if (pinAnswer.user_id == myId && pinAnswer.pin == myPin) {
  console.log("Verification Completed... !!!");
  console.log(`Hello Fareeha Khurram,\nAccount Number ${ACC_NUMBER}`);

  console.log(`Here Is Your Account Balance $${myBalance}`);
  let accType = await inquirer.prompt({
    name: "account_type",
    message: "Select Account Type",
    type: "list",
    choices: ["Savings", "Current"],
  });
  if (accType.account_type == "Savings" || accType.account_type == "Current") {
    let operationAnswer = await inquirer.prompt([
      {
        name: "operation",
        message: "Plese Select Transaction Type",
        type: "list",
        choices: ["Withdraw", "Check Balance", "Fast Cash"],
      },
    ]);

    if (operationAnswer.operation === "Withdraw") {
      let amountAnswer = await inquirer.prompt([
        {
          name: "amount",
          message: "Enter Your Amount",
          type: "number",
        },
      ]);
      myBalance -= amountAnswer.amount;
      console.log("Your Remaining Balance Is : " + myBalance);
      console.log("Please Take Your Card");
      console.log("Please Collect Your Cash");
      
      
    } else if (operationAnswer.operation === "Check Balance") {
      console.log("Your Balanc Is : " + myBalance);
    } else if (operationAnswer.operation === "Fast Cash") {
      let fastCashAnswer = await inquirer.prompt([
        {
          name: "fastCash",
          type: "list",
          choices: [1000, 5000, 10000],
          message: "Select The Amount You Want To Withdraw",
        },
      ]);
      myBalance -= fastCashAnswer.fastCash;
      console.log("Your Remaining Balance is : " + myBalance);
      console.log("Please Take Your Card");
      console.log("Please Collect Your Cash");
    }
  }
  console.log("Thank You For Using Bank Islami...!!!");
  
} else {
  console.log("Incorrect pin number...");
}

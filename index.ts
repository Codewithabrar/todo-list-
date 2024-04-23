#! /usr/bin/env node
import inquirer from "inquirer";
let todos=[];
let condition=true;
while(condition)
    {
 let todoQuestion=await inquirer.prompt(
    [
        {
    name:"firstQuestion",
    type:"input",
    message:"What would you like to add in your todos ?"
 },
 {
    name:"nextQuestion",
    type:"confirm",
    message:"would you add more",
    default:"true"
 }]);
 todos.push(todoQuestion.firstQuestion);
 condition=todoQuestion.nextQuestion;
 console.log(todos)
}

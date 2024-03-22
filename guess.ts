#! /usr/bin/env node
import inquirer from "inquirer";
let number=Math.floor(Math.random()*10)
let count=0;
let score=0
while(count<500){const usernumber=await inquirer.prompt(
    {message:"Enter any number between 1 to 10",name:"usernum",type:"number"});
    let num=usernumber.usernum
    let count=0;
   
   if(number==num){console.log("Congratulatio!You guessed right number")
   break
}
else{console.log("Try again")}}



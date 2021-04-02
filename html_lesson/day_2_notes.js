// To initiate a git repository
// git init
// staging files for a commit
// git status tells you the status of your repository

// Literals
// They represent values in JS that had been hardcoded

let butlerMascot = 'Buldog'
let myAge = 30 //this value has been hard coded
let arr = [] //this value is not hard coded

// Hoisting
/*
-General way of thinking about hard code creation and execution works in JS
-JS puts variable declarations  and function declarations into memory during compile phase of the code. 
This makes it feel that those are on top or loaded first.
*/

console.log(myName);
// variable declaration = variable value
var myName = "Paul" // let or const are not HOISTED, only functions and variables

sayHello();

function sayHello() {
    console.log("This is a function")
}
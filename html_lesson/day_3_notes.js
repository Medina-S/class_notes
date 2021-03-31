// Conditional statements - if, if else/else if, switch, ternary

// IF STATEMENTS
// Check for a boolean value, if something is true it is truthy (a truthy statement), or false
// Truthy - if condition is true or can be true
// Falsy - if condition is false or can be false
// Some falsy expressions are: null, NaN(not a number), 0, an empty string (" "), and undefined

// If condition is true, when JS will execute (perform) the code block
// If checks one, singular, condition

// Declare a variable
let isOpen = true;

// The condition to check is held in our ( )
if (isOpen === true) {
    // The code we perform if the condition is met is held in { }
    console.log('The door is open')
};

// Same as above, statement checks if the value in parenthesis is true
if(isOpen) {
    console.log('The door is open.')
}

//  Can test false values
if (isOpen === false) {
    console.log('the door is shut.')
}

// If else
// If else is used to check a condition, but run a code block for either the met condition or a 
// separate code block if it does not meet the condition

let isOpen = false;

if (isOpen === true){
    console.log ('you can go inside the door is open');
} else {
    console.log('The door is not open to enter');
}; 

let temp = 70;

if (temp >= 65) {
    console.log ('Wow what is the nice day');
} else {
    console.log ('I need a sweater')
}

// Else if 
// Else if is used to allow us to check more than two conditions
// Examples: Day 2 Challenge, Fizz Buzz Challenge

let temp = 68;

if (temp >= 80){
    console.log('I know peoplel are wearing shorts')
} else if (temp >= 65){
    console.log('This is t-shirt for most folks')
} else if (temp >= 50){
    console.log ("you are going to need a sweater")
} else {
    console.log('Im not leaving my house')
};

let userName = "myUsername";
let password = 'myPassword';

if (userName === "myUsername" && password === 'myPassword'){
    console.log(`Welcome back, ${userName}. You are logged in!`);
} else if (userName === "myUserName"){
    console.log('Your username is correct, but you have the wrong password')
} else {
    console.log('You are not in our database, would you like to sign up?')
};

// Switch statements
// Execute a block of code depending on the "cases"; condition met? check against the cases
// use case (condition):-starts code block
// break - to end the code
// Example: Fizz Buzz
// Default - code to be ran if no cases are met, good practice to have

let favColor = "green";

switch(favColor) {
    case 'blue':
        console.log('BLue like the sky');
        break;
    case 'red':
        console.log('Red like a rose');
        break;
    default:
        console.log(`${favColor} is beautiful too!`)
}

let doYouLikePizza = 'maybe';

switch (doYouLikePizza) {
    case 'yes':
    case 'yeah':
    case 'duh':
        console.log('Me too! I love pizza.');
        break;
    case 'no':
    case 'nope':
    case 'nah':
        console.log('Ohh... I will order something else for dinner');
        break;
    default:
        console.log ('I cannot tell if that is a yes or no')
    };

// TERNARY
// Concise way to check two or more conditions using that syntax of ? and :
// Structure:
// (condition) ? ( codeToRunIfTrue/Truthy ) : ( codeToRunIfFalse/Falsy )

let temp = 70;

// Ternary
(temp > 75) ? console.log('Indiana summer temps') : console.log('Indiana spring temps');

// Instead of:
if (temp > 75) {
    console.log('Summer');
} else {
    console.log('Spring')
};

let num = -55;

(num > 0) ? console.log('Positive number') : 
    (num < 0) ? console.log('Negative number') :
    console.log('Number is 0');

// for
for (i=0; i <= 20; i += 2){
    console.log(i);
}

// Printing each letter with a loop 
let word = "fantastic";

for (let i = 0; i < word.length; i++){
    // console.log(i); // printing the numerical index of the string 's letter
    console.log(word[i]); //square are used t get the letter itself (value of index)
}
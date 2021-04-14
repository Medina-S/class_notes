// Asynchronous JS Functions
/* 
    - async returns a Promise
    - await makes function wait for a Promise
*/
// async function asyncAction() {
//     setTimeout(() => {
//         console.log("Async finally hit yo!")
//     }, 3000);
// }

// asyncAction();

// function standardFunction (){
//     return console.log ("1 This is a standard function.");
// }

// standardFunction();

// async function asyncFunction() {
//     return console.log("2 This returns promise")
// }

// asyncFunction()

// async function asyncFunction() {
//     return console.log(Promise.resolve("This returns promise."))
// }

// Promise
/* Commit to something
    -completed -> resolved
    -rejected
*/

let p = new Promise((resolve, reject) => {
    let a = 1 + 1
    if (a === 2) {
        resolve("Promise successful and Resolved")
    }
})

p.then((message)=>{
    // anything inside .then is a resolve. Takes a fx with single parameter
    console.log(`This is the then ${message}`)
}).catch((message)=>{
    // anything inside .catch is a reject state
    console.log(`This is the .catch(). ${message}`)
})

function addNums (x, y){
    let sum = x + y;
    console.log(sum)
    return sum;
}

addNums(5,7)

let result1 = addNums(5,5)
let result2 = addNums (5,17)
document.querySelector(".result").innerText = result
document.querySelector(".result").innerText = result

let json = '{"age":30}'

try {
    let user = JSON.parse(json)
    if(!user.name){
        throw new SyntaxError ("Incomplete data: no name")
    }
} catch(e) {
    console.log (`JSON Error: ${e}`) //e.name or e.message for specifity
}


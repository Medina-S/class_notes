// arrays & Objects

// Array
/* high-level, list like object used to be traversed and mutated.
 -they uses integers as element index
 -arrays are zero index
 -can be accessed by bracket notation (index) or dot notation (method)
 -last object at array length - 1
*/

// Create an array

let british = ["Rolls Roys", "Bentley", "Catterham", "Aston Martin"];
console.log(british[0], british[1]);
console.log(british[british.length -1]);//logs the last element, "aston martin"
console.log(british[3]);

// Array methods

console.log(british.length)//return length of an array

british.push("Mini")//appends element to the end of an array

british.splice(0,2,"Jaguar", "Mazda")//index to start, how many items to be removed, what to replace with

let bReturn = british.pop();//removes the last index of an array, and will return it.
console.log(bReturn); //shows .pop() holding onto that item

british.unshift("Bentley", "Land Rover");
console.log(british);

british.shift();//remove start element of an array
console.log(british);

console.log(british.indexOf("Land Rover")); //searches an array for an index of element. Can add second param to select start index


console.log(british.includes("Land Rover")); //determines whether array has specific element . Can add second param to select start index.
// Return true or false

// Advanced array manipulations

let german = ["BMW", "Mersedes", "Audi", "Porshe", "Alpina", "VW"]

// for(cars of german){
//     console.log(cars)
// }

// array.forEach() runs a function for each element in an array
// takes a callback function inside as one of its parameters

german.forEach(car => console.log(car))
// same as (function(car){console.log(car)})

// array.map()-> transforms elements in original array by callback function
// and returns a new modified array

let germanUpperCase = german.map(car => car.toUpperCase())
console.log(germanUpperCase)

// array.filter -> creates new array with elements that pass the test in a given function

// creates an array with car element that start with letter "A"
let vowels = ["A"]
console.log(german.filter(car => car.startsWith(vowels)));

// or just

console.log(german.filter(car => car.startsWith("A")));

// Objects
/*Containers for values in a JSON format (JavaScript Object Notation)
  -exists as a string
  -has properies and methods
  -.property
  -.method()
  - associative arrays (each project is associated with a string value)
  */

//   define JS object with an object literal

let car = {
    // key: value pair (properties) that are comma separated
    make:"Porsha",
    model: "911",
    country: "Germany",
    driver: "Walter Rohl",
    association:{
        name: "Medina",
        lastName: "Syr",
    }
};

// Accessing object notations

console.log(car.make);  // access using a key
console.log(car["model", "country"]); // access using object key
let returnKeys = Object.keys(car); //this will print entire object
console.log(returnKeys);
console.table(car) // console.log a table of an object
console.log(car)

// Object property reassignment
car.make = "masouti";
car ['model'] = "grant";
console.log(car)
console.log(car.association.name) //to access nested objects within an object (think of a ladder)

// Object Constructor

let client = new Object;

client.firstName = "Paul";
client.lastName = "Nym";
client.birthYear = 1990;
console.log(client);

let manager = {
    firstName:"Brad",
    lastName: "Titus",
    birthYear: 1990,
//     calcAge: function(birthYear) {
//         return 2021-birthYear
//     }
// }
// console.log(manager.calcAge(1990))

// or second way 
//        calcAge: function(birthYear) {
//         return 2021-this.birthYear
//     }
// }
// console.log(manager.calcAge(1990))

    setAge:function() {    
        this.age = 2021 - this.birthYear //creates new age property with value of function calculation 
        //once it has been called
    }
}
manager.setAge()
console.log(manager.age)
//console.log("string") or console.log(var), logs/prints the string/value in the console window
// console.log("External JS wala console.")

// JS is dynamically typed language like python, means we don't have to define the data type during variable declaration, it will define it automatically according to the value stored inside the variable..
// This is not valid in C++, Java
// int num = 7;
// num = "shoaib";
// but, the above is valid in JS (with 'let' keyword only, it is not the case with 'var' keyword, See var v/s let keyword mdn,w3schools)
let num = 7;
num = "shoaib";
console.log(num);



// Data Types in JS (see w3schools, mdn)



// Operators (see w3schools, mdn)





// var vs let
// let-01
//declaration
// let myName = "love babbar";
// re-declaration
// let myName = "shoaib";
// Error, re-declaration is not allowed with 'let' keyword...

// let-02
//declaration
// let myName = "love babbar";
// re-initialization
// let myName = "shoaib";
// re-initialization is allowed with 'let' keyword...

// var-01
//declaration
// let myName = "love babbar";
// re-declaration
// let myName = "shoaib";
// Error, re-declaration is not allowed with 'var' keyword...

// var-02
//declaration
// let myName = "love babbar";
// re-initialization
// let myName = "shoaib";
// Error, re-initialization is not allowed with 'var' keyword...

// Reference Data Types (objects, arrays, functions)
// functions will study later
// JS Objects (JavaScript objects are containers for named values called properties)
let person = {
    firstName: "Shoaib",
    lastName: "Akhtar",
    age: 21,
    profession: "self employed"
};
// Accessing Properties of objects(using Dot Notation ' objectName.propertyName ')
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person.age);
// console.log(person.profession);
// Accessing Properties of objects(using square brackets ' objectName["propertyName"] ')
// console.log(person["firstName"]);
// console.log(person["lastName"]);
// console.log(person["age"]);
// console.log(person["profession"]);
// updation
// person.firstName = "love";
// person.lastName = "babbar";
// person['age'] = 24;
// console.log(person["firstName"]);
// console.log(person["lastName"]);
// console.log(person["age"]);
//adding properties
person.hobby = "sketching";
console.log(person);



// JS Arrays (since JS ek dynamically typed language hai to hum array mei koi bhi data type store kar sakte hai, this is not the case with arrays in C++/Java)
//declaring & initializing array
let car = ["Bugatti", "Mercedes", "BMW", "Maruti"];
// console log values one by one (check console)
// console.log(car[0]);
// console.log(car[1]);
// console.log(car[2]);
// console.log(car[3]);
// console.log(car[4]);

//printing values using loop

let i = 0;
do {
    console.log(carName[i]);
    i++;
} while (i <= 3);


// printing values 1 to 10 using do-while loop
let num = 1;
do {
    console.log(num);
    num++;
} while (num <= 10);
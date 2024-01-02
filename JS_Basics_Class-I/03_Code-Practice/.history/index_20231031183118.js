//console.log("string") or console.log(var), logs/prints the string/value in the console window
// console.log("External JS wala console.")

// JS is dynamically typed language like python, means we don't have to define the data type during variable declaration, it will define it automatically according to the value stored inside the variable..

// This is not valid in C++, Java
// int num = 7;
// num = "shoaib";

// but, the above is valid in JS
let num = 7;
num = "shoaib";
console.log(num);





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



// JS Arrays
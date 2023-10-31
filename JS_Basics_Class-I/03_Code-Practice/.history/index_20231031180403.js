// console.log("External JS wala console.")


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
person.firstName = "love";
person.lastName = "babbar";
person['age'] = 24;
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);
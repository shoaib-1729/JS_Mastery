// Checking for External JS file linking : ) -
// console.log("Shaadi Karle Saale!")

// Function Declaration (syntax)
// function functionName(parameters){

// function body


// }


// Function Call (before function declaration, koi error nhi aayegi ye C++ nhi hai JS hai)
// printCounting();


// Function Declaration (first way to define function)
// function printCounting() {

//     console.log("Counting.");

// }


// Function Call (after function declaration)
// printCounting();

// Print values from 1 to 10 using functions and for-in, for-of and forEach loops



// Function Calling before declaration
// run();
// Why this works? --> because of 'JS Hoisting' (refer mdn, w3schools)
// Hoisting is the process of moving function declaration to the top of the file, this is done automatically by 'JS Engine' which is responsible to execute the JS files


// Named Function Assignment (second way to define a function)
// function declaration is assigned to a variable here, and then function can be called using variableName()
// let stand = function run() {

//     console.log("Running.");
// }

// Normal function call after declaration
// run();

// Function calling after declaration using assigned variable
// stand();



// Assigning it to another variable
// let job = stand();
// job();



// Anonymous Function Assignment (this is the further extension of function assignment)
// Bass function name hata do, kyuki jab function ko variable mei assign kar rahe to function name ki kya zaroorat hai!


// function call cannot be done before the function assignment (JS Engine only shits function declaration to the top, not the function assignment it will remain here only during execution)
// this will give error (Cannot Access 'stand2' before initialization)
// stand2();

// let stand2 = function() {
//     console.log('Walking.');
// };
// Semi colon after function declaration is optional, generates no error.


// Function Call
// stand2();


// Function Declaration
// functional call --> pehle, baad mei

// Function Assignment
// functional call --> bas baad mei



// JS Dynamic Language
// let x = 'a';
// x = 15;
// console.log(x);


// Does functions are also dynamic in JS?
// Making normal sum function which returns the sum of the elements passed as a parameter.

// function sum1(a, b) {

//     return a + b;

// }
// Passing same number of parameters (=2) --> 3
// console.log(sum1(1, 2));

// Passing less number of parameters (<2) --> NaN (i.e. 'Not a Number' as, 1 + undefined = undefined)
// console.log(sum1(1));

// Passing greater number of parameters (>2) --> 3 (i.e. 1 assigns to 'a' anf 2 assigns to 'b', but what what happened with the remaining arguments 3,4,5? --> woh 'arguments' mei jaake store ho jaate hai, aage padhege!)
// console.log(sum1(1, 2, 3, 4, 5));


// Passing no parameters (=0) --> NaN (Why?)
// console.log(sum1());

// The above 'sum1' function is not dynamic, exact parameters pass karne par sahi result de raha hai, other cases mei galat result de raha hai

// Below is the concepts of 'arguments' that can be used to make this function dynamic


// arguments --> it is array like structure, which stores all the arguments passed in a particular function.
// Using 'arguments' to make the above 'sum' function dynamic, so that it can work with any number of parameters passed

// function sum2(a, b) {

// Assigning the variable for sum to 0
// let total = 0;
// Printing the Arguments passed in this function
// console.log(arguments);

// Making the sum function dynamic by fetching the values stored inside arguments
//     for (val of arguments) {
//         total += val;
//     }
//     return total;
// }


// (parameters = 2)
// console.log(sum2(1, 2));
// (parameters < 2)
// console.log(sum2(1));
// (parameters > 2)
// console.log(sum2(1, 2, 3, 4, 5));
// (parameters = 0)
// console.log(sum2());


// Rest Operator (...)
// this operator can be used to store arguments in the form of array

// This is diff. from spread operator (...), spread operator is used to concatenating arrays, copying elements of an array, whereas the rest operator is used for storing arguments in the form of array


// Working of Rest Operator(...)
// Type-01
// here, 'args' is k/a 'Rest Parameter'
// function sum(...args) {
//     console.log(args);

// }

// sum(1, 2, 3, 4, 5);

// Type-02
// Here, pehli value 1 'num1' wale parameter mei assign hogi aur dusri value 2 'num2' wale parameter mei assign hogi, baaki rest values 3,4,5 rest operator 'args' wale parameter mei assign hogi, isiliye iska naam rest operator pada hai
// function sum(num1, num2, ...args) {
//     console.log(args);

// }

// sum(1, 2, 3, 4, 5);

// Type-03
// This will generate an error "Uncaught SyntaxError: Rest parameter must be last formal parameter" i.e. we cannot provide parameter rest operator (kyuki 'rest' ke baad kuch nahi aa sakta, baaki jtni bhi values bachi hogi woh rest wale parameter ko assign ho jaayegi...)
// function sum(num1, num2, ...args, num3) {
//     console.log(args);

// }

// sum(1, 2, 3, 4, 5);

// Default Parameter : ) -

// function interest(p, r, y) {

//     return (p * r * y) / 100;

// }

// Calling Function
// console.log("Simple Interest:");

// console.log("Passing all Parameters:");
// console.log(interest(1000, 10, 5));

// console.log("Passing less Parameters:");
// console.log(interest(1000, 10));

// In case, user kam arguments deta hai to it will return NaN i.e. wrong output 
// Is situation ko avoid karne ke liye we can use default arguments here 

// Writing interest function again, using default parameters

// Rule while writing default arguments --> agar kisi ek formal parameter ko default banate hai to uske aage ke saare variables ko default banana hoga 
// function interest(p, r = 10, y = 6) {

//     return (p * r * y) / 100;

// }
// console.log("Simple Interest with Default Parameters: ");


// Agar user arguments deta hai to woh use hoge, else nahi deta to default arguments use hoge (here; p=1000, r=10, y=6 years)
// console.log(interest(1000));
// here; p=1000, r=5(%), y=6(years)
// console.log(interest(1000, 5));
// here, p=1000, r=10(%), y=8(years)
// console.log(interest(1000, undefined, 8));




// Getter, Setter Methods

// let person = {
//     fName: "Love",
//     lName: "Babbar"
// };

// function to print full name

// function fullName() {
// returning values using Template Literal and placeholders (i.e. `` , $)
//     return `${person.fName} ${person.lName}`

// }

// Calling Function
// console.log(fullName());

// Problem with this function --> using this function wre can only get/fetch the value not update/set the value

// hence, to solve this getter, setter comes in
// getter method --> to access the properties
// setter method --> to mutate or update or set the properties

// Rewriting the object 'Person' using and defining the getter, setter properties (get and set are properties, defined in an object not methods)
// let person = {

//     fName: "Love",
//     lName: "Babbar",

// Getter Property to access the full name (refer mdn,w3schools for syntax)
// get fullName() {
//     return `${person.fName} ${person.lName}`;
// },
// Setter Method the set the name (refer mdn,w3schools for syntax)
// set fullName(name) {
// here name string is splitted into array using split() method on basis of spaces in between
// let parts = name.split(' ');
// Assigning the splitted values in the array into fName and lastName
// here, this refers to the current object
//         this.fName = parts[0];
//         this.lName = parts[1];

//     }
// };

// console.log("Accessing the get property to fetch the name: ")
// Accessing the get property (i.e. objectName.propertyName)
// console.log(person.fullName)

// This line will generate an error --> "person.fullName is not a function"
// console.log(person.fullName());


// console.log("Accessing the set property to set the name: ")
// Set the name
// person.fullName = 'Rahul Kumar';
// console.log(person.fullName);

// This line will generate an error --> "person.fullName is not a function"
// console.log(person.fullName('Rahul Kumar'))


// Error Handling in JS
// using Try and Catch

// Try, Catch Basics to keep in mind (refer docs for more info about error handling)
// jo statement mei error aa sakta hai --> put it in try block
// agar error nahi hoga --> try block will execute
// agar error hoga --> catch block will execute
// for, finally block (refer documentation)


// try {
//     console.log("Executing try block:");
// fullName mei string nahi pass karege to error aayega
// hence, this line will generate an error, catch block will execute
// person.fullName = 1;

// Passing string, no error in this case --> try block will execute
// person.fullName = "Rahul Kumar";



// } catch (e) {
//     console.log("Executing catch block:");
//     alert('You have not sent a String!')
// }


// Throwing custom error, khud ka error object banake throw karege (refer docs)


// Defining person object again, and throwing custom error in set method if value provided by the user is not a String

// let person = {

//     fName: 'Love',
//     lName: 'Babbar',

// get property
// get fullName() {
//     return `${person.fName} ${person.lName}`

// },


// set property
// set fullName(name) {

// Throwing custom error if 'name' does not belongs to 'String' class
// if (typeof name !== 'string') {
//     console.log("Inside if")
// Throwing custom error object (ye custom error message throw kaha hoga --> jaha se ise call kara hoga ...)
//     throw new Error("Not a String!");
// }
// if 'name' is a string then continue further operations
// console.log("Outside If");
// let parts = name.split(' ');
// this.fName = parts[0];
// this.lName = parts[1];
// console.log("Console this object:")
// console.log(this);
// }
// }



// try {

// This line wil generate an error since value is not a String --> catch block will execute
// This line will call set property with 'true' as argument (i.e. person.fullName(true))
// person.fullName = true;

// This will execute smoothly
// person.fullName = "Shoaib Akhtar";
// console.log(person.fullName);




// } catch (e) {
// the error generated will get stored in 'e' passed as a parameter beside catch keyword, then we will alert that error stored in 'e'
//     console.log(e);

// }




// Scopes (jeevankal ya life span of a variable is called Scope of the variable)

// let v/s var

// let --> ka scope block ke andar tak hota hai jahan par woh defined hota hai, us block ke bahar uska scope khatam ho jaata hai
// var --> ka scope us block tak (if defined inside a function) or that complete file (if not defined inside a function)



// Output Questions on Scopes: ) -
// Question No-1
// {

//     let a = 5;
//     console.log("Inside Block:");
// Print ho jaayega
// console.log(a);
// }
// Print nahi hoga
// console.log("Outside Block:");

// Question No-2
// function demo() {

// var a = 5;
// console.log(a);


// }
// demo();
// console.log(a);

// Question No-3
// if (true) {

//     let a = 5;
// }
// console.log(a);

// Question No-4
// if (true) {
//     var a = 5;
// }
// console.log(a);

// Question No-5
// for (let i = 0; i < 10; i++) {

// }
// console.log(i);

// Question No-6
// for (var i = 0; i < 10; i++) {

// }
// console.log(i);


// Question No-7 (this code snippet will work fine or not?)

// function a() {
//     const a = 5;
// }


// function b() {
//     const a = 5;
// }

// Question No-8 (this code snippet will work fine or not?)
// const a = 5;

// function xyz() {

//     const a = 5;

// }

// Question No-8 (this code snippet will work fine or not?)
// function a() {
//     const ab = 5;

// }
// const ab = 5;

// function b() {

//     const ab = 5;
// }


// Reducing an Array (refer mdn, w3schools)

let arr = [1, 2, 3, 4, 5];
let total = 0;

// Calculating 'sum' using for-of loop (for-in loop mei arr[val] likhege)
// for (val of arr) {

//     total += val;

// }
// console.log(total);


// poore array ko ek sum variable mei reduce karna hai --> Reducing an Array bolte hai
// Calculating 'sum' using reduce() method


let totalSum = arr.reduce(
    // Callback Function (Arrow Function)
    (accumulator, currentValue) => accumulator + currentValue, 0

);

console.log("Printing Array Sum using Reduce Method:")
console.log(totalSum);
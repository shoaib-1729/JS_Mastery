// alert("Let's learn JS");

//JS Objects (JS Objects are collection of properties and behaviour, behaviours are defined using functions)

//Creating Rectangle Object

// let rectangle = {

//     length: 1,
//     width: 2,
// functions declared inside the object is called "method"
//     draw: function() {

//         console.log("Drawing Rectangle.");

//     }
// };

//Accessing properties (using Dot Notation)
// console.log(rectangle.length);
// console.log(rectangle.width);
// rectangle.draw();


// Multiple Object Creation --> How?

// 1. Factory Function (factory for creation of objects)


// function createRectangle() {

// it will return your rectangle object
// creating 'rectangle' object definition
// const rectangle = {
//     length: 1,
//     width: 2,
//     draw() {
//         console.log("Drawing Rectangle.");
//     }
// };
//returning 'rectangle' object once called
// return rectangle;
// }


// creating diff. objects from factory function
// let rectangleObj1 = createRectangle();
//createRectangle() object return karega, jo variable mei assign ho jaayega

// Accessing properties and behaviour of objects using variable
// Accessing Properties
// console.log("Properties called: ) -");
// console.log("Length: " + rectangleObj1.length);
// console.log("Width: " + rectangleObj1.width);
// Accessing Behaviours or Methods
// console.log("Methods called: )- ")
// rectangleObj1.draw();


//factory function with parameter (that will create a shape given as a parameter)
// with parameters
function createShape(name) {
    // this will return as object, no need of providing name
    return {
        // assigning the value 'name' to variable
        name: name,
        work: function() {
            console.log(name + " Created.")

        }
    };
}

// taking shape as input from user
let shapeName = "Circle";
// creating objects
let createShapeObj1 = createShape(shapeName);
//calling method using variable
createShapeObj1.work();


// Constructor Function (initializes the current object)
// Constructor Function will not return anything!
//Pascal Notation is followed  in naming of Constructor function (i.e. first letter of every word will be capital.)


function Rectangle() {

    // this keywords current object ko bind karta hai, isse hum current object ko initialize kar sakte hai
    // Initializing current object properties
    this.length = 1;
    this.breadth = 2;
    // Initializing current object Methods
    this.draw() = function() {

        console.log("Drawing rectangle.");

    }

}

// Constructing Objects using Constructor Function
// Jab object create hoga, tabhi constructor call hoga, 'new' keyword reference hai rectangleObject hai jo initially ek empty object hai!
let rectangleObject = new Rectangle();
console.log(rectangleObject);
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
// function createShape(name) {
// this will return as object, no need of providing name
// return {
// assigning the value 'name' to variable
//         name: name,
//         work: function() {
//             console.log(name + " Created.")

//         }
//     };
// }

// taking shape as input from user
// let shapeName = "Circle";
// creating objects
// let createShapeObj1 = createShape(shapeName);
//calling method using variable
// createShapeObj1.work();


// Constructor Function (initializes the current object)
// Constructor Function will not return anything!
//Pascal Notation is followed  in naming of Constructor function (i.e. first letter of every word will be capital.)


// function Rectangle() {

// this keywords current object ko bind karta hai, isse hum current object ko initialize kar sakte hai
// Initializing current object properties
// this.length = 1;
// this.breadth = 2;
// Initializing current object Methods
// this.draw = function() {

//     console.log("Drawing rectangle.");

// }

// }

// Constructing Objects using Constructor Function
// Jab object create hoga, tabhi constructor call hoga, 'new' keyword reference hai rectangleObject hai jo initially ek empty object hai!
// let rectangleObject = new Rectangle();
// console.log(rectangleObject);
// console.log(rectangleObject.draw());


// Making two rectangle objects using constructor function
// function Rectangle(len, br) {


//     this.length = len;
//     this.breadth = br;
//     this.draw = function() {

//         console.log("Drawing rectangle of len:" + this.length + ", width:" + this.breadth);

//     }



// }

// Creating multiple rectangle objects
// let rectangleObj1 = new Rectangle(6, 4);
// rectangleObj1.draw();
// console.log(rectangleObj1);
// let rectangleObj2 = new Rectangle(8, 2);
// rectangleObj2.draw();
// console.log(rectangleObj2);

// Which one to user for creating objects? (Depends on your needs)


// Dynamic Nature of Objects (i.e. additional & removal of properties of objects)
// function Rect() {

//     this.length = 3;
//     this.breadth = 1;
//     this.draw = function() {

//         console.log("Drawing Rectangle.");
//     }
// }

// adding new property to 'Rect' object
// let rectObj = new Rect();
// rectObj.color = "yellow";
// console.log("Property added.");
// console.log(rectObj);



//adding methods
// console.log("Method added.");
// rectObj.colorFill = function() {

//     console.log("Yellow color Filled.");
// };

// console.log(rectObj);
// console.log(rectObj.colorFill());


// since, objects are reference data types isiliye changes same address par hote hai, so don't run addition & deletion operation simultaneously (function is also an object,this we will see later in the code!)
// deleting property from 'Rect' object
// delete rectObj.length;
// console.log("Property deleted.");
// console.log(rectObj);



//Constructor Property (constructor is a property of objects)
// function Rectangle(len, br) {

//     this.length = len;
//     this.breadth = br;
//     this.draw = function() {

//         console.log("Drawing Rectangle.");
//     }
// }

// here Rectangle() is a constructor of objName (i.e. objName is initialized by Rectangle() constructor)
// let objName = new Rectangle(6, 2);
// console.log(objName.constructor);


//Since, function is also an object, then what is the constructor of Rectangle()
// 'Function' is the parent constructor of 'Rectangle' i.e. all the constructor will get inherited from this only!

// Internal Implementation of 'Function'
// Syntax Function("parameters of Rectangle", `code inside Rectangle`)
// Here Rectangle() constructor has been initialized by the Function constructor
// let Rectangle = new Function("len", "br",
//     ` this.length = len;
// this.breadth = br;
// this.draw = function() {

//     console.log("Drawing Rectangle.");
// }`);

// let objName = new Rectangle(5, 3);
// console.log(objName);



//Function is an Object
//Since, for eg. Rectangle() function ki apni kuch properties hai jaise ki length, breadth, name, etc aur apne kuch methods bhi hai jaise ki bind(), call(), apply(), draw(), etc hence functions as well are objects...


// Types of JS

// Primitive or Value Types (like Number, String, Boolean, Undefined, Null)
// Reference types or Object (like Arrays, Objects, Functions)


// Primitive data types v/s Reference Data types
// Primitive mei variables ki value ki copy pass hoti hai, yaani depend karega ki hum ki kismei change kar rahe hai original  variable mei ya uski copy mei...
// console.log("Primitive Types: )-")
// let a = 10;
// let b = a;
// a++;

// console.log("Value:" + a);
// console.log("value:" + b);


//Reference Data Types
//Reference mei variable ka reference (address) pass hota hai, yaani jo bhi changes hum karege woh usi same address pr hoge
// console.log("Reference Types: )-")

// let c = { value: 10 };
// let d = c;
// c.value++;

// console.log("Value:" + c.value);
// console.log("Value:" + d.value);




// One more example

//Primitive Type
// console.log("Primitive type: ) -")

// Function
// function inc_01(a) {
//     a++;
//     console.log("Inside function:" + a);

// }

// let a = 10;
// inc_01(a);
// console.log("Outside function:" + a);

//Reference Type
// console.log("Reference Type: ) -")

// function inc_02(c) {

//     c.value++;
//     console.log("Inside function:" + c.value);

// }
// let c = { value: 10 };
// inc_02(c);
// console.log("Outside function:" + c.value);



//Iterating through objects (for-of and for-in loop)

//for-in loop (used to iterate for (key,value) pairs in an object)

let rectangle = {
    // keys-- > length, breadth
    // value-- > 3,1
    length: 3,
    breadth: 1,
    sides: 4
};

// for-in loop syntax
// for (let key in rectangle) {

// key ko access --> key (eg. length, breadth)
// key ke corresponding uski values ko access --> objectName[property] (eg. 1,2)
//     console.log("key:" + key, "value:" + rectangle[key]);
// }

// for-of loop (only for iterables such as Arrays, strings, maps, etc)
// Not for objects, as objects are not iterables
// Iterables (used to iterate throughout the whole data in a data structure, loop counter we can say...)

// for-of loop (object) --> error

// this code will not work, as 'rectangle' is not an iterable
// for (let key of rectangle) {
//     console.log(key);
// }

// Print keys and value of an object using Object.keys(objectName) & Object.values(objectName)
// they return as arrays consisting of all possible values of keys & values resp.
console.log(Object.keys(rectangle));
console.log(Object.values(rectangle));

// hack to make for-of loop work with objects, just change 'rectangle' to 'Object.keys(rectangle)' so that it becomes iterable
for (let key of Object.keys(rectangle)) {

    console.log(key);
}


// How to check given prop/key exist or not?
console.log(rectangle);
if ('color' in rectangle) {

    console.log("Present");

} else {
    console.log("Absent");
}
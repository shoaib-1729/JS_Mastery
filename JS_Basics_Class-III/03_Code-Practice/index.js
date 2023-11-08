// In-built objects JS

// Maths class (mathematical object having some methods & properties for mathematical calculations, refer mdn for various methods in Maths class)
// some methods eg. Math.random(), Math.max(), Math.min(), Math,min(), Math.floor(), Math,round(), Math.pow() (refer mdn for more)

// Math.random() --> generates random number between 0(inclusive) & 1(exclusive)
// let randNum = Math.random();
// console.log(randNum);

//using random() method to generate random numbers between the range of two numbers 'min' & 'max'
// function getRandom(min, max) {

// Math.floor() returns the floor value (refer mdn for floor() vs round())
// return Math.floor((Math.random() * (max - min + 1)) + min);


// }

// let min = 10,
//     max = 15;
// console.log(getRandom(min, max));

//round() method
// let num1 = 0.06;
// console.log(Math.round(num1));

// let num2 = 1.9;
// console.log(Math.round(num2));


// max() & min() method
// max()
// console.log(Math.max(2, 3, 0, 87, 67));
// min()
// console.log(Math.min(-2, -90, 0, 872, 67));

// abs() --> returns the positive value (absolute value)
// console.log(Math.abs(2));
// console.log(Math.abs(-2));

// Math.PI
// console.log(Math.PI);

// Explore more methods (mdn)

// String class (In-built objects)
// String are of 2 types --> Primitive and Reference/Object

// Primitive String Declaration
// let firstName = 'shoaib';
// type of firstName --> string
// console.log(typeof firstName);

// Accessing characters in the string (just like array)
// console.log(firstName[4]);
// Using in-built string object method i.e. charAt(index)
// console.log(firstName.charAt(4));
// undefined, since index --> 0 to (len - 1)
// console.log(firstName[6]);
// Using in-built string object methods
// no character is returned in this case(empty string)
// console.log(firstName.charAt(6));

// includes() (returns boolean values)
// console.log(firstName.includes('oai'));
// console.log(firstName.includes('ahk'));

// replace() Method (refer mdn)
// console.log(firstName.replace('aib', 'bbit'));


//Primitive to Object Conversion (using dot notation eg. firstName.length)
// console.log(firstName);
// console.log(firstName.length);
// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());
// console.log(firstName.startsWith('oa'));
// console.log(firstName.endsWith('aib'));
// indexOf(char) (returns the index of the first occurence of the character, if not present returns -1)
// console.log(firstName.indexOf('z'));

// trim() Method (refer mdn, how to trim spaces in b/w the string?)
// Reference type String Declaration
// const str = new String("  A String Object   ");
// Before trim
// console.log(str);
// After trim
// console.log(str.trim());





// split() method (refer mdn)
// let message = "This is my first message.";
// this line separates message on the basis of ' ' (space)'
// console.log(message.split(' '));

// String to Array Conversion (refer mdn)



// Template Literal (refer mdn)
// suppose, I want to print message like this..
// "This
// is
// my
// first message"
// Using escape sequences to achieve the above output
// console.log("String Formatting using Escape Sequences.")
// let txt = "This\nis\nmy\nfirst message";
// console.log(txt);


// The Other Way (using Template Literal i.e. `` back tick, 1 ke left mei )
// Format string w/o using any escape sequences (jaisa likhoge waisa as it is print hoga, bss quote ki jagah back tick mei likhna hai..)
// console.log("String Formatting using Template Literal");
// let txt2 = `This
// is
// my
// first message`;
// console.log(txt2);

// Significance of $ (dollar sign) in JS (refer mdn)

// let mail = `Hello Shoaib,
// Thanks for the Opportunity.

// Regards,
// Love Babbar`;

// console.log(mail);

// making name dynamic ( using dollar sign to refer variables i.e. ${variableName} )
// using dollar sign as placeholders (refer mdn)


// let Name = "Elon Musk";
// let mail = `Hello ${shilpa_shetty},
// Thanks for the Opportunity.

// Regards,
// Shoaib Akhtar`;

// console.log(mail);


// Object Literal --> {key:value, key:value, ...}
// Numeric literal --> numbers
// String Literal --> "" or ''
// Boolean Literal --> true or false
// Template Literal --> `` back tick

// Date & Time (in-built object, refer mdn)

// this will print current date & time
// let date = new Date();
// console.log(date);

// this converts the given parameter in proper format
// let date2 = new Date('15 Sept 2001 7:15');
// console.log(date2);

// Date(year, month, date, hour), month will start from 0(Jan) to 11(Dec)
// let date3 = new Date(2001, 11, 9, 7);
// console.log(date3);

// Getter and Setter Method
// setter method --> to set the values | getter method --> to fetch/get the values

// get --> many methods, set --> many methods (explore)
// eg. setFullYear() to set the year, getFullYear() to get the year (refer mdn for more such getter and setter methods)



//Arrays (collection of items)

// Operations on Array
// Adding new element
// Finding element
//Removing element
// Splitting elements
// Combining elements
// Inserting elements

// Array Creation
// let numbers = [1, 4, 5, 7];
// console.log(numbers);

// Access Value (arrayName[index], index goes from 0 to len-1)
// Print the third element
// numbers[0] --> 1
// numbers[1] --> 4
// numbers[2] --> 5
// numbers[3] --> 7
// console.log(numbers[2]);
// undefined
// console.log(numbers[4]);


// Insertions (refer mdn)
// End --> [1,4,5,7,9] --> numbers.push(9)
// Begin --> [8,1,4,5,7,9] --> numbers.unshift(8)
// Middle --> Insert 'a', 'b', 'c' at index 2 i.e. [8,1,'a','b','c',4,5,7,9] --> numbers.splice(indexStart, number_of_elements_to_delete,elements_to_insert )
// i.e. to achieve the above o/p : numbers.splice(2, 0, 'a', 'b', 'c') [refer splice mdn]

// splice, unshift, push operations --> return the length of array after performing the operation(s)

// Searching in array
// [1,4,5,7]

// Using indexOf(element) [returns index if present, -1 if absent]
// indexOf(7) --> 3, indexOf(4) --> 1, indexOf(9) --> -1 (not present)

// Element to find in the array (key element)
// numbers --> [1,4,5,7]
// strict equality checks for value as well as data type, same applies for strict inequality
// == (equality); === (strict inequality); != (inequality) ; !== (strict inequality)
// why not loop is used here jaisa linear search par karte hai?
// let key = 7;
// if (numbers.indexOf(key) !== -1) {

//     console.log(key + " is Present at index " + numbers.indexOf(key) + '.');

// } else {
//     console.log("Key is Absent.");
// }

// But this is not the right way to search for an element in an array!
// instead use includes(element) --> returns true if element is present , else false
// numbers --> [1,4,5,7]
// let keyElement = 9;
// if (numbers.includes(keyElement)) {

//     console.log(keyElement + " is Present.");
// } else {
//     console.log(keyElement + " is Absent.");

// }


// Advance indexOf(element, index jahan se searching start hoga)
// numbers --> [1,4,5,7]
// since, 4 is not present from index 2 to end, hence it returns -1
// console.log(numbers.indexOf(4, 2));
// returns 2 here
// console.log(numbers.indexOf(5, 2));


// Self Paced Exercise start
// compute sum of two numbers using function, use pass by reference
// Sum of two numbers using function, using references (objects)
// let num1 = { value: 10 };
// let num2 = { value: 20 };

// function findSum(num1, num2) {

//     return num1.value + num2.value;

// }
// console.log("Sum using references is: " + findSum(num1 + num2));

// Sum of two numbers using function, using primitives
// let number1 = 10;
// let number2 = 20;

// function sumDedo(n1, n2) {
//     return n1 + n2;
// }
// console.log("Sum using Primitive is: " + sumDedo(number1, number2));
// Self Paced Exercise ends


// Searching in References

// Array of Objects (0i.e. items are objects)
// let courses = [
// Item-01 (index 0)
// { no: 1, name: "Data Structures" },
// Item-02 (index 1)
// { no: 2, name: "Web Development" },
// ];

// console.log(courses);

// Finding Item

// console.log(
// returns -1, "Not Found" (Why?)
//     courses.indexOf({ no: 2, name: "Web Development" })
// );

// Pehle values compare ho rahi thi primitive mei, lekin ab jab references ko compare karege to addresses compare hoge isiliye -1 return kar raha hai indexOf() kyuki woh is baar addresses compare karega, values nahi !
// eg, func1(){
// func2() --> callback function
// }
// then,how this can be solved? (using callback function)

//Callback functions (function that are being called inside another functions, bahar wala function agar andar wale par depend karega to us andar wale function ko callback function bolege)
// let course = courses.find(
// predicate function/callback function, it will return the object(course) which matches our requirements
//     function(course) {
//         return course.name == "Web Development";
//     }
// );

// console.log(course);


// Using Arrow Function
// This callback function can be shorten using Arrow function
// function(course) {
//         return course.name == "Web Development";
//     }

// Steps to write arrow function from callback function:)-
// 1. function keyword hatake (arrow) => lagao
// 2. agar function mei single parameter hai to () brackets hatado
// 3. agar function body mei single line of statement hai to return aur {} braces hata do

// After executing the above steps, Arrow function becomes --> course => course.name == "Data Structures"
// let course = courses.find(course => course.name == "Data Structures");

// console.log(course);

// Parameters & brackets in arrow function
// no parameters --> ()
// single parameter --> No brackets
// multiple parameters --> ()


// Removing elements from array

// let arr = [1, 2, 3, 4, 5, 6, 7];
// end
// arr.pop() returns the element removed
// console.log("Element removed: " + arr.pop());
// console.log("Array after pop operation:")
// console.log(arr);


// beginning
// arr.shift() returns the element removed
// console.log("Element removed: " + arr.shift());
// console.log("Array after shift operation:")
// console.log(arr);


// any specific item form the array
// arr.slice(index, no of elements you want to delete), it returns the element removed
// console.log("Element removed: " + arr.splice(2, 1));
// console.log("Array after slice operation:")
// console.log(arr);


// Emptying an Array
// let numbers = [1, 2, 3, 4, 5];

// Many ways:)-
// console.log('Emptying Array by pointing array to different memory location:');
// 1. numbers = [] (then 'numbers' variable will start pointing to diff. memory location, and the data gets deleted by Garbage Collector automatically)
// numbers = [];
// console.log(numbers);

// Problem with this approach :)
// Agar numbers kisi aur variable mei assign kar diya, to woh khaali nhi hoga array ke khaali hone par (kyuki ye reference type hai yaha address copy hua hai, aur original address par humne koi change nahi kara hia isiliye same show kar raha hai)
// let numbers2 = numbers;
// numbers = [];
// console.log(numbers);
// console.log(numbers2);


// What is the solution to this? (agar original address waali array khaali karde to problem solve ho jaayegi)
// console.log('Emptying Array using length property:');
// 2. numbers.length=0 (array ki length zero kardo, best approach with less complexity, minimum code lines and faster)
// numbers2 = numbers;
// numbers.length = 0;
// Ismei numbers, numbers2 dono khaali ho jaayegi (Why?)
// console.log(numbers);
// console.log(numbers2);

// 3. using splice() method, splice(0, arr.len) isse saare elements delete ho jaayege original array se kyuki 0 se array ki length tak chala diya hai!
// console.log('Emptying Array using splice operation:');
// console.log(numbers.splice(0, numbers.length));
// console.log(numbers);

// 4. using pop()
// console.log('Emptying Array using pop operation:');
// while (numbers.length > 0) {
//     console.log("Element removed:" + numbers.pop());
// }

// console.log(numbers);

// Combining and Slicing Arrays:

// Combining 2 arrays using concat()
// arr1.concat(arr2) this will concat arr2 in arr1 and returns the concatenated array
// let first = [1, 2, 3, 4, 5];
// let second = [6, 7, 8, 9, 10];

// let combined = first.concat(second);
// console.log(combined);



// Slicing (kaatna)
// arr.slice(start, end) --> it will remove the elements from index start(inclusive) to end(exclusive) and returns the elements removed

// let arr = [10, 20, 30, 40, 50, 60, 70, 80];
// let sliced = arr.slice(2, 6);
// console.log(sliced);
// slice() operator variations

// console.log("Slice operator Variation-01");
// slice(start) --> is same as slice(start, arr.length) i.e. it removes all the elements from start tp end of the array
// let sliced1 = arr.slice(2);
// console.log(sliced);

// console.log("Slice operator Variation-03");
//slice(end) --> is same as slice(0, end) i.e. it removes all the elements from start to end of the array)
// let sliced2 = arr.slice(8);
// console.log(sliced2);

// console.log("Slice operator Variation-04");
// slice() --> is same as slice(0, arr.length) i.e. it removes all the elements from start to end of the array)
// let sliced3 = arr.slice();
// console.log(sliced3);

// console.log("Slice operator Variation-04");
// slice(-start, -end) [start>end] --> for -ve indices counting will start from the end of the array, i.e. -1 will be the last element of the array, -2 will be the second last element of the array, etc.
// let sliced4 = arr.slice(-3, -1);
// console.log(sliced4);

// console.log("Slice operator Variation-05");
// slice(-start) or slice(-end)
// let sliced5 = arr.slice(-1);
// what output and why?
// console.log(sliced5);


// Combining --> Primitives (Done)
// Combining --> References

// let name1 = [
// Item-01 (object-01)
// { no: 1, naam: "Kilvish" },
// Item-02 (object-02)
// { no: 2, naam: "Shoaib" },

// ];


// let name2 = [
// Item-01 (object-01)
// { no: 1, naam: "Love Babbar" },
// Item-02 (object-02)
// { no: 2, naam: "Code with Harry" },
// ];

// let combined = name1.concat(name2);
// console.log(combined);



// Splice --> Primitives (Done)
// Splice --> References


// let names = [
// Item-01 (object-01)
// { no: 1, naam: "Kilvish" },
// Item-02 (object-02)
// { no: 2, naam: "Shoaib" },
// Item-03 (object-03)
// { no: 3, naam: "Love Babbar" },
// Item-04 (object-04)
//     { no: 4, naam: "Code with Harry" }

// ];

// console.log(names);
// removing single item
// let spliced = names.slice(2, 3);
// console.log(spliced);
// console.log(names);

// Spread Operator (...) --> for Combining
// let first = [1, 2, 3];
// let second = [4, 5, 6];

// let combined = [...first, ...second];
// console.log(combined);;

// Insertion while Combining (using spread operator)
// let combined2 = [...first, 'a', true, ...second, 'b', false];
// console.log(combined2);

// Copy using Spread Operator
// let arr1 = [10, 20, 30];
// let arr2 = [40, 50];
// let result = [...arr1, ...arr2];
// console.log(result);

// Copying result into another array
// let another = [...result];
// console.log(another);


// Spread Operator (...) --> for Slicing (refer mdn)

// Iterating an Array
// JS --> Difficult (No, bss JS practice mangta hai baaki Programming Lang. ki tarah)

// since for traversing an array we require iterables or loop counter, for Iterables we can use for-of loop
let newArr = [10, 20, 30, 40, 50];
// console.log("Traversing array using for-of loop:")
// for (let val of newArr) {

//     console.log(val);

// }

// console.log("Traversing array using for-in loop:")
// try , the same using for-in loop (see, what's the problem with this?)
// for (let val in newArr) {

//     console.log(val);

// }


// for-each loop (different syntax is there for for-each loop in JS as compared to other languages)
// console.log("Traversing array using for-each loop:")
// syntax : arr.forEach(callBack function) //callback function ye clear karega ki what you need to do with each element inside the array
// newArr.forEach(

// Callback Function (to print values inside array)
//     function(value) {
//         console.log(value);
//     }
// );


//Converting the above Callback function to Arrow function (using the steps mentioned above.)

// Arrow Function from the above Callback Function
// console.log("Arrow Function:");
// newArr.forEach(value => console.log(value));

// Joining Arrays

// Example-01 (joining array of numbers on the basis of ',')
let number = [1, 2, 3];
const joined = number.join(',');
console.log('Array after Joining:');
console.log(joined);

// Example-02 (joining array of strings on the basis of '_')
let message = ["This", "is", "my", "first", "message"];
const joined2 = message.join('_');
console.log('Array after Joining:');
console.log(joined2);

// Is reverse is possible? (i.e. we can split or not?)
// Splitting Array
console.log('Splitting String:');
let message2 = "This is my first message";
// split() --> returns an array after splitting on the basis of given parameter
const parts = message2.split(' ');
console.log(parts);
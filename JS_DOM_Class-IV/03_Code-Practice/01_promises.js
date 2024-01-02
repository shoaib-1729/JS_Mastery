// Task : demonstrate how promises works in js?

// article link (medium) :- https://kkirtigoel01.medium.com/promises-in-javascript-js-27baf0e506b5

// console.log('Promise 1:');
// creating a promise (promises are used to handle the asynchronous codes in  js, it promises to execute the async and returns the resolve (if the code executes successfully) or reject (in case there are some errors in tge async code ) status )
// let myPromise1 = new Promise(
// Callback function (2 arguments, one is for 'resolve' and the other is for 'reject')
// function(resolve, reject) {

//     console.log('Inside Promise');
// mark resolved status explicitly
// resolve("Async code is executed successfully");
// mark reject status explicitly
// resolve('Failed to execute the async code')
//     }
// );
// console.log(myPromise1);

// console.log("Outside Promise");return\\

// then() method in myPromise (refer mdn for promise methods)
// then() method can be used to execute the statements after promise has finished
// console.log('Promise 2:');
// myPromise1.then(
// callback function
// value => { console.log(value); }
// );


// async code inside promise

// let myPromise2 = new Promise(
// callback function
// function(resolve, reject) {
// console.log('Hi, I\'m Inside Promise-2');
// async code
// setTimeout(
// callback function
// function() {
//     console.log('Inside timeout');
// }, 5000);
// resolve("Resolved")
//         reject(new Error('Error Message'));
//     }
// );

// if promise was resolved, then then() will execute
// myPromise2.then(val => { console.log(val) })
// if promise was failed, then catch() will execute to handle the error
// myPromise2.catch(error => { console.log("Received an Error," + error); })

// handle both 'resolve' and 'reject' states using then()
// myPromise2.then(val => { console.log(val) }, error => {
//     console.log("Received an Error," + error)
// });


// Dealing with multiple promises using then() method (promises chaining)

// promise-1
// console.log('First Promise execution:')
// let promise1 = new Promise(
//     function(resolve, reject) {
//         console.log('Inside promise-1')
// async code
// setTimeout(function() {
//     console.log('promise-1 timeout executed')
// }, 5000);

// resolve status
//         resolve('promise-1 resolved')
//     })
// console.log(promise1);


// promise-2 (which executes after promise-1 has been resolved, hence using then() method to achieve this)
// console.log('Second Promise execution:')
// let promise2Res = promise1.then(
// callback of 'then'
// function() {
// make promise-2
// return promise2 = new Promise(
// // promise-2 callback
// function(resolve, reject) {
//     console.log('Inside promise-2');
// async code
// setTimeout(
// callback function
//                     function() {
//                         console.log('promise-2 timeout executed');
//                     }, 8000);
//                 resolve('promise-2 resolved');
//             });
//     }
// );
// console.log(promise2Res);
// promise2Res.then(value => console.log(value));


// what if, you want to execute 50 promises one after the other, in those situations 'promises bundling' will not be feasible to use
// there comes the concept of async-await, instead of promises bundling 'use async wait'
// console.log('Start')

// function returnPromise() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Promise executed...')
//             resolve('fetched the data')
//         }, 3000);
//     });
// }
// console.log(returnPromise().then(val => { console.log(val) }));

// console.log('End');

// function executionFunction() {
//     var data = 'Mayank';
// var getData = returnPromise()

//     console.log(data);
// }

// console.log(executionFunction());
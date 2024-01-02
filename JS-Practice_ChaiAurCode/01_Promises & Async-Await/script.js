// console.log('js is executing.')

// Different Syntax for Promises

// First Syntax (beginner friendly syntax)
// console.log('Start');

// Creating Promise
// const promiseOne = new Promise(function(resolve, reject) {
//   async code
// DB request, cryptography, network/api calls, files access (kernal)
//     setTimeout(function() {
//         resolve('Async Task 1 is completed.')
//     }, 1000);
// });
// console.log('End');

// console.log(typeof promiseOne);
// Consuming Promise
// promiseOne.then(function() {
//     console.log("Promise Consumed.");
// })

// Second Syntax (without storing it in a var, directly return that promise and apply then() via chaining.)
// new Promise(function(resolve, reject) {
// async code
//     setTimeout(function() {
//         console.log('Async Task 2')
//     })
// }).then(function() {
//     console.log("Async Task 2 Resolved.")
// })


// Third Syntax (returning object from a promise in resolve())
// Creating a Promise
// const promiseThree = new Promise(function(resolve, reject) {
// async code
//     setTimeout(function() {
//         resolve({ username: "Chai", email: "code@example.com" })
//     }, 1000)
// })

// Consuming a Promise
// promiseThree.then(function(user) {
//     console.log(user);
// })


// Fourth Syntax (handling error in promise using then() and catch() and promise chaining using then() )

// Creating a Promise
// const promiseFour = new Promise(function(resolve, reject) {
// async code
// setTimeout(function() {
// then chalega
// let isError = true;
// catch chalega
//         let isError = true;
//         if (!isError) {
//             resolve({ username: "Chai", email: "code@example.com" });
//         } else {
//             reject("ERROR: Something went wrong.");
//         }
//     }, 1000)
// })

// Consuming a Promise
// promiseFour
// then for handling if promise is resolved
// .then((user) => {
// print the object, fetched from database (practical use-case of promise chaining)
// console.log(user);
// if you want an specific property from the object (if then returns something, phir woh return kisko karega aur woh value handle kaha par hogi? , the answer is ek aur then lagakar us value ko handle karege, this is called promise chaining, since then returns a promise isiliye then par ek aur then laga sakte hai jisse promise chaining hoti hai)
//     return user.name;
// })
// then for handling if promise is rejected (in case of any errors)
// .catch(function(error) {
//     console.log(error);
// })


// Fifth Syntax (using async-await)
// const promiseFive = new Promise(function(resolve, reject) {
// async code
// setTimeout(function() {
//     let isError = false;
//     if (!isError) {
// may be these objects are fetched from the database
//             resolve({ username: "javascript", password: "123" })
//         } else {
//             reject('ERROR: JS went wrong.')
//         }
//     }, 1000)
// })

// consuming promises using async-await rather than then() and catch()

// async function consumePromise() {
// errors can't be handled using async-await, we have to use the try and catch block to handle errors
//     try {
//         const response = await promiseFive;
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }

// }

// calling the function
// consumePromise();

// Sixth Syntax (Handling Promise while using fetch)

async function getApiRequest() {
    // handling fetch using async await (fetch returns a promise)
    try {
        // api call ka response aane mei time lagega, isiliye 'await' lagao
        const response = await fetch('http://jsonplaceholder.typicode.com/users');
        console.log(response);
        // convert the data into object
        // api response ko json mei convert karne mei bhi time lagega isiliye 'await' lagao
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("E: " + error);
    }

}
getApiRequest();


// doing the same thing with promises
// since fetch returns a promise, we have to just consume the promise using then()

// fetch('http://jsonplaceholder.typicode.com/users')
//     .then((response) => {
//         let data = response.json();
// the data returned in response.json can be handled using another then()
//     return data;
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error)
// })
// task: to demonstrate the use of async-await
// article link (medium) :- https://medium.com/technofunnel/javascript-async-await-c83b15950a71

// await keyword use karege, jisse tabtak wait karega jab tak woh task ya code complete nahi ho jaata

// 'await' keyword humesha 'async' le saath use hota hai

// what is async?
// using 'async' keyword, hum synchronous code ko asynchronous bana sakte hai

// 'async' keyword example

// this is synchronous code
// function syncFunc() {
//     return ('sync function called')
// }
// function call
// let syncRes = syncFunc();
// console.log(syncRes);
// console.log('sync code-1');

// making this code asynchronous using 'async' keyword
// async function asyncFunc() {
//     return ('async function called.');
// async codes
//     document.addEventListener('click',
// callback function
//         function(e) { console.log(`${e.target} clicked.`) }
//     );
// }
// function call
// 'async' always return promises
// let promiseAsync = asyncFunc();
// console.log(promiseAsync);
// console.log('sync code-2');




// async and await
async function weather() {

    let delhiMausam = new Promise(
        // callback function
        (resolve, reject) => {
            // async codes
            setTimeout(
                () => { resolve('Delhi mei Thandi hai!') }, 5000
            )
        });

    let hydMausam = new Promise(
        (resolve, reject) => {
            // callback function
            setTimeout(
                () => { resolve('Hyderabad mei Garmi hai!'); }, 3000
            )
        });

    let dM = await delhiMausam;
    let hM = await hydMausam;

    return [dM, hM];

}

console.log(weather());
// Task 1 : start button pr click karke name aur current date print ho har1 sec baad aur stop button par click karne ke baad woh print hona ruk jaaye!
// Hint : use setInterval(), clearInterval(setInterval_Reference) [ refer clearTImeout(), clearInterval() along with setTimeout() and setInterval() resp., as they are imp for interviews ]
// const setName = function() {
//         console.log('Hitesh');
//         console.log(Date.now());
//     }
// declare globally, as we have to use this variable in different functions
// let intervalRef;
// document.querySelector('#start').
// addEventListener('click', () => {
//     intervalRef = setInterval(setName, 1000);
// })

// document.querySelector('#stop').
// addEventListener('click', () => {
//     clearInterval(intervalRef);
// })


// Task 2 (Small Project) : Start button par click karo to alag-alag background colors baar baar repeat ho, aur Stop Button par click karne par woh band ho jaaye!
let intervalRef2;
let color = ['red', 'blue', 'orange', 'violet', 'yellow', 'aqua'];
let len = color.length;

let setColor = function() {
    let index = Math.floor(Math.random() * len);
    console.log(index)
    let randColor = color[index];
    console.log(randColor)
    document.body.style.backgroundColor = randColor;
}

// set random color when button  is clicked
document.querySelector('#start').
addEventListener('click', () => {
    intervalRef2 = setInterval(setColor, 1000);
})
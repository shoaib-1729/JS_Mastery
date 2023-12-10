// Task : Demonstrate event phases i.e. event bubbling & event capturing with the help of sample code snippets

// Event Bubbling


// currentTarget v/s Target (refer docs)
// 'target' refer to the element jisne event ko target kiya hai, 'currentTarget' refers to the element jiska event listener run execute kar raha hai
// Event Handler Function (if, defined globally use 'currentTarget' instead of  'target' in eventObject, use 'target' if event handler function is defined locally)
function eventFunc(event) {
    console.log(`${event.currentTarget.id} called`);
}

// Adding event listeners to all the 3 div's
// By default, capturing phase is 'false', hence it will execute in Bubbling Phase or just pass the 3rd argument to 'false' in addEventListener() it wouldn't make any difference at all...

// This will be triggered during bubbling phase
// document.querySelector('#grandChild').addEventListener('click', eventFunc, false);

// This will be triggered during bubbling phase
// document.querySelector('#child').addEventListener('click', eventFunc, false);

// This will be triggered during bubbling phase
// document.querySelector('#parent').addEventListener('click', eventFunc, false);


// Event Capturing

// Event Capturing is just opposite to that of event bubbling, i.e. event capturing starts from top to bottom and in bubbling event is bubbled from bottom to top
// for event capturing phase to execute, pass the 3rd argument in addEventListener() to 'true'


// This will be triggered during capturing phase
document.querySelector('#grandChild').addEventListener('click', eventFunc, true);

// This will be triggered during capturing phase
document.querySelector('#child').addEventListener('click', eventFunc, true);

// This will be triggered during capturing phase
document.querySelector('#parent').addEventListener('click', eventFunc, true);
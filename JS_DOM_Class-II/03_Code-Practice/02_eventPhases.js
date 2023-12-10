// Event Handler Function
function eventFunc(event) {
    console.log(`${event.target.id} called`);
}

// Adding event listeners to all the 3 div's

// By default capturing phase is false, hence it will execute in Bubbling Phase
document.querySelector("#parent").addEventListener("click", eventFunc, false); // This will be triggered during bubbling phase
document.querySelector("#child").addEventListener("click", eventFunc, false); // This will be triggered during bubbling phase
document.querySelector("#grandChild").addEventListener("click", eventFunc, false); // This will be triggered during bubbling phase

// Add event listener to grandChild in capturing phase
document.querySelector("#grandChild").addEventListener("click", eventFunc, true); // This will be triggered during capturing phase

// Trigger a click event on the child element
document.querySelector("#child").click();
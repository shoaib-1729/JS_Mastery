// Task : When we click on any List item, make them hidden, and in case of anchor tag prevent its default action i.e. redirecting you to the link



// adding even listeners to each list item, then setting the style property to hide them is not optimal
//  instead, add event listeners to the 'ul' and then target each 'li' using 'tagName' property of event objects

// fetching the 'ul'
let ul = document.querySelector("#list");
let a = document.querySelector("a");


// event handler (event function, defining the function globally)
function eventFunc(event) {

    // accessing tags using 'tagName' property of event object
    if (event.target.tagName === 'LI') {
        console.log(`I have clicked on ${event.target.textContent}`);
        event.target.style.cssText = `display:none;`;
    }

    // Prevent Default Action of anchor tag using Prevent Default() method of event object (i.e. to redirect to tht link)
    if (event.target.tagName === 'A') {
        event.preventDefault();
    }
}

// adding the event listener to 'ul' item
ul.addEventListener('click', eventFunc);
a.addEventListener("click", eventFunc);


// Event objects properties and methods that are helpful :)-

// 1. target, tagName, nodeName, id, type
// 2. timeStamp, defaultPrevent(), stopPropagation(), toElement, srcElement
// 3. currentTarget, clientX, clientY, screenX, screenY
// 4. altKey, ctrlKey, shiftKey, keyCode (code)
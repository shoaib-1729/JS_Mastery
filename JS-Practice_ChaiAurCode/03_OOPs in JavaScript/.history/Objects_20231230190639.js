// functions are objects

function multiplyBy5(num) {
    return num * 5
}
// adding one more property to function using dot notation (works, if functions are objects)
multiplyBy5.power = 2

console.log(multiplyBy5(5));
// works, hence functions are objects (try to console log the function reference in browser)
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);
console.log(multiplyBy5);
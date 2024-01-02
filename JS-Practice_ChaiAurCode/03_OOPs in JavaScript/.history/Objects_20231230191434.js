// functions are objects

function multiplyBy5(num) {
    return num * 5
}
// adding one more property to function using dot notation (works, if functions are objects)
multiplyBy5.power = 2

// console.log(multiplyBy5(5));
// works, hence functions are objects (try to console log the function reference in browser and find the prototype property inside function, you will see that the proto of function will be an 'Object')
// console.log(multiplyBy5.power);
// {}, object literal
// console.log(multiplyBy5.prototype);


// Constructor Function

function createUser(username, price) {
    this.username = username;
    this.price = price;
}

// adding methods inside constructor function
createUser.increment = function() {
    this.price++;
}
createUser.printMe = function() {
    console.log(`Price is ${this.price}`)
}
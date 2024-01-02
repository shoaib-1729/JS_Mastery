// This Lecture :
// Object Literal {} (this keyword)
// Constructor function (new keyword)
// Instances (this, new)

// Next Lecture :
// Classes, Prototypes


// Object Literal

// creating objects & this keyword
const user = {
    username: "ChaiAurCode",
    logInCount: 10,
    signedIn: true,

    getUserDetails: function() {
        // console.log('Got user details from the Database.')
        // try to access username here
        // username is not defined, kyuki use pata nhi i kis username ki baat ho rahi hai
        // console.log(`Username: ${username}`);
        // get current context of username using 'this' keyword
        // console.log(`Username: ${this.username}`);
        // log 'this' here (inside functional execution context)
        // console.log(this);

    }

}

// console.log(user);
// Accessing properties
// console.log(user.username);
// Accessing Methods
// user.getUserDetails();
// log 'this' here (inside global execution context)
// you get an {} (empty object literal, kyuki koi global context mei kuch nhi hai)
// log 'this' in browser, window object milega (yaha empty object kyu mil raha?)
// console.log(this);



// Constructor Function
// agar user2, user3 bhi banana ho; to multiple objects banane ke bajaye ek constructor function bana lete hai, jismei basics propertires already defined rahegi jo saare objects mei common rahegi

// defining constructor function 
function User(username, logInCount, signedIn) {
    // 'this' ek empty object hai, usmei kuch bhi daal sakte hai
    this.username = username;
    this.logInCount = logInCount;
    this.signedIn = signedIn;

    // return this object after inserting the values
    return this;
}

const userOne = User("Hitesh", 10, true);
console.log(userOne);

const userTwo = User("ChaiAurCode", 8, false);
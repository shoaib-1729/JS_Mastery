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
        console.log('Got user details from the Database.')
            // try to access username here
            // username is not defined, kyuki use pata nhi i kis username ki baat ho rahi hai
            // console.log(`Username: ${username}`);
            // get current context of username using 'this' keyword
        console.log(`Username: ${this.username}`);
        // log 'this' here (inside functional execution context)
        console.log(this);

    }

}

// console.log(user);
// Accessing properties
// console.log(user.username);
// Accessing Methods
// user.getUserDetails();
// log 'this' here (inside global execution context)
console.log(this);
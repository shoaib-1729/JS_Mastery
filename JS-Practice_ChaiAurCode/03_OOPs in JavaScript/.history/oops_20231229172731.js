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
        console.log(username);

    }

}

console.log(user);
// Accessing properties
console.log(user.username);
// Accessing Methods
user.getUserDetails();
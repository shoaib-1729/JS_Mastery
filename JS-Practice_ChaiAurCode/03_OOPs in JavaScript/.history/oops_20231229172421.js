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
        console.log('Got user detaild from the Database.')
    }

}
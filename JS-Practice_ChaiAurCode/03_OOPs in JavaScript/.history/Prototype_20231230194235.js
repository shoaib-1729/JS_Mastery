// Injecting function
// let userName = "ChaiAurCode    ";
// console.log(userName.length);
// define a function, jismei actual length aaye, agar space ho to trim karke humei actual length de, ab baar baar trim() nhi karna chahte 
let userName = "ChaiAurCode    ";
// trueLength() method object mei kaise inject kr sakte hai?
// jismei actual value mile, space hata ke
// abhi ye function exists nhi karta
// console.log(userName.trueLength());


// Adding custom properties to objects 
let heroPower = {
        thor: "hammer",
        spiderMan: "sling",
        // method
        getSpiderPower: function() {
            console.log(`Spidy Power is ${this.spiderMan}`)
        }

    }
    // accessing method of object
heroPower.getSpiderPower()
    // defining custom method
Object.prototype.hitesh = function() {
    console.log(`Hello, hitesh here!`)
}

heroPower.hitesh();
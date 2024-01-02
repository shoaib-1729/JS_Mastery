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
    // defining custom method in 'Object' class (available in all objects)
Object.prototype.hitesh = function() {
    console.log(`Hitesh is present in all objects`)
}

heroPower.hitesh();

// Object mei defined properties, array mei bhi pass on hoti hai (kyuki Array, Strings, Functions sab object hi hai, object se hi inherit hote hai)
let myHeroes = ["thor", "ironMan"];
// try to access the custom Object property in arrays
myHeroes.hitesh()
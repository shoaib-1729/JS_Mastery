// Task :  Inject our Custom Function inside string , that can be accessed for any string value
// let userName = "ChaiAurCode    ";
// console.log(userName.length);
// define a function 'trueLength' jo har string ke liye kaam karei aur use 'stringName.trueLength()' karke access kar paaye, jismei actual length aaye, agar space ho to trim karke humei actual length de, hum har baar 'str.trim().length' nahi use karna chahte, aur ye sirf us particular string ke kaam karega hum chahte hai ki ye har string par kaam kare
// let userName = "ChaiAurCode    ";
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
    // heroPower.getSpiderPower()
    // defining custom method in 'Object' class (available in all objects)
Object.prototype.hitesh = function() {
    console.log(`Hitesh is present in all objects`)
}

// heroPower.hitesh();

// Object mei defined properties, array mei bhi pass on hoti hai (kyuki Array, Strings, Functions sab object hi hai, object se hi inherit hote hai)
let myHeroes = ["thor", "ironMan"];
// try to access the custom Object property in arrays (it works)
// myHeroes.hitesh();

// but, the reverse is not true (i.e. if yiu set custom property is 'Array' class, then it will not be available to objects)
Array.prototype.heyHitesh = function() {
    console.log('Hey, Hitesh!')
}

// works fine
// myHeroes.heyHitesh();
// works fine
// myHeroes.hitesh()
// works fine
// heroPower.hitesh();
// error (since, heyHitesh is a property of 'Array' class)
// heroPower.heyHitesh();

// Prototypical  Inheritance

const User = {
    name: "chai",
    email: "chaiGoogle@gmail.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
        makeAssignemnt: 'JS assignment',
        fullTime: true,
        // Inherit 'TeachingSupport' inside this object 
        // __proto__: TeachingSupport
    }
    // Inherit 'User' in Teacher Object
    // Teacher.__proto__ = User;

// Accessing Objects
// console.log(Teacher);
// console.log(TASupport)
// Accessing the inheritance object
// console.log(Teacher.__proto__);
// console.log(TASupport.__proto__)

// Accessing properties of inherited objects
// console.log(Teacher.__proto__.name);
// console.log(Teacher.__proto__.email);
// console.log(TASupport.__proto__.isAvailable)

// modern syntax for Prototypical Inheritance

// this inherits 'TeachingSupport' in 'TASupport' object
Object.setPrototypeOf(TASupport, TeachingSupport)
    // this inherits 'User' in 'Teacher' object
Object.setPrototypeOf(User, Teacher)

// Access properties of Teaching Support and Teacher,  using TASupport and User objects
// console.log(User.makeVideo);
// console.log(TASupport.isAvailable);


// Now, doing the above task
// let userName = "ChaiAurCode    ";
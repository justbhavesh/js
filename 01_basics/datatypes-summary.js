// primitive data types

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id == anotherId)  // false

//const bigNumber = 3456543576654356754n




//  Reference (Non primitive)

// Array, Objects, Function

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name:"Bhavesh",
    age:21,
}

// const myFunction = function(){
//     console.log("Hello World");
// }


// console.log(typeof bigNumber)
// consolelog(typeof scoreValue )




//+++++++++++++++++++++++++++++++

// Stack(primitive), Heap(Non-primitive)

let myYoutubename = "hiteshchoudhrydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(anothername);
console.log(myYoutubename);

let user = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);
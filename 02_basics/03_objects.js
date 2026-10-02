// singleton

// object literals
// Object.create

const mySym = Symbol("key1")

 const JsUser = {
    name: "Bhavesh",
    "full name": "Bhavesh Kumar",
    [mySym]: "mykey1",
    age:18,
    location:"Bhagalpur",
    email: "bhavesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "bhavesh@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "bhavesh@ms.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);

}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
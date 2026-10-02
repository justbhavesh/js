function sayMyName(){
    console.log("B")
    console.log("H")
    console.log("A")
    console.log("v")
}
// sayMyName()


// function addTwoNumbers(number1,number2){
//    console.log(number1 + number2);
// }
// // addTwoNumbers(3, 4)
// // addTwoNumbers(3, "4")
// // addTwoNumbers(3, "a")
// // addTwoNumbers(3, null)

// const result = addTwoNumbers(3,5)

// console.log("Result:",result);


function addTwoNumbers(number1,number2){
//    let result = number1 + number2
//    return result
    return number1 + number2
}
const result = addTwoNumbers(3,5)
// console.log("Result:",result);


// function loginUserMessage(username) {
//     return`${username} just logged in`
// }
// console.log(loginUserMessage("bhavesh"))
// console.log(loginUserMessage(""))
// console.log(loginUserMessage())



// function loginUserMessage(username) {
//     if (username === undefined){
//         console.log("Please enter a user name");
//         return
//     }
//     return`${username} just logged in`
// }
// // console.log(loginUserMessage("bhavesh"))
// console.log(loginUserMessage())



function loginUserMessage(username = "sam") {
    if (username === undefined){
        console.log("Please enter a user name");
        return
    }
    return`${username} just logged in`
}
// console.log(loginUserMessage("bhavesh"))


// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(20))



// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(200, 400, 500))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "bhavesh",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
console.log(returnSecondValue([200, 400, 100, 600]))
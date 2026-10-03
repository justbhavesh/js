// Immediately Invoked Function Expression (IIFE)


// function chai(){
//     console.log(`DB CONNECTED`);
// }
// chai()

(function chai(){
    console.log(`DB CONNECTED`);
}());     // yaha semicolon dena hoga

(() => {
    console.log(`DB CONNECTED TWO`)
})();



((name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})('bhavesh')

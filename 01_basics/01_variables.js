const accountId = 144553
let accountEmail = "bhavesh@google.com"
var accountPasssword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 2 // not allowed 

accountEmail = "abc@xyz.com"
accountPasssword = "121212"
accountCity = "Bengluru"


console.log(accountId);

/*
prefer not to use var
because of issue in block  scope and functional scope
*/
console.table([accountId,accountEmail,accountPasssword,accountCity,accountState])
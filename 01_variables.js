const accountId = 144553  // we can't change this value.
let accountEmail = "hitesh@google.com"   // we can change this value.
var accountPassword = "12345"
let accountCity = "Jaipur"
let accountState = "UP";

// accountId = 2 // not allowed / not change.


accountEmail = "yadavsumit0199@gmail.com"
accountPassword = "JAI SHREE RAM"
accountCity = "MUMBAI"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
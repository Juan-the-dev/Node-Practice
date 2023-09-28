// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

const firstName = getInput(1)
const lastName = getInput(2)
console.log('Hello' + " " + firstName + " " + lastName)
console.log('Hello' + " " + firstName.toUpperCase() + " " + lastName.toUpperCase() + ' This is your name capitalized')
console.log( firstName.charAt(0)+"."+ lastName.charAt(0) + ".")
console.log( firstName.charAt(0).toLowerCase()+ lastName.toLowerCase() + ".prsrv@gmail.com")




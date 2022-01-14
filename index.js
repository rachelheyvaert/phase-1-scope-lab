// Write your solution in this file!
var customerName = "bob";

// upperCaseCustomerName(): Write a function that accesses that global customerName variable, and uppercases it.
function upperCaseCustomerName() {
return customerName = "BOB";
}

// setBestCustomer(): Write a function that when called,
// declares a variable called bestCustomer in global scope and assigns it to be 'not bob'. 
//(Poor Bob.) Also, poor us, declaring a global variable from inside a function is one of those things we would never 
//want to do normally, but is good for us to explore right now.

function setBestCustomer() {
    return bestCustomer = "not bob";
}

// overwriteBestCustomer(): See the consequences of declaring a variable in global scope, 
// by writing a new function called overwriteBestCustomer() that changes that bestCustomer variable.

 function overwriteBestCustomer() {
     bestCustomer = 'maybe bob';
 }

 const leastFavoriteCustomer = 'tom'

 function changeLeastFavoriteCustomer() {
 leastFavoriteCustomer = 'jerry'
 }
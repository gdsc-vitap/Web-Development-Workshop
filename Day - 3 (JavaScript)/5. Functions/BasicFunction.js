/**
 * General Expression
 *      function
 * 
 * function fnName(input){
 *      body
 * }
 */

// Function Declaration
function capitalizeName(name){
    return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
}

// Function call
console.log(capitalizeName('unga'))

// Normal function declaration

// function capitalizeName(name){
//     return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
// }

// Arrow functions 

// const capitalizeName = function(name){
//     return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
// }

// const capitalizeName = (name) => {
//     return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
// }

//You can use these when you have only one parameter

    // const capitalizeName = name => {
    //     return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
    // }

    //When your function body has noting but just return statement 
    //then you can replace the function body with the return value

    const capitalizeName = name => `${name.charAt(0).toUpperCase()}${name.slice(1)}`
    
console.log(capitalizeName("ashu"))
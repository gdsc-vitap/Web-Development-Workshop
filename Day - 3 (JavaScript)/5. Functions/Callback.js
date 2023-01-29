
function greetUser(userName, callbackFn){
    return `Hi there, ${callbackFn(userName)}`
}

function capitalizeName(name){
    return `${name.charAt(0).toUpperCase()}${name.slice(1)}`
}

function addEmojis(name){
    return `${name} ٩(◕‿◕｡)۶`
}
console.log(greetUser('ashu',addEmojis))


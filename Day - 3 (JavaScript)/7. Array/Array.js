// -----------------------Declaring an array-----------------------
const names = ['Arthur Dent','Marvin','Trillian','Ford Perfect']

// ----------------Utilizing the values of an array----------------
console.log(names[0])

// ----------------------Array Destructuring----------------------
const [name1,name2] = names;

console.log(name2)


//--------------------------Push and Pop--------------------------
console.log(names)

names.push('Unga Bunga')

console.log(names)

names.pop()

console.log(names)


// ------------------------Array functions------------------------
const tempF = [ 98.2 , 99 , 96.5 , 98.9 , 97.6]

const toCelsius = function(f){
    let celsius = (f - 32) * 5/9
    return celsius;
}

const tempC = tempF.map(toCelsius);
console.log(tempF)
console.log(tempC)


/**
 * Some other array functions 
 * filter()
 * reduce()
 * some() / every()
 * find() / findIndex()
 * forEach()
 * slice()
 * concat()
 * includes()
 */

// Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
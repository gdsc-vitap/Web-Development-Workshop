const firstName = 'Unga'
const lastName  = 'Bunga'

const intro = "My name is Unga Bunga"

const intro_1 = "My name is "+ firstName + " " + lastName

const intro_2 = `My name is ${firstName} ${lastName}`

console.log(intro)
console.log(intro_1)
console.log(intro_2)


// --------------------------------------------------------

let price = 200
let discount = 15

const prompt = `Marked Price : ${price} 
Discount : ${discount}%
Discounted Price : ${price - (price*(discount/100))}`;

console.log(prompt)
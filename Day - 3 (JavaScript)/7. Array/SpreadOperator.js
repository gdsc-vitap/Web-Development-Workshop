// Note ** Arrays are passed by reference

const numbers = [1,2,3,4,5,6,7];
const numbers_2 = numbers;

console.log("number : " + numbers)
console.log("number_2 : " + numbers_2)
console.log("\n")

numbers_2.pop();
numbers_2.pop();

console.log("number : " + numbers)
console.log("number_2 : " + numbers_2)
console.log("\n")

const numbers_3 = [...numbers]

numbers_3.pop()

console.log("number : " + numbers)
console.log("number_2 : " + numbers_2)
console.log("number_3 : " + numbers_3)
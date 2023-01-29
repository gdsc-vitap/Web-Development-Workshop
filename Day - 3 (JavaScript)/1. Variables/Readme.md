# Hoisting

`Hoisting.js`
```js
console.log(userName)  // This will return undefined instead of error
console.log(user_Name) // will return error since the variable is not defined yet 
console.log(_userName) // will return error since the variable is not defined yet
// used to print on terminal/console

var userName = "bleep.bloop"

let user_Name = "bleep.bloop"

const _userName = "bleep.bloop"
```
This happens because while execution var declarations are moved to the top of the document.

`ExecutionHoisting.js`

```js
var userName

console.log(userName)  // This will return undefined instead of error
console.log(user_Name) // will return error since the variable is not defined yet 
console.log(_userName) // will return error since the variable is not defined yet
// used to print on terminal/console

userName = "bleep.bloop"

let user_Name = "bleep.bloop"

const _userName = "bleep.bloop"
```
<br>
<br>


# Block Scope

`BlockScope.js`

```js
var price = 20; 
const isSale = true;

if(isSale){
    var price = 18;
    console.log("Sale Price : ",price);
}

console.log("Marked Price : ", price);
```

Here we will get 18 as marked price, which is different from the value that we expected.

`ExecutionBlockScope.js`
```js
var price;
price = 20; 
const isSale = true;

if(isSale){
    price = 18;
    console.log("Sale Price : ",price);
}

console.log("Marked Price : ", price);
```
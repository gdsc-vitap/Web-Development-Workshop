let isSale = true ;
const price = 200;
const discount = 15;
let salePrice;

if(isSale === true){
    salePrice = price - ( price * (discount/100)); 
}
else if(isSale === false) {
    salePrice = price;
}
else{
    console.log("Invalid Input")
}

console.log(salePrice)


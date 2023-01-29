let isSale = true;
const price = 200;
const discount = 15;
let salePrice;

switch(isSale){
    case true: 
        salePrice = price - ( price * (discount/100));
    break;
    case false:
        salePrice = price;
    break;
    default:
        console.log('Invalid Input')
    break;
}

console.log(salePrice)


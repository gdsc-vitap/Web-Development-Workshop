let isSale = true;
const price = 200;
const discount = 15;
let salePrice;

salePrice = isSale == true ? price - (price * (discount/100)) : price ;

/**
 * General Expression for 
 *    Ternary Operator
 * condition : expression1 : expression2
 */

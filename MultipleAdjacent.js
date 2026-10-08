function digitMultiplication(expr) {

  let totalSum = 0;
  let currentSign = 1;
  let currentProduct = 1;

  for (let i = 0; i < expr.length; i++) {
    const char =expr[i];

    if (char === '+' || char === '-') {
      
      totalSum += currentSign * currentProduct;
      
      currentProduct = 1;
      currentSign = char === '+' ? 1 : -1;
    } else {
    
      currentProduct *= Number(char);
    }
  }

  
  totalSum += currentSign * currentProduct;

  return totalSum;
}
console.log(digitMultiplication("111+1111"));
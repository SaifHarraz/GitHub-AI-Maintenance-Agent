function calculateTotal(price, quantity,sale) {
  return price * quantity*(1-sale);
}

console.log(calculateTotal(100, 39,.4));

// Soln 1 using object
const calc = {
  add(a,b) {
    return a + b;
  },
  subtract(a,b) {
    return a-b;
  },
  multiply(a,b) {
    return a * b;
  },
  divide(a,b) {
    if (b == 0) { return "Division by zero"}
    return a/b;
  }
}

console.log(calc.add(1,3));   // just call obj's funcs like this.
console.log(calc.subtract(1,3));
console.log(calc.multiply(1,3));
console.log(calc.divide(1,0));
console.log(calc.divide(1,2));
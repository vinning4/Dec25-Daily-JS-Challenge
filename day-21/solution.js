// Soln 1 using loop
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(1));
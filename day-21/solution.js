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


// Soln 2 using recursive
function factorial2(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial2(num - 1);
}

console.log(factorial(4));
console.log(factorial(0));
console.log(factorial(1));
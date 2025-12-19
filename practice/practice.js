// Soln 1 with logic for array
function fb(arr) {
  const result = [];


  for (let num of arr) {
    if (num % 3 === 0 && num % 5 === 0) { result.push('fizzbuzz'); }
    else if (num % 3 === 0) { result.push('fizz'); }
    else if (num % 5 === 0) { result.push('buzz'); }
    else result.push(num);
  }
  return result;
}

console.log(fb([3,5,11, 15, 12, 10, 30]));

// Soln 2 one liner for single num
function fb2(num) {
  return num % 15 === 0 ? 'FizzBuzz' :
         num % 3 === 0 ? 'Fizz' :
         num % 5 === 0 ? 'Buzz' :
         num;
}

console.log(fb2(20));
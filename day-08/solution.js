// Soln 1 using for..of
function sumArray(arr) {
  let sum = 0;
  for (let item of arr) {
    sum += item;
  }
  return sum;
}

console.log(sumArray([]));
console.log(sumArray([-1,2,3]));

// Soln 2 using reduce
function sum(nums) {
  return nums.reduce((tot, num) => tot + num, 0);
}

console.log(sum([]));
console.log(sum([1,2,-4]));

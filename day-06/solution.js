//Soln 1 using Math.max to find largest num in array
function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([1, 2, -3]));

//Soln 2 using loop
function maxNum(nums) {

  if (nums.length === 0) return null;
  
  let max = nums[0];
  
  for (let num of nums) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}

console.log(maxNum([7, 8, 9]));
console.log(maxNum([]));

// Soln 3 using reduce 
function maxFinder(numbers) {
  if (numbers.length === 0) return null;
  return numbers.reduce((max, num) => num > max ? num : max);
}

console.log(maxFinder([]));
console.log(maxFinder([10,20,30]));
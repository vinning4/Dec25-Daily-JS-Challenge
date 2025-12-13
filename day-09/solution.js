// Soln 1 using filter
function evenNums(arr) {
    return arr.filter(num => num % 2 === 0);
}

console.log(evenNums([1,2,3, -4]));
console.log(evenNums([]));

//Soln 2 using loop
function evens(nums) {
  if (nums.length === 0) return nums;

  let evenArr = [];
  for (let num of nums) {
    if (num % 2 === 0) {
      evenArr.push(num);
    }
  }
  return evenArr;
}

console.log(evens([]));
console.log(evens([-6, 9, 8, 9, 8]));
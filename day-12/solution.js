// Soln 1 using loop for consecutive nums
function findMissing(arr) {
  if (arr.length == 0) return "Empty array!";

  for (let i = 1; i <= arr.length; i++) {
    if (!arr.includes(i)) return i;
  }
}

console.log(findMissing([1,3,4,5]));
console.log(findMissing([]));


// Soln 2 using sum of nums in array
function finder(arr) {

  if (arr.length == 0) return "Empty array!";
  
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  let tot = (arr[arr.length-1]) * (arr[arr.length-1] + 1) / 2;   // n * (n+1)/2 = tot where n = max num in arr.

  return (tot - sum);
}

console.log(finder([1,2,3,5]));
console.log(finder([]));
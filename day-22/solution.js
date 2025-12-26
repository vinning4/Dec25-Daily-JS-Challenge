function find(arr, target) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push([arr[i], arr[j]]);
      }
    }
  }
  return result;
}

console.log(find([1, 2, 3, 4, 5], 6));          // Expected: [[1, 5], [2, 4]]
console.log(find([1, 2, 3, 4, 5], 7));          // Expected: [[2, 5], [3, 4]]
console.log(find([1, 2, 3, 4, 5], 10));         // Expected: []


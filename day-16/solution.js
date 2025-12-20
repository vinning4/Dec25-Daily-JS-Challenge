// Soln 1 using arr.sort
function find(arr) {
  
  if (arr.length === 0) {return "Empty array"}

  const sorted = arr.sort((a, b) => b - a); // descending sort
  
  for (let i = 0; i < arr.length; i++) {
    if (sorted[i] !== sorted[0]) {
      return sorted[i];
    }
  }
  return sorted[0];
}

console.log(find([2, 2, 3, -7, 75, 90, 90]));
console.log(find([1,1,1]));
console.log(find([]));


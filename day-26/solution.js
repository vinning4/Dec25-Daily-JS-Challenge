// Soln 1 using loop
function chunk(arr, n) {
  if (arr.length === 0) return [];
  const result = [];

  for (let i = 0; i < arr.length; i += n) {
    result.push(arr.slice(i, i + n));
  }
  return result;
}

console.log(chunk([1,2,3,4,5], 2));
console.log(chunk([], 2));
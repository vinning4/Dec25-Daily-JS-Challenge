// Soln 1 using filter
function common(arr1, arr2) {
  const newArr = arr1.filter(item => arr2.includes(item));
  return [...new Set(newArr)];
}

console.log(common([1, 2, 3], [2, 3, 4]));
console.log(common([1, 2, 3], [4, 5, 6])); 
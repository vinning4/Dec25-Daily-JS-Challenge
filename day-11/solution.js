// Soln 1 using Set
function combine(arr1, arr2) {
  let merged = [...new Set([...arr1, ...arr2])];
  return merged;
}

console.log(combine([1,2,3], [3,4,5]));
console.log(combine([], [10, 20]));

//Soln 2 using loop
function join(arr1, arr2) {
  let result = arr1;

  for (let item of arr2) {
    if (!arr1.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

console.log(join([100, 200], [200, 300]));
// Soln 1 using filter
function remove(arr, num) {
  return arr.filter(item => item !== num);
}

console.log(remove([1,2,3], 3));
console.log(remove(['a', 'b', 'c'], 'c'));


// Soln 2 using loop
function removeElement(arr, num) {
  const newArr = [];
  for (let item of arr) {
    if (item !== num) {
      newArr.push(item);
    }
  }
  return newArr;
}

console.log(removeElement([1,2,3], 3));
console.log(removeElement(['a', 'b', 'c'], 'c'));
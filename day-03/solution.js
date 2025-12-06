/*
// Soln 1 using Set
const arr = [1, 2, 2, 3, 3, 3, 4];
let uniqueArr = [...new Set(arr)]; // ie uniqueArr = new Set(arr); then convert obj back to arr -> const newVar = [...uniqueArr] -> log newVar.
console.log(uniqueArr);


// Soln 2 using filter
const letters = ['a', 'b', 'c', 'c', 'c', 'd', 'a', 'b'];

function removeDuplicates(arr) {
  return arr.filter((ltr, index) => arr.indexOf(ltr) === index);
}

console.log(removeDuplicates(letters));
*/

// Soln 3 using loop without filter
const numbers = [1, 1, 2, 2, 3, 3];

function uniqueElements(arr) {
  let result = [];

  for (let item of arr) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

console.log(uniqueElements(numbers));

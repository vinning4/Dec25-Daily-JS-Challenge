// Soln 1 Object.keys(obj) to count keys in obj
function countProps(obj) {
  return Object.keys(obj).length;
}


console.log(countProps({name: "John", age: 30, city: "NYC"}));
console.log(countProps({a: 1, b: 2, c: 3, d: 4})); 
console.log(countProps({}));

// Soln 2 using loop
function keyCount(obj) {
  let count = 0;
  for (let val in obj) {
    count++;
  }
  return count;
}

console.log(keyCount({name: "John", age: 30, city: "NYC"}));
console.log(keyCount({a: 1, b: 2, c: 3, d: 4})); 
console.log(keyCount({}));

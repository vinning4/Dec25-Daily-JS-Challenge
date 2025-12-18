// Soln 1 using [].flat(Infinity)
function flatten1(arr) {
  return arr.flat(Infinity);
}

console.log(flatten1([1,2, [3,4, [5,6], ['a','b','c']]]));


// Soln 2 using loop/recursive func
function flatten2(arr) {
  const result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten2(item))
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flatten2([1,2, [3,4, [5,6]]]));
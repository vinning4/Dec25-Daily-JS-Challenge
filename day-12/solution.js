function findMissing(arr) {
  for (let i = 1; i <= arr.length; i++) {
    if (!arr.includes(i)) return i;
  }
}

console.log(findMissing([1,3,4,5]));
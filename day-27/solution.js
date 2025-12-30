// Soln 1 using loop

function title(str) {
  const smallWords = ["a", "an", "the", "and", "but", "or", "for", "nor", "on", "at", "to", "by", "in", "of"];

  let arr = str.toLowerCase().split(' ');

  for (let i = 0; i < arr.length; i++) {
    if (i == 0 || !smallWords.includes(arr[i])) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }
  }
  return arr.join(' ');
}

console.log(title('the quick and the dead'));
console.log(title('THE LORD OF THE RINGS'));
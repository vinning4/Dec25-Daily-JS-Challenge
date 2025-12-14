// Soln 1 using loop
function count(str, char) {
  let counter = 0;
  if (str.length === 0) return null;
  let lowerChar = char.toLowerCase();

  for (let ltr of str.toLowerCase()) {
    if (ltr === lowerChar) {counter++;}
  }
  return counter;
}

console.log(count('heLLo world', 'L'));
console.log(count('', 'a'));

//Soln 2 using filter
function countChars(str, char) {
  return str
  .toLowerCase()
  .split('')
  .filter(ltr => ltr === char.toLowerCase())
  .length;
}

console.log(countChars('tEsting fIlter', 'E'));
console.log(countChars('', 'v'));
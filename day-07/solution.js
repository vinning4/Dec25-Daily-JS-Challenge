// Soln 1 using for..of and string funcs
function capitalize(str) {         // eg. ['a good day']
  let words = str.split(' ');      // ['a', 'good', 'day]
  let capStr = [];                // empty array to collect capitalized words
  
  for (let word of words) {
    if(word) {          // checking edge case. blank space is falsy.
    capStr.push(word[0].toUpperCase() + word.slice(1).toLowerCase());
    } else {
      capStr.push(word);     // if blank space, collecting this too.
    }
  }
  return capStr.join(' ');
}

console.log(capitalize('a good day')); 
console.log(capitalize('double  space')); // keeps double space


// Soln 2 using map, chained funcs, single line. Common in React/modern JS.
function capEachWord(str) {
  return str
    .split(' ')
    .map(word => word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word)
    .join(' ');
}
console.log(capEachWord('Map double  space'))
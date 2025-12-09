// Soln 1 using for..of and .includes()
function countVowels(str) {
  let count = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  const strConverted = str.toLowerCase(); // no need .split('') at end coz strings are iterable.

  for (let letter of strConverted) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels('Hello world!')); // output: 3
console.log(countVowels("AEIOU")); //output: 5


// Soln 2 using Set and .has()
function vowelCounter(str) {
  const vowelSet = new Set(['a', 'e', 'i', 'o', 'u']);
  let counter = 0;

  for (let ltr of str.toLowerCase()) {
    if (vowelSet.has(ltr)) {    // .has() is faster than .includes()
      counter++;
    }
  }
  return counter;
}

console.log(vowelCounter('H is for Honda')); // output: 4
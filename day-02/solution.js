const longestWord = (str) => {
  let words = str.split(' ');
  let foundWord = '';
  for (let word of words) {
    if (word.length > foundWord.length) {
      foundWord = word;
    }
  }
  return foundWord.length;
}

console.log(longestWord('Quick fix'));
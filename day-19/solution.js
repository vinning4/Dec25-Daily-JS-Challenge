// Soln 1 using arr.reverse()
function reverse(str) {
  return str.trim().split(' ').reverse().join(' ');
}

console.log(reverse('   hey star  '));


// Soln 2 using loop
function rev(str) {
  const words = str.trim().split(' ').filter(word => word);
  let reversed = '';
  for (let j = words.length - 1; j >=0; j--) {
    reversed += words[j];
    if (j > 0) { reversed += ' ';} // adds space betw words until it reaches first word at i = 0.
  }
  return reversed;
}
console.log(rev('abc    >def'));

// Soln 3 using arr.unshift(word)
function rev2(str) {
  let words = str.trim().split(' ').filter(word => word);
  let reversed = [];
  for (let word of words) {
    reversed.unshift(word); // adds to front of queue
  }
  return reversed.join(' ');
}

console.log(rev2('used unshift'));
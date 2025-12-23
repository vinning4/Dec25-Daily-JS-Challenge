// Soln 1 using reverse
function reverse(str) {
  return str.trim().split(' ').reverse().join(' ');
}

console.log(reverse('   hey star  '));


// Soln 2 using loop
function rev(str) {
  const words = str.trim().split(' ').filter(word => word);
  let reversed = '';
  for (let i = words.length - 1; i >=0; i--) {
    reversed += words[i];
    if (i > 0) { reversed += ' ';} // adds space betw words until it reaches first word at i = 0.
  }
  return reversed;
}
console.log(rev('abc    >def'));
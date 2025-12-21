// Soln 1 using str.sort()
function isAnagram(str1, str2) {
  if (str1.length === 0 || str2.length === 0) { return "Empty string"; }
  if (str1.length !== str2.length) { return "Not anagram"; }
  
  let cleaned1 = str1.toLowerCase().split('').sort().join('');
  let cleaned2 = str2.toLowerCase().split('').sort().join('');

  if (cleaned1 === cleaned2) { return "Is anagram"; }
}

console.log(isAnagram('silent', 'listen'));

// Soln 2 one liner
function anagram(str1, str2) {
  return str1.toLowerCase()    // returns true or false
             .replace(/ /g, '')
             .split('')
             .sort()
             .join('')
             === str2.toLowerCase()
             .replace(/ /g, '')
             .split('')
             .sort()
             .join('');
}

console.log(anagram('ab cd', 'd acb')); // returns true
console.log(anagram('The eyes', 'They see'));
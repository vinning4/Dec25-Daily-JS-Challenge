# Day 4: Count Vowels

## Problem
Write a function that takes a string as input and returns the number of vowels (a, e, i, o, u) in that string. Count both uppercase and lowercase vowels.

## Examples
```javascript
countVowels("hello world")       // Returns: 3 (e, o, o)
countVowels("JavaScript")        // Returns: 3 (a, a, i)
countVowels("aeiou")             // Returns: 5
countVowels("AEIOU")             // Returns: 5
countVowels("xyz")               // Returns: 0
countVowels("The Quick Brown Fox")  // Returns: 5 (e, u, i, o, o)
countVowels("")                  // Returns: 0
```

## Hints
- Convert the string to lowercase first with `.toLowerCase()` so you don't have to check for both 'a' and 'A'
- Create an array of vowels: `['a', 'e', 'i', 'o', 'u']`
- Loop through each character in the string
- Check if the character is in your vowels array using `.includes()`
- You could use:
  - A `for` loop with a counter
  - `.filter()` to get all vowels, then check the `.length`
  - `.reduce()` to count as you go

## Bonus Challenge (Optional)
Return an object showing the count of each individual vowel!
```javascript
countVowelsDetailed("hello world")  
// Returns: { a: 0, e: 1, i: 0, o: 2, u: 0, total: 3 }
```
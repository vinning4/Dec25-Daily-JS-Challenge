# Day 10: Count Character Occurrences

## Problem
Write a function that takes a string and a character as input, and returns the number of times that character appears in the string. The search should be case-insensitive.

## Examples
```javascript
countChar("hello", "l")           // Returns: 2
countChar("hello", "o")           // Returns: 1
countChar("hello", "z")           // Returns: 0
countChar("Mississippi", "s")     // Returns: 4
countChar("JavaScript", "a")      // Returns: 2 (case-insensitive)
countChar("Programming", "g")     // Returns: 2
countChar("aaa", "a")             // Returns: 3
countChar("", "x")                // Returns: 0
countChar("Hello World", " ")     // Returns: 1 (spaces count too!)
```

## Hints
- Convert the string to lowercase first: `.toLowerCase()`
- Convert the character to lowercase too
- **Loop method:**
  - Loop through each character in the string
  - Count how many times it matches the target character
- **`.filter()` method:**
  - Split string into array: `.split('')`
  - Filter for matching characters
  - Return the length
- **`.reduce()` method:**
  - Accumulate a count as you loop
- You could also use a regular expression with `.match()`

## Edge Cases to Consider
- Empty string → return 0
- Character not in string → return 0
- Case sensitivity (make it case-insensitive)
- Spaces and special characters should work too

## Bonus Challenge (Optional)
Count occurrences of ALL characters in a string and return an object!
```javascript
countAllChars("hello")  
// Returns: { h: 1, e: 1, l: 2, o: 1 }
```
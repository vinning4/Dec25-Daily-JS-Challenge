# Day 7: Capitalize First Letter of Each Word

## Problem
Write a function that takes a string as input and returns a new string where the first letter of each word is capitalized (also known as "Title Case").

## Examples
```javascript
capitalize("hello world")               // Returns: "Hello World"
capitalize("javascript is awesome")     // Returns: "Javascript Is Awesome"
capitalize("the quick brown fox")       // Returns: "The Quick Brown Fox"
capitalize("i love coding")             // Returns: "I Love Coding"
capitalize("HELLO WORLD")               // Returns: "Hello World"
capitalize("a")                         // Returns: "A"
capitalize("")                          // Returns: ""
capitalize("  multiple   spaces  ")     // Returns: "  Multiple   Spaces  "
```

## Hints
- Split the string into an array of words using `.split(' ')`
- Loop through each word
- For each word:
  - Take the first character and make it uppercase: `word[0].toUpperCase()`
  - Take the rest of the word and make it lowercase: `word.slice(1).toLowerCase()`
  - Combine them: `word[0].toUpperCase() + word.slice(1).toLowerCase()`
- Join the words back together with `.join(' ')`

## String Methods You'll Need
- `.split(' ')` - Split string into array of words
- `.toUpperCase()` - Make a character uppercase
- `.toLowerCase()` - Make a string lowercase
- `.slice(1)` - Get substring from index 1 to end
- `.join(' ')` - Join array back into string

## Edge Cases to Consider
- Empty string
- Single character
- ALL CAPS words (should become "Title Case")
- Multiple spaces between words (should preserve them)

## Bonus Challenge (Optional)
Create a version that handles punctuation correctly!
```javascript
capitalizeAdvanced("hello, world!")  // Returns: "Hello, World!"
capitalizeAdvanced("it's a great day")  // Returns: "It's A Great Day"
```
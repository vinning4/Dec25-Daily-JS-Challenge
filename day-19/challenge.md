# Day 19: Reverse Words in Sentence

## Problem
Write a function that takes a sentence (string) as input and returns a new string with the order of words reversed, but each word itself remains unchanged.

## Examples
```javascript
reverseWords("Hello World")                  // Returns: "World Hello"
reverseWords("The quick brown fox")          // Returns: "fox brown quick The"
reverseWords("JavaScript is awesome")        // Returns: "awesome is JavaScript"
reverseWords("a b c")                        // Returns: "c b a"
reverseWords("one")                          // Returns: "one"
reverseWords("")                             // Returns: ""
reverseWords("  spaces   everywhere  ")      // Returns: "everywhere spaces" (trim extra spaces)
```

## Hints
- **Array reverse approach (Easiest):**
  1. Split sentence into array of words: `.split(' ')`
  2. Reverse the array: `.reverse()`
  3. Join back into string: `.join(' ')`
- **Manual loop approach:**
  - Split into words
  - Loop backwards through array
  - Build new string
- Watch out for extra spaces at start/end

## Steps
```javascript
"Hello World"
  ↓ .split(' ')
["Hello", "World"]
  ↓ .reverse()
["World", "Hello"]
  ↓ .join(' ')
"World Hello"
```

## Edge Cases to Consider
- Single word → return same word
- Empty string → return empty string
- Multiple spaces between words
- Leading/trailing spaces

## Bonus Challenge (Optional)
Reverse the words AND reverse each individual word!
```javascript
reverseWordsAndLetters("Hello World")  
// Returns: "dlroW olleH"
```
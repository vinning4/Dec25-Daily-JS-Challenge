# Day 2: Find the Longest Word

## Problem
Write a function that takes a sentence (string) as input and returns the length of the longest word in that sentence.

## Examples

longestWord("The quick brown fox")  // Returns: 5 (because "quick" and "brown" are 5 letters)
longestWord("Hello world")          // Returns: 5 (because "Hello" and "world" are both 5 letters)
longestWord("I love JavaScript")    // Returns: 10 (because "JavaScript" is 10 letters)
longestWord("May the force be with you")  // Returns: 5 (because "force" is 5 letters)


## Hints
- Split the sentence into an array of words using `.split(' ')`
- Loop through each word and check its length
- Keep track of the maximum length you've found
- You could use a `for` loop, `.forEach()`, or even `.reduce()`

## Bonus Challenge (Optional)
Instead of returning just the length, return the actual longest word itself!

longestWordString("The quick brown fox")  // Returns: "quick" or "brown"

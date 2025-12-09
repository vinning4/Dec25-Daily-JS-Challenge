# Day 5: Check if Palindrome

## Problem
Write a function that checks if a string is a palindrome. A palindrome is a word, phrase, or sequence that reads the same backward as forward (ignoring spaces, punctuation, and capitalization).

## Examples
```javascript
isPalindrome("racecar")           // Returns: true
isPalindrome("hello")             // Returns: false
isPalindrome("A man a plan a canal Panama")  // Returns: true
isPalindrome("Madam")             // Returns: true
isPalindrome("Was it a car or a cat I saw")  // Returns: true
isPalindrome("hello world")       // Returns: false
isPalindrome("12321")             // Returns: true
isPalindrome("")                  // Returns: true (empty string is a palindrome)
```

## Hints
- Convert the string to lowercase first
- Remove spaces and special characters (keep only letters and numbers)
  - You can use `.replace(/[^a-z0-9]/g, '')` to keep only alphanumeric characters
  - Or loop through and build a new string with only valid characters
- Compare the cleaned string with its reverse
- Remember Day 1? You already know how to reverse a string! 😉

## Approaches
1. **Reverse and compare:** Clean the string, reverse it, compare with original
2. **Two pointers:** Compare characters from both ends moving inward
3. **Loop halfway:** Check if first half matches second half (reversed)

## Bonus Challenge (Optional)
Check if a number is a palindrome without converting it to a string!
```javascript
isPalindromeNumber(12321)  // Returns: true
isPalindromeNumber(12345)  // Returns: false
```
# Day 17: Check if Anagram

## Problem
Write a function that checks if two strings are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of another word or phrase, using all the original letters exactly once (ignoring spaces and capitalization).

## Examples
```javascript
isAnagram("listen", "silent")           // Returns: true
isAnagram("hello", "world")             // Returns: false
isAnagram("The eyes", "They see")       // Returns: true (ignore spaces & case)
isAnagram("Dormitory", "Dirty room")    // Returns: true
isAnagram("abc", "cba")                 // Returns: true
isAnagram("abc", "abcd")                // Returns: false (different lengths)
isAnagram("aab", "bba")                 // Returns: false (different letters)
isAnagram("", "")                       // Returns: true
```

## Hints
- **Sort approach (Easiest):**
  - Clean both strings (lowercase, remove spaces)
  - Sort both strings
  - Compare if they're equal
- **Character count approach:**
  - Count frequency of each character in both strings
  - Compare if both have same character counts
- Steps to clean strings:
  1. Convert to lowercase: `.toLowerCase()`
  2. Remove spaces: `.replace(/ /g, '')` or `.split(' ').join('')`
  3. Remove special characters if needed: `.replace(/[^a-z]/g, '')`

## Understanding Anagrams
```
"listen" → letters: e, i, l, n, s, t
"silent" → letters: e, i, l, n, s, t
Same letters! ✅ Anagram

"hello" → letters: e, h, l, l, o
"world" → letters: d, l, o, r, w
Different letters! ❌ Not anagram
```

## Edge Cases to Consider
- Empty strings (both empty = true)
- Different lengths (automatically not anagrams)
- Same string (always anagram of itself)
- Spaces and capitalization (should be ignored)

## Bonus Challenge (Optional)
Find all anagrams of a word from an array of words!
```javascript
findAnagrams("listen", ["enlist", "google", "inlets", "banana", "silent"])  
// Returns: ["enlist", "inlets", "silent"]
```
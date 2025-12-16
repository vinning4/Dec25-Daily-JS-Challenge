# Day 12: Find Missing Number

## Problem
Write a function that takes an array of consecutive numbers with one number missing and returns the missing number. The array contains numbers from 1 to n, but one number is missing.

## Examples
```javascript
findMissing([1, 2, 4, 5])           // Returns: 3
findMissing([1, 2, 3, 4, 6])        // Returns: 5
findMissing([2, 3, 4, 5])           // Returns: 1
findMissing([1, 3, 4, 5, 6])        // Returns: 2
findMissing([1, 2, 3, 4, 5, 7, 8])  // Returns: 6
findMissing([2])                    // Returns: 1
```

## Hints
- **Math approach (Best):**
  - Calculate what the sum SHOULD be for consecutive numbers from 1 to n
  - Formula: `sum = n * (n + 1) / 2` where n is the highest number
  - Subtract the actual sum of the array from the expected sum
  - The difference is the missing number!
  
- **Loop approach:**
  - Loop from 1 to max number
  - Check if each number exists in the array using `.includes()`
  - Return the number that's missing
  
- **Sort and compare approach:**
  - Sort the array
  - Loop through and compare each number with the expected sequence

## Understanding the Math Formula
```javascript
// Sum of 1 to n: n * (n + 1) / 2
// Example: 1 + 2 + 3 + 4 + 5 = ?
// n = 5
// sum = 5 * (5 + 1) / 2 = 5 * 6 / 2 = 15
```

## Edge Cases to Consider
- Missing number is at the start (1 is missing)
- Missing number is at the end
- Array is not sorted
- Array with only one element

## Bonus Challenge (Optional)
Find ALL missing numbers in a sequence!
```javascript
findAllMissing([1, 3, 5, 7])  
// Returns: [2, 4, 6]
```
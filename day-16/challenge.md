# Day 16: Find Second Largest Number

## Problem
Write a function that takes an array of numbers and returns the second largest number in the array.

## Examples
```javascript
secondLargest([1, 5, 3, 9, 2])           // Returns: 5
secondLargest([10, 20, 30, 40])          // Returns: 30
secondLargest([7, 7, 7])                 // Returns: 7
secondLargest([100, 50, 75, 25])         // Returns: 75
secondLargest([5, 5, 5, 5, 4])           // Returns: 4
secondLargest([42, 42])                  // Returns: 42
secondLargest([3, 1])                    // Returns: 1
```

## Hints
- **Sort approach (Easiest):**
  - Sort the array in descending order
  - Return the element at index 1
  - Watch out for duplicates!
- **Two-pass approach:**
  - First pass: find the maximum number
  - Second pass: find the largest number that's less than the max
- **Single-pass approach (Most efficient):**
  - Keep track of both largest and second largest as you loop
  - Update them when you find bigger numbers

## Handling Duplicates
If the array is `[9, 9, 5, 3]`:
- Largest: 9
- Second largest: 5 (NOT 9, skip duplicates)

## Edge Cases to Consider
- Array with all same numbers → return that number
- Array with only 2 elements
- Array with duplicates of the max number

## Bonus Challenge (Optional)
Return both the largest and second largest in an object!
```javascript
findTopTwo([1, 5, 3, 9, 2])  
// Returns: { largest: 9, secondLargest: 5 }
```
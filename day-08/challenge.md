# Day 8: Sum All Array Elements

## Problem
Write a function that takes an array of numbers as input and returns the sum (total) of all the numbers.

## Examples
```javascript
sumArray([1, 2, 3, 4])          // Returns: 10
sumArray([10, 20, 30])          // Returns: 60
sumArray([5])                   // Returns: 5
sumArray([])                    // Returns: 0
sumArray([-5, 5, -3, 3])        // Returns: 0
sumArray([1.5, 2.5, 3])         // Returns: 7
sumArray([100, 200, 300, 400])  // Returns: 1000
```

## Hints
- **Loop method:** 
  - Start with `sum = 0`
  - Loop through each number and add it to sum: `sum += num`
  - Return sum
- **`.reduce()` method:**
  - Accumulate the total as you go
  - `arr.reduce((total, num) => total + num, 0)`
- Remember to handle empty arrays (should return 0)

## Edge Cases to Consider
- Empty array → should return 0
- Single number → should return that number
- Negative numbers → should still add correctly
- Decimal numbers → should work fine

## Bonus Challenge (Optional)
Create a function that returns the sum AND the average!
```javascript
sumAndAverage([1, 2, 3, 4, 5])  
// Returns: { sum: 15, average: 3 }
```
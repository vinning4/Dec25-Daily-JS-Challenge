# Day 6: Find Max Number in Array

## Problem
Write a function that takes an array of numbers as input and returns the largest (maximum) number in that array.

## Examples
```javascript
findMax([3, 7, 2, 9, 1])        // Returns: 9
findMax([15, 8, 23, 4])         // Returns: 23
findMax([-5, -2, -10, -1])      // Returns: -1
findMax([42])                   // Returns: 42
findMax([5, 5, 5, 5])           // Returns: 5
findMax([100, 200, 50, 300, 25]) // Returns: 300
```

## Hints
- **Easy way:** Use `Math.max()` with the spread operator: `Math.max(...arr)`
- **Manual way with loop:** 
  - Start by assuming the first number is the max
  - Loop through the rest of the array
  - If you find a bigger number, update your max
- **Using .reduce():** Accumulate the maximum value as you go

## Edge Cases to Consider
- What if the array is empty? (You could return `null` or `-Infinity`)
- What if all numbers are negative?
- What if there's only one number?

## Bonus Challenge (Optional)
Return both the maximum value AND its position (index) in the array!
```javascript
findMaxWithIndex([3, 7, 2, 9, 1])  
// Returns: { value: 9, index: 3 }
```
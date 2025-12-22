# Day 18: Remove Specific Element

## Problem
Write a function that takes an array and a value as input, and returns a new array with all instances of that value removed.

## Examples
```javascript
removeElement([1, 2, 3, 2, 4], 2)           // Returns: [1, 3, 4]
removeElement([5, 5, 5, 5], 5)              // Returns: []
removeElement([1, 2, 3], 9)                 // Returns: [1, 2, 3]
removeElement(['a', 'b', 'c', 'b'], 'b')    // Returns: ['a', 'c']
removeElement([1, 2, 3, 4, 5], 3)           // Returns: [1, 2, 4, 5]
removeElement([], 5)                        // Returns: []
removeElement([true, false, true], true)    // Returns: [false]
```

## Hints
- **Using `.filter()` (Easiest):**
  - Filter out elements that match the value
  - `arr.filter(item => item !== value)`
- **Manual loop approach:**
  - Create new empty array
  - Loop through original array
  - Only add items that don't match the value
- **Using `.reduce()`:**
  - Build new array, only including non-matching items

## Edge Cases to Consider
- Value doesn't exist in array → return original array
- All elements are the value → return empty array
- Empty array → return empty array
- Different data types (numbers, strings, booleans)

## Bonus Challenge (Optional)
Return an object with both the filtered array AND count of removed elements!
```javascript
removeWithCount([1, 2, 3, 2, 4], 2)  
// Returns: { result: [1, 3, 4], removed: 2 }
```
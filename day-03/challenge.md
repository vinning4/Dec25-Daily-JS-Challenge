# Day 3: Remove Duplicates from Array

## Problem
Write a function that takes an array as input and returns a new array with all duplicate values removed. Keep only the first occurrence of each value.

## Examples
```javascript
removeDuplicates([1, 2, 2, 3, 4, 4, 5])  // Returns: [1, 2, 3, 4, 5]
removeDuplicates([5, 5, 5, 5])           // Returns: [5]
removeDuplicates([1, 2, 3])              // Returns: [1, 2, 3]
removeDuplicates(['a', 'b', 'a', 'c'])   // Returns: ['a', 'b', 'c']
removeDuplicates([])                     // Returns: []
```

## Hints
- **Easy way:** Use a `Set` (it automatically removes duplicates!)
  - `new Set([1, 2, 2, 3])` creates a Set with unique values
  - Convert back to array with `Array.from()` or spread operator `[...]`
- **Manual way:** Use `.filter()` with `.indexOf()`
  - Keep items where their first occurrence matches their current position
- **Loop way:** Create a new empty array, check if each item already exists before adding

## Bonus Challenge (Optional)
Remove duplicates while preserving the original array (don't modify it) and count how many duplicates were removed!
```javascript
removeDuplicatesWithCount([1, 2, 2, 3, 4, 4])  
// Returns: { unique: [1, 2, 3, 4], removed: 2 }
```
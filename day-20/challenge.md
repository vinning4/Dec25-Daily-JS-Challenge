# Day 20: Find Common Elements

## Problem
Write a function that takes two arrays as input and returns a new array containing only the elements that appear in BOTH arrays (the intersection). Each element should appear only once in the result.

## Examples
```javascript
findCommon([1, 2, 3], [2, 3, 4])              // Returns: [2, 3]
findCommon([1, 2, 3], [4, 5, 6])              // Returns: []
findCommon(['a', 'b', 'c'], ['b', 'c', 'd']) // Returns: ['b', 'c']
findCommon([1, 1, 2], [1, 2, 2])              // Returns: [1, 2] (no duplicates)
findCommon([5, 10, 15], [10, 20, 15])         // Returns: [10, 15]
findCommon([], [1, 2, 3])                     // Returns: []
findCommon([1, 2, 3], [])                     // Returns: []
```

## Hints
- **Using `.filter()` and `.includes()` (Easiest):**
  - Filter arr1 to keep only items that exist in arr2
  - `arr1.filter(item => arr2.includes(item))`
  - Remove duplicates with Set
- **Using Set for fast lookup:**
  - Convert arr2 to a Set for faster checking
  - Filter arr1 using `set.has(item)`
- **Manual loop approach:**
  - Loop through arr1
  - Check if each item exists in arr2
  - Add to result if it does (and not already added)

## Edge Cases to Consider
- No common elements → return empty array
- One or both arrays empty → return empty array
- Duplicate values in input arrays → result should have no duplicates
- Arrays with different data types

## Bonus Challenge (Optional)
Find common elements across THREE arrays!
```javascript
findCommonThree([1, 2, 3], [2, 3, 4], [3, 4, 5])  
// Returns: [3]
```
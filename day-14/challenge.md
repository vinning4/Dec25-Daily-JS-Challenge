# Day 14: Flatten Nested Array

## Problem
Write a function that takes a nested (multi-level) array and returns a flattened (single-level) array containing all the elements.

## Examples
```javascript
flatten([1, [2, 3], 4])                    // Returns: [1, 2, 3, 4]
flatten([1, [2, [3, 4]], 5])               // Returns: [1, 2, 3, 4, 5]
flatten([[1, 2], [3, 4]])                  // Returns: [1, 2, 3, 4]
flatten([1, 2, 3])                         // Returns: [1, 2, 3] (already flat)
flatten([])                                // Returns: []
flatten([1, [2, [3, [4, [5]]]]])           // Returns: [1, 2, 3, 4, 5]
flatten([[[[1]]]])                         // Returns: [1]
```

## Hints
- **Easy way:** Use `.flat(Infinity)`
  - `.flat()` flattens one level by default
  - `.flat(Infinity)` flattens ALL levels no matter how deep
- **Recursive approach:**
  - Loop through each element
  - If element is an array, recursively flatten it
  - If element is not an array, add it to result
  - Check if something is an array: `Array.isArray(item)`
- **Using `.reduce()` with recursion:**
  - Combine reduce with recursive calls

## Understanding `.flat()`
```javascript
[1, [2, 3]].flat()           // [1, 2, 3] - flattens 1 level
[1, [2, [3]]].flat()         // [1, 2, [3]] - only 1 level
[1, [2, [3]]].flat(2)        // [1, 2, 3] - flattens 2 levels
[1, [2, [3, [4]]]].flat(Infinity)  // [1, 2, 3, 4] - flattens all levels
```

## Edge Cases to Consider
- Already flat array (no nested arrays)
- Empty array
- Deeply nested arrays (3+ levels)
- Array with mixed types (numbers, strings)

## Bonus Challenge (Optional)
Flatten an array but specify the maximum depth to flatten!
```javascript
flattenDepth([1, [2, [3, [4]]]], 2)  
// Returns: [1, 2, 3, [4]] - only flattens 2 levels
```
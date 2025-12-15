# Day 11: Merge Two Arrays

## Problem
Write a function that takes two arrays as input and returns a new array containing all elements from both arrays, with duplicates removed. The result should contain only unique values.

## Examples
```javascript
mergeArrays([1, 2, 3], [2, 3, 4])           // Returns: [1, 2, 3, 4]
mergeArrays([1, 2], [3, 4])                 // Returns: [1, 2, 3, 4]
mergeArrays([5, 5, 5], [5, 5])              // Returns: [5]
mergeArrays(['a', 'b'], ['b', 'c'])         // Returns: ['a', 'b', 'c']
mergeArrays([], [1, 2, 3])                  // Returns: [1, 2, 3]
mergeArrays([1, 2, 3], [])                  // Returns: [1, 2, 3]
mergeArrays([], [])                         // Returns: []
mergeArrays([1, 2, 2], [2, 3, 3])           // Returns: [1, 2, 3]
```

## Hints
- **Easy way using Set (Recommended):**
  - Combine both arrays: `[...arr1, ...arr2]`
  - Use Set to remove duplicates: `new Set([...arr1, ...arr2])`
  - Convert back to array: `[...new Set([...arr1, ...arr2])]`
- **Manual way with loop:**
  - Create a result array
  - Add all items from first array
  - Loop through second array, only add items not already in result
  - Use `.includes()` to check if item exists
- **Using `.concat()` and `.filter()`:**
  - Combine arrays with `.concat()`
  - Filter out duplicates

## Spread Operator `...`
The spread operator "spreads out" array elements:
```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];  // [1, 2, 3, 4, 5, 6]
```

## Edge Cases to Consider
- One or both arrays are empty
- Arrays with all duplicates
- Arrays with no overlap
- Arrays of different types (numbers, strings)

## Bonus Challenge (Optional)
Merge arrays and return an object with unique values AND the count of duplicates removed!
```javascript
mergeWithStats([1, 2, 2, 3], [2, 3, 4])  
// Returns: { merged: [1, 2, 3, 4], duplicatesRemoved: 2 }
```
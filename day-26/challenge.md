# Day 26: Chunk Array

## Problem
Split an array into smaller arrays (chunks) of a specified size.

## Examples
```javascript
chunk([1, 2, 3, 4, 5], 2)      // [[1, 2], [3, 4], [5]]
chunk([1, 2, 3, 4, 5], 3)      // [[1, 2, 3], [4, 5]]
chunk([1, 2, 3], 5)            // [[1, 2, 3]]
chunk([], 2)                   // []
```

## Hints
- Loop through array, add chunks of size n
- Use `.slice()` to extract chunks
- Increment loop by chunk size
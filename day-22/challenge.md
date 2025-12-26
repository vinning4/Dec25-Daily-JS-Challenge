# Day 22: Find Pairs That Sum to Target

## Problem
Write a function that takes an array of numbers and a target sum, and returns all unique pairs of numbers that add up to the target. Each pair should be returned as an array [smaller, larger].

## Examples
```javascript
findPairs([1, 2, 3, 4, 5], 6)          // Returns: [[1, 5], [2, 4]]
findPairs([1, 2, 3, 4, 5], 7)          // Returns: [[2, 5], [3, 4]]
findPairs([1, 2, 3, 4, 5], 10)         // Returns: []
findPairs([2, 7, 11, 15], 9)           // Returns: [[2, 7]]
findPairs([1, 1, 2, 3], 3)             // Returns: [[1, 2]]
findPairs([3, 3, 3], 6)                // Returns: [[3, 3]]
findPairs([5, 2, 8, 1, 9], 10)         // Returns: [[1, 9], [2, 8]]
findPairs([], 5)                       // Returns: []
```

## Understanding the Problem
```
Array: [1, 2, 3, 4, 5]
Target: 6

Check all pairs:
1 + 2 = 3 ❌
1 + 3 = 4 ❌
1 + 4 = 5 ❌
1 + 5 = 6 ✅ Found pair! [1, 5]
2 + 3 = 5 ❌
2 + 4 = 6 ✅ Found pair! [2, 4]
2 + 5 = 7 ❌
3 + 4 = 7 ❌
3 + 5 = 8 ❌
4 + 5 = 9 ❌

Result: [[1, 5], [2, 4]]
```

## Hints
- **Nested loop approach (Brute force):**
  - Loop through each number (outer loop)
  - Loop through remaining numbers (inner loop)
  - Check if they sum to target
  - Avoid duplicates by starting inner loop at i+1
- **Using Set for O(n) solution (Optimal):**
  - Loop through array once
  - For each number, calculate: complement = target - number
  - Check if complement exists in a Set
  - Add pairs to result, avoiding duplicates
- **Two-pointer approach (if array is sorted):**
  - Sort the array
  - Use two pointers (start and end)
  - Move pointers based on sum

## Edge Cases to Consider
- No pairs sum to target → return empty array
- Empty array → return empty array
- Multiple pairs → return all of them
- Duplicate numbers in array
- Same number can be used twice if it appears twice in array

## Bonus Challenge (Optional)
Find THREE numbers that sum to target (triplets)!
```javascript
findTriplets([1, 2, 3, 4, 5], 9)
// Returns: [[1, 3, 5], [2, 3, 4]]
```
# Day 21: Calculate Factorial

## Problem
Write a function that calculates the factorial of a number. The factorial of n (written as n!) is the product of all positive integers from 1 to n.

## Examples
```javascript
factorial(5)   // Returns: 120 (5 × 4 × 3 × 2 × 1)
factorial(0)   // Returns: 1 (by definition, 0! = 1)
factorial(1)   // Returns: 1
factorial(3)   // Returns: 6 (3 × 2 × 1)
factorial(7)   // Returns: 5040
factorial(10)  // Returns: 3628800
```

## Understanding Factorial
```
5! = 5 × 4 × 3 × 2 × 1 = 120
4! = 4 × 3 × 2 × 1 = 24
3! = 3 × 2 × 1 = 6
2! = 2 × 1 = 2
1! = 1
0! = 1 (special case by mathematical definition)
```

## Hints
- **Loop approach:**
  - Start with result = 1
  - Multiply by each number from 1 to n
- **Recursive approach:**
  - Base case: if n === 0 or n === 1, return 1
  - Recursive case: return n * factorial(n - 1)
- **Using `.reduce()`:**
  - Create array from 1 to n
  - Use reduce to multiply all numbers

## Edge Cases to Consider
- factorial(0) should return 1
- factorial(1) should return 1
- Negative numbers (factorials don't exist for negatives)

## Bonus Challenge (Optional)
Calculate factorial using memoization for better performance with repeated calls!
```javascript
const memoFactorial = memoize(factorial);
memoFactorial(5);  // Calculates and caches result
memoFactorial(5);  // Returns cached result instantly
```
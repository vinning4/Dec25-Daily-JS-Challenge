# Day 9: Filter Even Numbers

## Problem
Write a function that takes an array of numbers as input and returns a new array containing only the even numbers.

## Examples
```javascript
filterEvens([1, 2, 3, 4, 5, 6])       // Returns: [2, 4, 6]
filterEvens([10, 15, 20, 25, 30])     // Returns: [10, 20, 30]
filterEvens([1, 3, 5, 7])             // Returns: []
filterEvens([2, 4, 6, 8])             // Returns: [2, 4, 6, 8]
filterEvens([])                       // Returns: []
filterEvens([0, -2, -5, 8])           // Returns: [0, -2, 8]
filterEvens([11, 22, 33, 44])         // Returns: [22, 44]
```

## Hints
- A number is even if it's divisible by 2 with no remainder
- Use the **modulo operator** `%` to check: `num % 2 === 0`
- **`.filter()` method** is perfect for this:
  - It creates a new array with elements that pass a test
  - Syntax: `arr.filter(num => num % 2 === 0)`
- **Loop method:**
  - Create empty array
  - Loop through numbers
  - If number is even, push to new array

## Understanding Modulo (%)
```javascript
5 % 2   // Returns: 1 (remainder when 5 ÷ 2)
6 % 2   // Returns: 0 (no remainder, so 6 is even!)
7 % 2   // Returns: 1
8 % 2   // Returns: 0 (even!)
```

## Edge Cases to Consider
- Empty array → return empty array
- All odd numbers → return empty array
- All even numbers → return all numbers
- Negative even numbers → should be included
- Zero → is even (0 % 2 === 0)

## Bonus Challenge (Optional)
Create a function that returns an object with both even and odd numbers separated!
```javascript
separateEvenOdd([1, 2, 3, 4, 5, 6])  
// Returns: { evens: [2, 4, 6], odds: [1, 3, 5] }
```
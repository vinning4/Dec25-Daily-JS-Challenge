# Day 15: FizzBuzz

## Problem
Write a function that takes a number as input and returns:
- "Fizz" if the number is divisible by 3
- "Buzz" if the number is divisible by 5
- "FizzBuzz" if the number is divisible by both 3 AND 5
- The number itself (as a string) if none of the above

This is one of the most famous coding interview questions!

## Examples
```javascript
fizzBuzz(3)      // Returns: "Fizz"
fizzBuzz(5)      // Returns: "Buzz"
fizzBuzz(15)     // Returns: "FizzBuzz"
fizzBuzz(7)      // Returns: "7"
fizzBuzz(9)      // Returns: "Fizz"
fizzBuzz(10)     // Returns: "Buzz"
fizzBuzz(30)     // Returns: "FizzBuzz"
fizzBuzz(1)      // Returns: "1"
fizzBuzz(100)    // Returns: "Buzz"
```

## Hints
- Use the modulo operator `%` to check divisibility
- A number is divisible by 3 if: `num % 3 === 0`
- A number is divisible by 5 if: `num % 5 === 0`
- **IMPORTANT:** Check for FizzBuzz (divisible by both) FIRST!
  - If you check Fizz first, you'll never reach FizzBuzz
- Order matters:
  1. Check `num % 15 === 0` (or `num % 3 === 0 && num % 5 === 0`)
  2. Check `num % 3 === 0`
  3. Check `num % 5 === 0`
  4. Return the number

## Logic Flow
```javascript
if (divisible by both 3 and 5) return "FizzBuzz"
else if (divisible by 3) return "Fizz"
else if (divisible by 5) return "Buzz"
else return the number as string
```

## Edge Cases to Consider
- Number 0 (divisible by everything technically)
- Large numbers like 100, 150
- Numbers that are only divisible by one of them

## Bonus Challenge (Optional)
Generate the entire FizzBuzz sequence from 1 to n!
```javascript
fizzBuzzSequence(15)  
// Returns: ["1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz", "11", "Fizz", "13", "14", "FizzBuzz"]
```
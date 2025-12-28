# Day 24: Format Phone Number

## Problem
Write a function that takes a 10-digit phone number (as a string or number) and formats it as (XXX) XXX-XXXX. Handle various input formats and invalid inputs gracefully.

## Examples
```javascript
formatPhone("1234567890")       // Returns: "(123) 456-7890"
formatPhone(1234567890)         // Returns: "(123) 456-7890"
formatPhone("123-456-7890")     // Returns: "(123) 456-7890"
formatPhone("123.456.7890")     // Returns: "(123) 456-7890"
formatPhone("(123) 456-7890")   // Returns: "(123) 456-7890" (already formatted)
formatPhone("123 456 7890")     // Returns: "(123) 456-7890"
formatPhone("12345")            // Returns: null or "Invalid" (too short)
formatPhone("12345678901")      // Returns: null or "Invalid" (too long)
formatPhone("")                 // Returns: null or "Invalid"
```

## Understanding the Format
```
Input:  "1234567890"
Step 1: Extract digits only → "1234567890"
Step 2: Check length (must be 10)
Step 3: Split into parts:
  - Area code: "123"
  - Prefix: "456"
  - Line number: "7890"
Step 4: Format: "(123) 456-7890"
```

## Hints
- **Remove all non-digit characters first:**
  - Use `.replace(/\D/g, '')` to keep only digits
  - `\D` means "non-digit", `g` means "global"
- **Check if exactly 10 digits:**
  - If not, return `null` or error message
- **Extract parts using `.slice()`:**
  - Area code: digits 0-3
  - Prefix: digits 3-6
  - Line number: digits 6-10
- **Format with template literal:**
  - `(${areaCode}) ${prefix}-${lineNumber}`

## Regex Explanation
```javascript
const digits = str.replace(/\D/g, '');
// \D = any non-digit character
// g = global (replace all, not just first)

"123-456-7890".replace(/\D/g, '')  // "1234567890"
"(123) 456-7890".replace(/\D/g, '') // "1234567890"
```

## Edge Cases to Consider
- Input is already formatted correctly
- Input has letters or special characters
- Input is a number, not a string
- Input has too few or too many digits
- Empty string or null input

## Bonus Challenge (Optional)
Format with country code for international numbers!
```javascript
formatPhoneInternational("11234567890")
// Returns: "+1 (123) 456-7890"

formatPhoneInternational("441234567890")  // UK number
// Returns: "+44 (123) 456-7890"
```
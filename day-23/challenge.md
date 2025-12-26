# Day 23: Deep Clone Object

## Problem
Write a function that creates a deep copy (deep clone) of an object. A deep copy means that nested objects and arrays are also copied, not just referenced. Changes to the clone should NOT affect the original object.

## Examples
```javascript
const original = { name: 'John', age: 30 };
const clone = deepClone(original);
clone.name = 'Jane';
console.log(original.name);  // "John" (unchanged) ✅

const nested = { 
  name: 'Alice', 
  address: { city: 'NYC', zip: 10001 } 
};
const copy = deepClone(nested);
copy.address.city = 'LA';
console.log(nested.address.city);  // "NYC" (unchanged) ✅

const withArray = { 
  name: 'Bob', 
  hobbies: ['reading', 'coding'] 
};
const arrayClone = deepClone(withArray);
arrayClone.hobbies.push('gaming');
console.log(withArray.hobbies);  // ['reading', 'coding'] (unchanged) ✅
```

## Understanding Shallow vs Deep Copy

### Shallow Copy (Wrong for nested objects):
```javascript
const original = { name: 'John', address: { city: 'NYC' } };
const shallow = { ...original };  // Spread operator

shallow.name = 'Jane';           // ✅ Works fine
console.log(original.name);      // "John" (unchanged)

shallow.address.city = 'LA';     // ❌ Problem!
console.log(original.address.city);  // "LA" (CHANGED! Bad!)
// The address object is still referenced, not copied!
```

### Deep Copy (Correct):
```javascript
const deep = deepClone(original);
deep.address.city = 'LA';
console.log(original.address.city);  // "NYC" (unchanged) ✅
```

## Hints
- **Using `JSON.parse(JSON.stringify())` (Easiest but limited):**
  - `JSON.stringify(obj)` converts to string
  - `JSON.parse()` converts back to new object
  - ⚠️ Doesn't work with functions, undefined, Date objects, etc.
- **Recursive approach (Best for interviews):**
  - Check if value is an object/array
  - If yes, recursively clone it
  - If no, return the value directly
  - Handle arrays separately from objects
- **Using `structuredClone()` (Modern browsers):**
  - Built-in function: `structuredClone(obj)`
  - Works with most types including Date, RegExp
  - Not available in older browsers

## Edge Cases to Consider
- Nested objects (objects within objects)
- Arrays within objects
- Objects within arrays
- Null values (typeof null === 'object')
- Primitive values (numbers, strings, booleans)

## Bonus Challenge (Optional)
Handle circular references (objects that reference themselves)!
```javascript
const circular = { name: 'John' };
circular.self = circular;  // Points to itself!
deepClone(circular);  // Should not cause infinite loop
```
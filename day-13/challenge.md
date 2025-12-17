# Day 13: Object Property Counter

## Problem
Write a function that takes an object as input and returns the number of properties (keys) in that object.

## Examples
```javascript
countProps({name: "John", age: 30, city: "NYC"})     // Returns: 3
countProps({a: 1, b: 2, c: 3, d: 4})                 // Returns: 4
countProps({})                                        // Returns: 0
countProps({isActive: true})                         // Returns: 1
countProps({x: 10, y: 20, z: 30, w: 40, v: 50})      // Returns: 5
countProps({firstName: "Jane", lastName: "Doe"})     // Returns: 2
```

## Hints
- **Easy way:** Use `Object.keys(obj).length`
  - `Object.keys()` returns an array of all property names (keys)
  - Get the length of that array
- **Manual way with `for...in` loop:**
  - Loop through the object
  - Count each property
  - Use `for (let key in obj)` to iterate over properties
- **Alternative:** Use `Object.entries(obj).length`
  - `Object.entries()` returns an array of [key, value] pairs

## Understanding Object Methods

### `Object.keys()`
```javascript
const person = {name: "John", age: 30};
Object.keys(person);  // Returns: ["name", "age"]
```

### `Object.values()`
```javascript
const person = {name: "John", age: 30};
Object.values(person);  // Returns: ["John", 30]
```

### `Object.entries()`
```javascript
const person = {name: "John", age: 30};
Object.entries(person);  // Returns: [["name", "John"], ["age", 30]]
```

## Edge Cases to Consider
- Empty object → return 0
- Object with 1 property
- Objects with different value types (strings, numbers, booleans, etc.)

## Bonus Challenge (Optional)
Return an object with the count AND list of all property names!
```javascript
analyzeProps({name: "John", age: 30, city: "NYC"})  
// Returns: { count: 3, keys: ["name", "age", "city"] }
```
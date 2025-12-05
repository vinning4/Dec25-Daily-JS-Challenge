// Day 1: Reverse a String

function reverseString(str) {
    return str.split('').reverse().join('');
}

// Test cases
console.log(reverseString("Hello"));       // Expected: "olleh"
console.log(reverseString("world"));       // Expected: "dlrow"
console.log(reverseString("JavaScript"));  // Expected: "tpircSavaJ"
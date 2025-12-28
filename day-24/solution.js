function format(num) {
  const str = String(num).replace(/\D/g, '');
  
  if (str.length !== 10) return null;

  const pt1 = str.slice(0,3);
  const pt2 = str.slice(3,6);
  const pt3 = str.slice(6,10);

  return `(${pt1}) ${pt2}-${pt3}`;
}

console.log(format(+1234567890));
console.log(format("1234567890"));       // "(123) 456-7890" ✅
console.log(format("123-456-7890"));     // "(123) 456-7890" ✅
console.log(format(1234567890));         // "(123) 456-7890" ✅
console.log(format("1234"));            // null ✅
console.log(format("abc123def4567890")); // "(123) 456-7890" ✅ 
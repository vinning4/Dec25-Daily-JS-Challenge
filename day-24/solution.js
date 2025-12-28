// Soln
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
console.log(format("1234"));            // null ✅
console.log(format("abc123def4567890")); // "(123) 456-7890" ✅ 



// Bonus challenge
function formatAll(num) {
  const str = String(num).replace(/\D/g, '');
  if (str.length < 10) return null;
  
  const ctryCode = str.slice(0, -10);
  const local = str.slice(-10);
  const pt1 = local.slice(0,3);
  const pt2 = local.slice(3,6);
  const pt3 = local.slice(6,10);

  if (ctryCode) {
    return `+${ctryCode} (${pt1}) ${pt2}-${pt3}`;
  }
  else {
    return `(${pt1} ${pt2}-${pt3})`;
  }
}

console.log(formatAll("836 1234567890"));
console.log(formatAll("+1 1234567890"));
console.log(formatAll("44 1234567890"));
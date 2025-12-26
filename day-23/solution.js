// Soln 1 using built in func structuredClone(obj)
function deepClone(obj) {
  return structuredClone(obj);
}

const orig = {
  name: 'Bob',
  city: 'Melb',
  items: [1,2,3]
};

const cloned = deepClone(orig);
cloned.name = 'Jack';
cloned.items.push(4);


console.log(orig);
console.log(cloned);


// Soln 2 using JSON.parse
function cloner(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const original = {
  name: "Alice",
  location: { city: "NY", work: 'LA' }
};

const copy = cloner(original);
copy.name = 'Selene';
copy.age = 29;

console.log(original);
console.log(copy);
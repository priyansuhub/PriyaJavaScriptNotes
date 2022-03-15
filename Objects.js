//What is shallow cloning?
//ans: use object.assign
// use the spread operator
const existing = { a: 1, b: 1 };
const { ...abc } = existing;

// what is object freezing
// you cannot change the values in an object but can change the sub-objects in that object

//What is deep cloning?
// Andar ke objects ke objects ke value bhi badal jayenge

// object spread is a syntactical sugar for Object.assign({}, obj1, ... objn);

//Object.seal vs Object.freeze

// Convert object's values to array

// object.defineProperty makes it readonly

var a = {};
Object.defineProperty(a, "foo", { value: "original", writable: false });

//Object.keys returns an array of a given object's keys
// what is myObject.property
// Create an iterable object
// Object.entries

const obj = {
  one: 1,
  two: 2,
  three: 3,
};

for (const [key, value] of Object.entries(obj)) {
  console.log(key);
  console.log(value);
}

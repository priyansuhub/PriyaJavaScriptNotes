/*
Array and ArrayLike difference is 
ArrayLike inherits from Object.prototype so they can't access forEach map push filter slice etc
*/
var array = [
  {
    key: "one",
    value: 1,
  },
  {
    key: "two",
    value: 2,
  },
  {
    key: "three",
    value: 3,
  },
];
var Arr = array.reduce(
  (obj, current) => ({ ...obj, [current.key]: current.value }),
  {}
);
console.log(Arr);

/*
Map
*/

var a = ["one", "two", "three", "four"].map(function (value) {
  return value.length;
});

console.log(a);

[1, 2, 3, 4].forEach(function (value, index, arr) {
  var twoValue = value * 2;
  console.log("2 * value is: %d", twoValue);
});

/*Destructuring an array*/
const triangle = [3, 4, 5];
const [length, height, hypotenuse] = triangle;
/*
length === 3; // → true
height === 4; // → true
hypotneuse === 5; // → true
*/

var columns = ["Date", "Number", "Size", "Location", "Age"];
var rows = ["2001", "5", "Big", "Sydney", "25"];
var result = rows.reduce(function (result, field, index) {
  console.log(field);
  // console.log(result);
  result[columns[index]] = field;
  return result;
}, {});

console.log(result);

/*
The .split() method splits a string into an array of substrings. By default .split() will break the string into
substrings on spaces (" "), which is equivalent to calling .split(" ").
*/
var strArray = "StackOverflow".split("");

//array.shift() -> Left sai 1 katega
//array.pop() -> right sai 1 katega
//array.splice() ->

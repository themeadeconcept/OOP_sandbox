// Strings

const name1 = "Torrey";
const name2 = new String("Torrey");

// name2.foo = "bar";
// console.log(name2);

console.log(typeof name2);

if (name1 === "Jeff") {
  console.log("Yes");
} else {
  console.log("No");
}

// Number
const num1 = 5;
const num2 = new Number(5);

console.log(typeof num2);

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

// Function
const getSum1 = function (x, y) {
  return x + y;
};

const getSum2 = new Function("x", "y", "return 1 + 1");

console.log(getSum1(1, 1));

// Object
const john = { name: "John" };
const john2 = new Object({ name: "John" });
console.log(john);

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

console.log(arr1);

// Regular Expressions
const re1 = /\w+/;
const re2 = new RegExp("\\w+");

console.log(re2);

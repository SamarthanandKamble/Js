//REST parameter (Function defination)

//REST parameter should be the last parameter
function getvalues(first, ...remaining) {
  let sum = first;
  remaining.map((e) => (sum += e));
  return sum;
}
let summ = getvalues(1, 12, 2, 8);
// console.log(summ);

//SPREAD operator
const chars = ["a", "v", "r", "t"];
const arr = {
  name: "sam",
  age: 12,
  gender: "male",
  ...chars,
};

const cloneArr = { ...arr, newObj: { name: "fun" } };
// console.log(cloneArr);

function multiplyBy(factor, ...numbers) {
  return numbers.map((num) => num * factor);
}
// console.log(multiplyBy(2, 1, 2, 3)); // here first arg is considered as factor and rest of them is considered as numbers and converted into array.

//Questions on spread and rest operator.

// Question: How can you use the spread operator to merge two arrays into a new array?
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
// console.log(mergedArray);

// Question: Define a function 'sumAll' that uses the rest operator to accept any number of arguments and returns their sum.
function sumAll(...args) {
  let sum = 0;
  args.map((e) => (sum += e));
  return sum;
}
// console.log(sumAll(1, 2, 3)); // 6
// console.log(sumAll(10, 20, 30, 40)); //100

// Question: How can you use the spread operator to clone an object and then modify a property in the cloned object?
const originalObject = { a: 1, b: 2 };
const clonedObject = {
  ...originalObject,
  b: 3,
};
// console.log(clonedObject); //{ a: 1, b: 3 }
// console.log(originalObject); //{ a: 1, b: 2 }


// Question: How can you use the rest operator in destructuring to separate the first value and gather the rest in an array?
const values = [10, 20, 30, 40, 50];
const [firstValue, ...restValues] = values;
console.log(firstValue);  // Expected output: 10
console.log(restValues);  // Expected output: [20, 30, 40, 50]




// Array destructuring
const numbers = [1, 3, 2, 4, 5, 6];
const [first, second, ...rest] = numbers;
// console.log(first);
// console.log(second);
// console.log(rest);

//Functional arguments
function displayValues(...values) {
  console.log(values);
}

//   displayValues(1, 2, 3); //-> [1, 2, 3]
//   displayValues('a', 'b', 'c'); // -> ['a', 'b', 'c']

function joinString(separator, ...strings) {
  return strings.join(separator);
}
var resultOne = joinString("*", "sama", "a", "m", "a");
// console.log(resultOne);

var person = {
  name: "Samarthanand",
  age: 22,
  address: "xyz apna bazar",
};
const { name: full_name, address: dull_address, ...additionalInfo } = person;
// console.log(full_name);
// console.log(dull_address);
// console.log(additionalInfo);

function sumArray(...args) {
  args.map((ele, i) => {
    console.log("e:", ele);
    console.log("i", i);
  });
}
// const numbe = [1, 4, [2, 6], 1, [2, [1]]];
// sumArray(numbe);

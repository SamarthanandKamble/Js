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
// console.log(firstValue);  // Expected output: 10
// console.log(restValues);  // Expected output: [20, 30, 40, 50]

// Question: How can you use the spread operator to find the smallest number in an array using the Math.min function?
const numberss = [8, 4, 12, 11, 6];
const smallestNumber = Math.min(...numberss);
// console.log(smallestNumber); // Expected output: 1

// Question: Define a function 'userInfo' that accepts the user's name, age, and an arbitrary number of hobbies.
// Return an object containing the name, age, and hobbies as an array.
function userInfo(name, age, ...hobbies) {
  return {
    name,
    age,
    hobbies,
  };
}
// console.log(userInfo("Alice", 30, "Reading", "Painting", "Hiking"));
// Expected output: { name: 'Alice', age: 30, hobbies: ['Reading', 'Painting', 'Hiking'] }

// Question: Given two arrays, arr1 and arr2, use the spread operator to create a new array that contains the contents of arr1,
// followed by the elements of arr2 in reverse order.
const arrr1 = [1, 2, 3];
const arrr2 = [4, 5, 6];
const combinedReversed = [...arrr1, ...arrr2.reverse()];
// console.log(combinedReversed); // Expected output: [1, 2, 3, 6, 5, 4]

// Question: Define a function 'divideNumbers' that takes two numbers as arguments and returns the result of the division
// along with the whole and fractional parts using an object. Use destructuring with the rest operator.
function divideNumbers(a, b) {
  const result = a / b;
  const whole = Math.floor(result);
  const fractional = result - whole;
  return { result, whole, fractional };
}
// console.log(divideNumbers(10, 3));
// Expected output: { result: 3.3333333333333335, whole: 3, fractional: 0.3333333333333335 }

// Question: Given two nested objects, obj1 and obj2, create a new object by combining them using the spread operator.
const obj1 = { a: 1, nested: { b: 2, c: 3 } };
const obj2 = { nested: { d: 4 }, e: 5 };
const combinedNestedObjects = {
  ...obj1,
  nested: {
    ...obj1.nested,
    ...obj2.nested,
  },
  ...obj2,
};
console.log(combinedNestedObjects);
// Expected output: { a: 1, nested: { d: 4 }, e: 5 }

// Question: How can you use the spread operator to reverse a string?
const ssttr = "hello";
const reversedStr = [...ssttr].reverse();
// console.log(reversedStr); // Expected output: 'olleh'

// Question: Define a function 'mergeArrays' that takes multiple arrays as arguments and returns a single merged array.
function mergeArrays(...args) {
  return args.reduce((acc, curr) => [...acc, ...curr], []);
}

// console.log(mergeArrays([1, 2], [3, 4], [5, 6]));
// Expected output: [1, 2, 3, 4, 5, 6]

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

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

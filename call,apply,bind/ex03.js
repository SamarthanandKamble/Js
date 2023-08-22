// Practice of call method in javascript.

//Q1
function printInfo(email, phone) {
  console.log(`Email: ${email}, Phone: ${phone}`);
}

const contact = {
  email: "example@example.com",
  phone: "123-456-7890",
};
// printInfo.call(null, Object.values(contact)); //Parameters will assume 2nd arg as single value.
// printInfo.call(null, ...Object.values(contact));
// Here it is important to use rest opereator else parameters will consider 2nd argu as single value.

//Q2
function Parent(name) {
  this.name = name;
  this.gender = "Female";
  this.Parent_hobby = "Teaching";
}

function Child(name, age) {
  var childThis = {};
  Parent.call(childThis, name); // Here we are calling Parent fn with reference of Child. All properties of Praent would be accessible for child.
  childThis.age = age;
  childThis.gender = childThis.gender;
  childThis.Parent_hobby = childThis.Parent_hobby;
  return childThis;
}

// const child = Child("Charlie", 5);
// console.log(child.age);
// console.log(child.gender);
// console.log(child.Parent_hobby);

//Q3 How can you use the call method to calculate the sum of two numbers using the calculate function?
function calculate(a, b) {
  return this.operation(a, b);
}

var operation = {
  a: 5,
  b: 5,
  operation(a, b) {
    console.log(a + b);
  },
};

// calculate.call(operation, ...Object.values(operation));

//Q5 How can you use the `call` method to greet both users with the message "Hi"?
function greet(message) {
  console.log(`${message}, ${this.name}!`);
}

const user1 = { name: "Alex" };
const user2 = { name: "Eva" };

// greet.call(user1, "Hi");
// greet.call(user2, "Hi");

//Q6 How can you use the call method to make the alien object use the sayHello method from the person object?
const personn = {
  name: "Alice",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

const alien = {
  name: "Zog",
  age: 100,
};

// personn.sayHello.call(alien);

//Q7
function Animal(name) {
  this.name = name;
}

function Dog(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

// const myDog = new Dog("Buddy", "Golden Retriever");
// console.log(myDog.name); // What will this output?
// console.log(myDog.breed);

//Q8 Create two objects, event1 and event2, each with a different message property. Use the call method to make the announce function announce the messages for both events.
function announce(message) {
  console.log(message);
}
var event1 = {
  message: "Hey, this is event 1",
};
var event2 = {
  message: "Hey, this is event 2",
};
// announce.call(null, ...Object.values(event1));
// announce.call(null, ...Object.values(event2));

//Q9 Create an array of objects, each having a name property. Use a loop and the call method to greet each person with a different message.
function greett(message) {
  console.log(`${message}, ${this.name}!`);
}

var person = [
  {
    message: "hey there, this is object of person1",
    name: "Samarth",
  },
  {
    message: "hey there, this is object of person2",
    name: "Samarthanand",
  },
  {
    message: "hey there, this is object of person3",
    name: "Kamble",
  },
  {
    message: "hey there, this is object of person4",
    name: "Samarthanand Kamble",
  },
];

// for (const iterator of person) {
//   greett.call(iterator, ...Object.values(iterator));
// }

//Q10 Write a function called introduce that accepts a greeting as an argument and uses the call method to print a full introduction (including first and last name). Invoke the function with the person object and a greeting of your choice.

function introduce(greeting) {
  console.log(`${greeting} , ${this.firstName} ${this.lastName}`);
}

const peerson = {
  firstName: "Alice",
  lastName: "Johnson",
};

// introduce.call(peerson, "Hey");

//Q10 Create an object named logger with a message property. Write a method named logData that uses the call method to pass the message property to the callback function of fetchData. Call the logData method.
function fetchData(callback) {
  const data = "Fetched data";
  callback(data);
}

var logger = {
  message: "Hey",
  logData() {
    fetchData(this.message);
  },
};

logger.logData.call(logger, logger.logData);

/*
The ES6 version has class keyword that gives class like syntax. But you still don't get all typical class features.

The Objects in javascript are not class based so there is blueprint that every objects needs to adhere, the properties can be of an data-type.
*/

// Ways to create an object.
// 1. Inline Object (Non constructive way)
let user = {
  name: "userName",
  age: 20,
  gender: "userGender",
};

//2. using new keyword (aka Constructor function)
/*
Suppose we have to create 100 user obj. 
1. create them manually (repeating the same code multiple times)
2.create a function which will be invoked at the time of creation.

Can't give example of 1 st case.
*/
function createUser(name, age, gender) {
  let user = {};
  user.name = name;
  user.age = age;
  user.gender = gender;
  return user;
}
// let userOne = createUser("Sam",20,"male");
// console.log(userOne.name);
// console.log(userOne.age);
// let userTwo = createUser("Anil",25,"male");
// console.log(userTwo.name);
// console.log(userTwo.age);

/*If we create user in this way still there is some repetition of code which can be reduced.
Hence JS introduced "new" keyword, which will create the empty object and return it.
*/
function CreateUse(name, age, gender) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}
// let userOne = new CreateUse("Sam", 22, "male");
// let userTwo = new CreateUse("Saloni", 22, "female");
// let userThree = new CreateUse("Mas", 25, "male");

// console.log(userOne);
// console.log(userTwo);
// console.log(userThree);

/*
If we call the non constructive function in a constructiove way it will still work, not vice-cersa.
*/
function normalFun(name, age, gender) {
  var user = {};
  user.name = name;
  user.age = age;
  user.gender = gender;
  return user;
}
// let userOne = new normalFun("Sam", 25, "male");
// let userTwo = new normalFun("Samarth", 15, "male");

// console.log(userOne);
// console.log(userTwo);

/*
Now calling a constructive function in a non constrssuctive way (w/o "new" keyword )
*/
function normalFun(name, age, gender) {
  // var this = {};
  this.name = name;
  this.age = age;
  this.gender = gender;
  // return this
}
// let userOne = normalFun("Sam", 25, "male");
// let userTwo = normalFun("Samarth", 15, "male");

// console.log(userOne); //undefined
// console.log(userTwo); // undefined

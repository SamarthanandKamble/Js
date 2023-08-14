/*
Working woth Prototype 
Prototype is a property of a function.
When a new function is created it creates 2 objects. First is the object and the second is is Prototype Object.
*/

function greet(name) {
  this.name = name;
  console.log("Greet method");
}

console.log(greet.prototype);

/*
 *As we create a function its objct has an property know as Protoype. 
 */

var objOne = new greet("Jim");
objOne.getName = function () {
  console.log(`Name is ${this.name}`);
};

objOne.getName();

console.log(objOne.__proto__);

/*
The isntance of an object has a similar property known as __proto__ (dundler property).
*/

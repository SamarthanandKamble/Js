let user = {
  name: "Samarth",
  age: 22,
  /* fullName:function(){
            console.log(this.name +" "+this.age)
    }*/
};

//user.fullName();

let user2 = {
  name: "anand",
  age: 23,
};
//call : We can borrow methods of other functions.
// Here we are borrrowing fullName mehtod form user object for user2.
//user.fullName.call(user2)

//We can seprate the common method as well.

/*
let printName = function(){
    console.log(this.name +" "+this.age)
}
*/

//for arrow function this behaves differently.

//let printName =()=> console.log(this.name); // undefined

function printName() {
  console.log(this.name + " " + this.age);
}

// printName.call(user);
// printName.call(user2);

// apply works the same way as call , just the part where we pass the arguments is different.

// printName.call(user,"5.5","solapur","india");
// printName.apply(user,["5.5","solapur","india"]);

// binds provides the copy of the function ,where call and apply directly invoke the function.

let result = printName.bind(user);
// result();

var temp = 20;

function fun() {
  console.log("this value is", temp);
}
// fun();

var age = 25;

function knowAge() {
  // console.log(this.age);
  // console.log(this);
}

var getAge = {
  age: 20,
  knowAge: knowAge(),
};

// getAge.knowAge;

var usr = {
  getName() {
    console.log("hey there");
  },
};
// usr.getName();

var name = 20;
console.log(name === '20');
// On chrome browser console "name" behaves weird. It explicity converts everything to a string.
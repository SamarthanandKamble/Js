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
  this.gender = "Male";
  this.Parent_hobby = "Teaching";
}

function Child(name, age) {
  Parent.call(this, name); // Here we are calling Parent fn with reference of Child. All properties of Praent would be accessible for child.
  this.age = age;
  this.gender = this.gender;
  this.Parent_hobby = this.Parent_hobby;
}

const child = new Child("Charlie", 5);
console.log(child.name);
console.log(child.gender);
console.log(child.Parent_hobby);

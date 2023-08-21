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
printInfo.call(null, ...Object.values(contact));
// Here it is important to use rest opereator else parameters will consider 2nd argu as single value.

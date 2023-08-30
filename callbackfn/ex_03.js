/*
CreateOrder
ProceedToPayment
ShowOrderSummary
UpdateWallet
*/

const cart = ["shirts", "jeans", "trousers", "tshirts"];

creatOrder(cart)
  .then((order) => ProceedToPayment(order))
  .then((summary) => ShowOrderSummary(summary))
  .then(() => UpdateWallet())
  .catch((err) => console.log(err));

function creatOrder(cart) {
  return new Promise(function (resolve, reject) {
    if (cart) {
      resolve(cart[2]);
      console.log("order is created");
    } else {
      return reject("cart is invalid");
    }
    return cart[2];
  });
}

function ProceedToPayment(orderID) {
  return new Promise(function (resolve, reject) {
    if (orderID) {
      resolve(orderID);
      console.log("proceeded to payment");
    } else {
      return reject("Order id is invalid");
    }
    return orderID;
  });
  // return the cart consists of the order summary.
}

function ShowOrderSummary(summary) {
  return new Promise(function (resolve, reject) {
    if (summary) {
      resolve(summary);
      console.log("display order summary");
    } else {
      return reject("show summary failed");
    }
  });
}

function UpdateWallet() {
  return new Promise(function (resolve, reject) {
    resolve();
    console.log("here is the updated wallet");
  });
}

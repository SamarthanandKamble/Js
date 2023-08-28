function secondFun() {
  console.log("hey this is second function");
}

function firstFun(firstFun) {
  console.log("this is first function");
  firstFun();
}

// firstFun(secondFun);

function funWithFunParam(fn) {
  // fn();
  console.log("this is main function");
  fn();
}

funWithFunParam(function birju() {
  console.log("this function  is passed as argu");
});

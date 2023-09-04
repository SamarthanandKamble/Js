//  Questions on Asynchromue programming

const { reject } = require("lodash");
const { resolve } = require("path");

// GOTO School: resolve,rejectSolving with Promise instead of callback hell

/* 
wake up 
take bath 
}
have breakfast
pack the lunch
leave to school
*/

function wakeUp() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("Wake up");
      resolve("Wake up");
    }, 2000);
  });
}

function takeBath() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Take Bath");
      resolve("Take bath");
    }, 2000);
  });
}

function haveBreakfast() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      //   console.log("Have breakfast");
      reject("err : Have breakfast");
    });
  });
}

function packTheLunch() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("Pack the Lunch");
      resolve("Pack the lunch");
    });
  });
}

function leaveToSchool() {
  setTimeout(function () {
    console.log("Leave to school");
  }, 1000);
}

// wakeUp(function () {
//   takeBath(function () {
//     haveBreakfast(function () {
//       packTheLunch(function () {
//         leaveToSchool();
//       });
//     });
//   });
// });

// function onRejected(data) {
//   console.log("Rejected data ", data);
// }

wakeUp()
  .then(takeBath)
  .then(haveBreakfast)
  .then(packTheLunch)
  .then(leaveToSchool)
  .catch(function (data) {
    console.log("this is final catch block ", data);
  })
  .finally(function () {
    console.log("finally ");
  });

console.log("algorithm for going to school");

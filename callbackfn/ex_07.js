//wake up
//take bath
//have breakfast
//pack tiffin
//goto school

function gotoSchool() {
  setTimeout(() => {
    console.log("goto school");
  }, 2000);
}

function tiffin() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("pack tiffin");
      resolve();
    }, 6000);
  });
}
function haveBreakfast() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("have breakfast");
      resolve();
    }, 2000);
  });
}
function takeBath() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("take bath");
      resolve();
    }, 2000);
  });
}
function wakeup() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      console.log("wake up");
      resolve();
    }, 2000);
  });
}

/*
wakeup(function () {
  takeBath(function () {
    haveBreakfast(function () {
      tiffin(function () {
        gotoSchool();
      });
    });
  });
});
*/

let wakeupResult = wakeup();
wakeupResult.then(takeBath).then(haveBreakfast).then(tiffin).then(gotoSchool);
console.log("wakeup result : ", wakeupResult);
console.log("Steps to goto school");

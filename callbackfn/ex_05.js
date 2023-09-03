//  Questions on Asynchromue programming

// GOTO School:

/* 
wake up 
take bath 
have breakfast
pack the lunch
leave to school
*/

function wakeUp(callback) {
  setTimeout(function () {
    console.log("Wake up");
  }, 1000);
  callback();
}

function takeBath(callback) {
  setTimeout(function () {
    console.log("Take Bath");
    callback();
  }, 5000);
}

function haveBreakfast(callback) {
  setTimeout(function () {
    console.log("have breakfast");
    callback();
  }, 3000);
}

function packTheLunch(callback) {
  setTimeout(function () {
    console.log("Pack the lunch");
    callback();
  }, 1000);
}

function leaveToSchool() {
  setTimeout(function () {
    console.log("Leave to school");
  }, 1000);
}

wakeUp(function () {
  takeBath(function () {
    haveBreakfast(function () {
      packTheLunch(function () {
        leaveToSchool();
      });
    });
  });
});

console.log("algorithm for going to school");

// what is call back hell.(pyramid of doom)

// lets a simple example of making milk tea.
// algo
/*
1)boil the water.
2)add tea leaves.
3)add sugar.
4)add milk.
5)pour the tea.
*/
/* Here we neeed to make sure, no change in the order of execution of steps while making tea*/

function boilTheWater(cb) {
  setTimeout(() => {
    console.log("boilTheWater");
    cb();
  }, 3000);
}

function addTeaLeaves(cb) {
  setTimeout(() => {
    console.log("addTeaLeaves");
    cb();
  }, 1000);
}
function addSugar(cb) {
  setTimeout(() => {
    console.log("addSugar");
    cb();
  }, 1000);
}
function addMilk(cb) {
  setTimeout(() => {
    console.log("addMilk");
    cb();
  }, 1000);
}
function pourTheTea() {
  console.log("pourTheTea");
}

boilTheWater(function () {
  addTeaLeaves(function () {
    addSugar(function () {
      addMilk(function () {
        pourTheTea();
      });
    });
  });
});

console.log("Hey, we are making milk tea");

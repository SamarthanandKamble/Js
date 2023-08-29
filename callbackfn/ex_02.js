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

function boilTheWater() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("boilTheWater executed");
      console.log("boilTheWater");
    }, 3000);
  });
}

function addTeaLeaves() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("addTeaLeaves");
    }, 1000);
  });
}
function addSugar() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("addSugar");
    }, 5000);
  });
}
function addMilk() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("addMilk");
    }, 1000);
  });
}
function pourTheTea() {
  console.log("pourTheTea");
}

/*
boilTheWater(function () {
  addTeaLeaves(function () {
    addSugar(function () {
      addMilk(function () {
        pourTheTea();
      });
    });
  });
});
*/
// this is know as PYRAMID OF DOOM. (nested functions)

// Lets try to make this more simler and use Promises.

boilTheWater()
  .then(() => addTeaLeaves())
  .then(() => addSugar())
  .then(() => addMilk())
  .then(() => pourTheTea());



//Here is the async await way which works similar to promise.
/*async function makeMilkTea() {
  await boilTheWater();
  await addTeaLeaves();
  await addSugar();
  await addMilk();
  await pourTheTea();
}

makeMilkTea();
*/

console.log("Hey, we are making milk tea");

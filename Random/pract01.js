function addy(num1, num2) {
    if (num2) {
      console.log(num1 + num2);
    } else {
      return function (num2) {
        console.log(num1 + num2);
      };
    }
  }
  
  // addy(1, 2);
  // addy(1)(2);
  
  function checkmiss() {
    const arry = [1, 3, 2, 5, 4, 7, 9, 10, 8];
    let currentNum = 0;
    var sortedArray = arry.sort((a, b) => a - b);
    // arry
    //   .sort((a, b) => a - b)
    //   .map((ele) => {
    //     if (++currentNum === ele) {
    //     } else {
    //       return currentNum;
    //     }
    //   });
    for (let index = 0; index < sortedArray.length; index++) {
      if (++currentNum === sortedArray[index]) {
        continue;
      } else {
        return currentNum;
      }
    }
  }
  var result = checkmiss();
  console.log(result);
  
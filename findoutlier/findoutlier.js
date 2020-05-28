function findOutlier(integers) {
  var evenArr = [];
  var oddArr = [];
  
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 === 0) {
      evenArr.push(integers[i]);
      console.log("Evens", evenArr);
    } else {
      oddArr.push(integers[i]);
      console.log("Odds", oddArr);
    }
  }
  if (evenArr.length < oddArr.length) {
    return evenArr[0];
  } else {
    return oddArr[0];
  }
}
console.log(findOutlier([1, 2, 3]));

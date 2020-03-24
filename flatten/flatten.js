//Create a function that takes in an array with array elements
//Your function should return a single array with non-array elements
// Example:
// flatten([1,['a', 2, [8, true], 7]]) returns [1, 'a', 2, 8, true, 7]

function flatten(array) {
const newArray = array.flat([Infinity]);
return newArray;
}
console.log(flatten([1,['a', 2, [8, true], 7]]));


function flatten(array) {
  return [].concat(...array)
 }
 console.log(flatten([1,['a', 2, [8, true], 7]]));

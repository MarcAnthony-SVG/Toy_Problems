/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
 */

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
 */

// var evenOccurrence = function(arr) {
//   var sorted = arr.sort();
//   for (let i = 0; i < arr.length;i++){
//     if (arr[i] !== arr[1]) {
//       arr.shift(); 
//       } else if (arr[i] === arr[1]) {
//        return arr[i];
//       }
//   }
// };
// console.log(evenOccurrence([1, 7, 2, 4, 5, 6, 7, 8, 9, 6, 4]));


// var evenOccurrence = function(arr) {  
// var counter = 0;
// var object = {
//   value: 0,
//   key: "null"
// };
// for (var element of arr) {
//   object.key = element;
//     console.log(object);
//   }
// for (var element of object){
//   if (object[element] )
// }
// };
// console.log(evenOccurrence([1, 7, 2, 4, 5, 6, 7, 8, 9, 6, 4]));


// var evenOccurrence = function(arr) {
//   var sorted = arr.sort();
//   for (let i = 0; i < arr.length;i++){
//     if (arr[i] !== arr[1]) {
//       arr.shift(); 
//       } else if (arr[i] === arr[1]) {
//        return arr[i];
//       }
//   }
// };
// console.log(evenOccurrence([1, 7, 2, 4, 5, 6, 7, 8, 9, 6, 4]));

var evenOccurrence = function(arr) {
	//key : ocurrence object
	var obj = {};
	//iterate over elements in input array
	arr.forEach(element => {
		//if element not a obj key
		//set as obj key equal to 1; else current value plus 1
		if(obj[element] === undefined) ? obj[element] = 1 : obj[element] = obj[element] + 1;
	});
	
	//iterate through elements of input arr
	for (let i = 0; i < arr.length; i++) {
		//if element occurs an even amount of times
		if (obj[arr[i]] % 2 === 0) { 
			return arr[i]; }
	}
	return null;
};
console.log(evenOccurrence([1, 7, 2, 4, 5, 6, 7, 8, 9, 6, 4]));
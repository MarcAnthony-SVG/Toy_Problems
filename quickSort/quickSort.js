/**
 * Quicksort is a sorting algorithm that uses a divide and conquer strategy;
 *
 * It:
 *    Takes in an array.
 *    Picks a value in the array as a pivot.
 *    Partitions all the elements of the array into two arrays, based on
 *      if they are larger or smaller than the pivot.
 *    Recursively sorts the two halves.
 *    Combines the two arrays and the pivot into a sorted array.
 */
//1)func takes a array.
//2)picks a value to pivot.
//3)divide the array into to parts greater than and less than based on the pivot 
//4)iterate over both arrays to get a them sorted.
//5)combined the two arrays and return.

var quicksort = function(array) { //func takes a array.
var pivot = Math.floor(array.length/2); // picks a value to pivot.
var greaterArr = [];
var lowerArr = [];
for(let num in array){
    if(num > pivot){
        greaterArr.push(num);
    } else if (num < pivot) {
        lowerArr.push(num);
    }
}
return lowerArr.concat(pivot).concat(greaterArr);
};
console.log(quicksort([2,3,8,1,6,9,7,5,4,10]))


    // const copyArr = [...array];
    // var pivot = copyArr.reduce(function(a, b){
    //     return a + b;
    // }, 0);
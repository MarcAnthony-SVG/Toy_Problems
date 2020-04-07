// INSTRUCTIONS
// Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth, and so on.
// In this way, the largest values ‘bubble’ to the end of the array.
// Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.


function bubbleSort(array) {
var sorted = false
while(!sorted) {
  sorted = true
  for(let i=0; i < array.length; i++) {
    if(array[i] < array[i-1]) {
      var hold = array[i];
      array[i] = array[i-1];
      array[i-1] = hold;
      sorted = false;
    }
  }
}
return array;
}
console.log(bubbleSort([3,5,4,2,1,0]));

// Write a function that takes in an array of numbers and returns the maximum number of consecutive 1s

//maxConsecutiveOnes([1,1,2,0,3,1,1,1,1,5,6,3]) returns 4
// input: array of numbers [1,1,2,0,3,1,1,1,1,5,6,3]
// output: number 4
// constraints: 
// edge cases: 
function maxConsecutiveOnes(array) {
  const storageA = [];
  const storageB = [];
  for (let i = 0; i < array.length; i++){
    if (array[i] === 1){
      storageA.push(array[i]);
      i++;
      // console.log("loop",storageA);
    }
  }
  console.log(storageA);
}
console.log(maxConsecutiveOnes([1,1,2,0,3,1,1,1,1,6,3]));
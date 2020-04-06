// Write a function that goes through intake and returns the total
// number of donuts for an object structured as below.

// Input parameter: intake object
// Output: Total number of donuts in object
// Write pseudocode first!

// var intake = {
//   day: "monday",
//   donuts: 5,
//   next: {
//     day: "tuesday",
//     donuts: 3,
//     next: {
//       day: "wednesday",
//       donuts: 9,
//       next: {
//         day: "thursday",
//         donuts: 17,
//         next: null
//       }
//     }
//   }
// }
// countAllDonuts(intake) --> 37

function countAllDonuts(obj) {
  if (!intake.next === null) {
   return intake.donuts;
  }
}
console.log(countAllDonuts(intake));
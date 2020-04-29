// Write a function that takes in a string of the time and returns the time in military format.
//Ex: militaryTime('7:47pm') returns '19:47'

// if pm 
function militaryTime(timeStr) {
  const startTime = Array.from(timeStr);
  // const timeArray = [];
  console.log("first",startTime);
  // const hours = [];
  const minutes = startTime.slice(startTime.length-4,startTime.length-2).join('');
  console.log(minutes);
  const timeOfDay = startTime.slice(startTime.length-2).join('');
  console.log(timeOfDay); // if(timeOfDay === pm)


  for(let i = 0; i < timeStr.length; i++){
    if(timeStr[i] === Number) {
      console.log("I",timeStr[i])
  }}}
console.log(militaryTime('7:47pm'));

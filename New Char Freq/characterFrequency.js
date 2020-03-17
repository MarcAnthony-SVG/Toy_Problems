// Write a function that takes as its input a string
// and returns an array of arrays as shown below
// sorted in descending order by frequency
// and then by ascending order by character.

// "aaabbc" => [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// "mississippi" => [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
// "" => [ ]

function characterFrequency(str) {
  // Write a function that takes as its input a string
  var charCounter = 0;
  var masterArray = [];
  var charCounterArr = [];
  var letterArr = [];
  for (var letter = 0; letter < str.length; letter++) {
    masterArray.push(str[letter]);
  }
  for (var i = 0; i < masterArray.length; i++) {
    if (masterArray[i] >= masterArray[1]);
    letterArr.push(masterArray[i]);
    charCounter++;
    letterArr.push(masterArray[charCounter]);
    masterArray.shift(masterArray[i]);
  }
  console.log(charCounter);
  return masterArray;
}
console.log(characterFrequency("aaabbc"));

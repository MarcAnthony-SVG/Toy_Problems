/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

var commonCharacters = function(string1, string2) {

  var counter = 1; // counter to put replace the key
  var charactersObj = {}; // charactersObj in order to have a key and value;
  for (var i = 0; i < string1.length; i++) { // loops through string 1
      charactersObj.value = string1[i]; // Gives each value a letter in the string; 
      charactersObj.key = counter++; // Assigns each key a number 
      console.log(charactersObj);
  }
  for (var j = 0; j < string2.length;j++) { // loops through string 2
    // if (string2[j] === charactersObj.value) // checks to see if value at j is already in the object value
    charactersObj.value = string2[j]; //Gives each value a letter in the string; 
    charactersObj.key = counter++;
    console.log(charactersObj);
} 
  return charactersObj; 
};
console.log(commonCharacters('acexivou', 'aegihobu'));

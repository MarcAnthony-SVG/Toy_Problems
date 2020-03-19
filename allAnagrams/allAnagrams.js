/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

var allAnagrams = function(string) {
  var abcArray = [];
  var anagramsArray = [];
  for (var i = 0; i < string.length; i++) {
    // loop thorugh the str to get the string into an array
    abcArray.push(string[i]);
  }
  for (var i = 0; i < anagramsArray.length; i++) {
    // loop through the  array in order to compare the two and then push the differences back into an array;
    if (anagramsArray[i] !== abcArray[0]) {
      anagramsArray.push(anagramsArray[i]);
      console.log(anagramsArray);
    }
  }
  return anagramsArray;
};
console.log(allAnagrams("abc"));


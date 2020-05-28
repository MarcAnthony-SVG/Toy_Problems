/*
Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

a -> 1
e -> 2
i -> 3
o -> 4
u -> 5
For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

For example, decode("h3 th2r2") would return "hi there".

For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
*/

function encode(string) {
  var array = [...string];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "a") {
      array[i] = 2;
    } else if (array[i] === "e") {
      array[i] = 2;
    } else if (array[i] === "i") {
      array[i] = 3;
    } else if (array[i] === "o") {
      array[i] = 4;
    } else if (array[i] === "u") {
      array[i] = 5;
    }
  }
  return array.join();
}
console.log("ENCODE", encode("hello"));

function decode(string) {
var array = [...string];
for (let i = 0; i < array.length; i++) {
  if (array[i] === "1") {
    array[i] = "a";
  } else if (array[i] === "2") {
    array[i] = "e";
  } else if (array[i] === "3") {
    array[i] = "i";
  } else if (array[i] === "4") {
    array[i] = "o";
  } else if (array[i] === "5") {
    array[i] = "u";
  }
  return array.join();
}
}
console.log("DECODE", decode("hello"));

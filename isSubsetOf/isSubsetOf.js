/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
 */

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
 */
/* I) arr
   O) Boolean true or false
   E) Disregard duplicates
   C) Output boolean
   1) Set a variable to the array prototype using this.
   2) Check for duplicates 
   3) Compare this.array to arr
   4) If they have same items then true else false
*/

Array.prototype.isSubsetOf = function(arr) {
  const array = this;
  const target= [...arr];
  // console.log("a",array);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < target.length; j++)
    if (array[i] === target[i]){
      return true;
    } else {
      return false;
    }
}
};
var a = ['commit','push'];
console.log("s",a.isSubsetOf(['rebase','blame']));


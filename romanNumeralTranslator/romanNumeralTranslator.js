/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

//I:string
//O:number/ null
//E: if a V comes after I it's a 4 not a 6
//C:
//Step 1: Solve for if not a string
//Step 2: Solve for single cases
//Step 3: Solve for multiple cases
//Step3A: Store data in Object;
var translateRomanNumeral = function (romanNumeral) {
  var storageOBJ = {
    I: 0,
    V: 0,
    X: 0,
    L: 0,
    C: 0,
    D: 0,
    M: 0,
  };
  if (typeof romanNumeral !== "string") {
    return null;
  } else if (romanNumeral === "I") {
    return 1;
  } else if (romanNumeral === "V") {
    return 5;
  } else if (romanNumeral === "X") {
    return 10;
  } else if (romanNumeral === "L") {
    return 50;
  } else if (romanNumeral === "C") {
    return 100;
  } else if (romanNumeral === "D") {
    return 500;
  } else if (romanNumeral === "M") {
    return 1000;
  }
  for (let i = 0; i < romanNumeral.length; i++) {
    if (romanNumeral[i] === "I") {
      storageOBJ.I += 1;
    } else if (romanNumeral[i] === "V") {
      storageOBJ.V += 5;
    } else if (romanNumeral[i] === "X") {
      storageOBJ.X += 10;
    } else if (romanNumeral[i] === "L") {
      storageOBJ.L += 50;
    } else if (romanNumeral[i] === "C") {
      storageOBJ.C += 100;
    } else if (romanNumeral[i] === "D") {
      storageOBJ.D += 500;
    } else if (romanNumeral[i] === "M") {
      storageOBJ.M += 1000;
    }

    // if (storageOBJ.I > 4) {
    //   storageOBJ.V - storageOBJ.I;
    // } else if (storageOBJ.V > 10) {
    //   storageOBJ.V - storageOBJ.I;
    // } else if (storageOBJ.V > storageOBJ.X) {
    //   storageOBJ.V - storageOBJ.I;
    // } else
  }
  return (
    storageOBJ.I +
    storageOBJ.V +
    storageOBJ.X +
    storageOBJ.L +
    storageOBJ.C +
    storageOBJ.D +
    storageOBJ.M
  );
};
console.log(translateRomanNumeral("MMXVI"));

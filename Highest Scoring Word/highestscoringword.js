//Given a string of words, you need to find the highest scoring word.
//Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
//You need to return the highest scoring word as a string.
//If two words score the same, return the word that appears earliest in the original string.
//All letters will be lowercase and all inputs will be valid.

//Input: ‘man i need a taxi up to ubud’ -> Output: ‘taxi’
//Input: ‘what time are we climbing up the volcano’ -> Output: ‘volcano’
//Input: ‘take me to semynak’) -> Output: ‘semynak’

//Input: String.
//Output: Highest scoring word based on its position in the alphabet.
//Edge: If two words score the same, return the word that appears earliest in the original string.
//Constraints: All letters will be lowercase and all inputs will be valid.

const boggleSolve = (str) => {
  const letters = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let results = 0;
  for (let i = 0; i < str.length; i++) {
    results += letters[str[i]];
  }

  return results;
}
// console.log(boggleSolve("man"));

function highestScoringWord(str) {
    var words = str.split(" ");
for (var i = 0; i < words.length - 1; i++) {
    words[i] += "";
    console.log("Words",words);
}
    for (let i = 0; i < words.length -1; i++){
        console.log("WordValues",boggleSolve(words[i]))
    }
}

console.log(highestScoringWord("man i need a taxi up to ubud"));

// Given a string, return true if it contains all balanced parenthesis (),
// curly-brackets {}, and square-brackets [].

//                        Examples
//               Input	                       Output
// str: "(x + y) - (4)"           |   true
// str: "(x + y) - (4)"           |   true
// str: "(((10 ) ()) ((?)(:)))"   |   true
// str: "[{()}]"                  |   true
// str: "(50)("                   |   false
// str: "[{]}"                    |   false

const isBalanced = str => {
    const mainStorage = [];
    var parenthesis = [];
    var curlyBrackets = [];
    var brackets = [];
    for (let i = 0; i < str.length; i++){
        for (let j = i+1; j < str.length; j++) {
        if (str[j] === "(" || str[j] === ")" || str[j] === "{" ||str[j] === "}" || str[j] === "[" || str[j] === "]"){
            mainStorage.push(str[j]); 
        } else if (str[0] === "(" || str[0] === ")" || str[0] === "{" ||str[0] === "}" || str[0] === "[" || str[0] === "]" && )
    }
    return mainStorage;
    console.log("mainStorage",mainStorage);
        console.log(mainStorage);
    }
    // for (let q = 0; q < parenthesis.length; q++){
    //     if (parenthesis[q] === "(")
    }
    // return storage; // [ '[', '{', '(', ')', '}', ']' ]
console.log(isBalanced("[{]}"));


// const isBalanced = str => {
//     // const mainStorage = [];
//     var parenthesis = [];
//     var curlyBrackets = [];
//     var brackets = [];
//     for (let i = 0; i < str.length; i++){
//         if (str[i] === "(" || str[i] === ")"){
//             parenthesis.push(str[i]); 
//             console.log("parenthesis_if",parenthesis);
//         } else if (str[i] === "{" ||str[i] === "}" ){
//             curlyBrackets.push(str[i]); 
//             console.log("curlyBrackets_if",curlyBrackets)
//         } else if (str[i] === "[" || str[i] === "]") {
//             brackets.push(str[i]); 
//             console.log("brackets_if",brackets)
//         }
//         };
//     var parenthesis = parenthesis.join("");
//     console.log("parenthesis",parenthesis);
//     var curlyBrackets = curlyBrackets.join("");
//     console.log("brackets",brackets);
//     var brackets = brackets.join("");
//     console.log("curlyBrackets",curlyBrackets);
// console.log(isBalanced("[{]}"));
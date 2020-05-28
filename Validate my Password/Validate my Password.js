function validPass(password){
const nonAlphanumericChar = ["!","@","#","&","(",")","–","[","{","}","]",":",";","‘",",","?","/","*"];
const numbers = [0,1,2,3,4,5,6,7,8,9];
const upperLet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const lowerLet= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var key = true
//More than 3 characters but less than 20.
if(password.length <= 3 && password.length >=20){
    return 'INVALID'
}
//Must contain only alphanumeric characters.
for(let i = 0; i < password.length;i++){
    for (let j = 0 ; j <nonAlphanumericChar.length;j++){
        if(password[i] === nonAlphanumericChar[j]){
            return "INVALID"
    } else {
        return "VALID"

// }
// for(let i = 0; i < password.length;i++){
//     for (let j = 0 ; j <upperLet.length;j++){
//         if(password[i] !== upperLet[j]){
//             var  key = false;
//         } else {
//             var key = true;
//         }
//     }
// }
// //Must contain letters and numbers.
// if(key === true){
// return "VALID"
// } else {
//     return "INVALID"
// }
}}}}
console.log(validPass('E3%434E'));
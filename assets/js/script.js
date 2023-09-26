// Assignment Code
var generateBtn = document.querySelector("#generate");
//Adding these up here
var listBase = []
var lowerCaseList = "abcdefghijklmnopqrstuvwxyz".split(
  ""
);
var upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
  ""
);
var numbersList = "0123456789".split(
  ""
);
var specialCharList = " !#$%&'()*+,-./:;<=>?@[\\]^_`{|}~".split(
  ""
);
// var ListAmount = 0;
function randomCharSelector (){
  var randomIndex = Math.floor(Math.random() * listBase.length);
  var randomChar = listBase[randomIndex];
  return randomChar;
}
// Write password to the #password input
function writePassword() {
  //Start of work area
//   window.confirm("Would you like your password to include lowercase letters?");
// if (confirm("Press a button!")) {
//   passwordText = "Lowercase letters will be used in your password.";
// } else {
//   passwordText = "Lowercase letters will be omitted from your password.";
// }
var charNum = prompt("How many characters would you like in your password?");

console.log(charNum);
if (!charNum) {
  return; 
}
else var lowerCaseQuery = confirm("Would you like to include lowercase letters in your password?");
if (lowerCaseQuery === true) {
  listBase.push(lowerCaseList);
}
console.log(listBase);
var upperCaseQuery = confirm("Would you like to include uppercase letters in your password?");
if (upperCaseQuery === true) {
  listBase.push(upperCaseList);
}
console.log(listBase);
var numbersQuery = confirm("Would you like to include numbers in your password?");
if (numbersQuery === true) {
  listBase.push(numbersList);
}
console.log(listBase);
var specialCharQuery = confirm("Would you like to include special characters in your password?");
if (specialCharQuery === true) {
  listBase.push(specialCharList);
}
console.log(listBase);
var passwordConfirm = confirm("You have chosen a password that is " + charNum + " characters long and includes the following: \n Puppies, Kittens, Bears \n Would you like to generate your password?")
if (passwordConfirm === false) {
  return;
}
else if (listBase == ""){
  alert("Your password does not include any characters! Please try again.");
  return;
}
else {
  alert("Your password has been generated.")
}
console.log(listBase);
// else lowerCaseList.concat(upperCaseList)

// else var lowerCaseQuery = confirm("Would you like to include lowercase letters in your password?");
// if (lowerCaseQuery === false) {
//   lowerCaseList = "";
// }
// var upperCaseQuery = confirm("Would you like to include uppercase letters in your password?");
// if (upperCaseQuery === false) {
//   upperCaseList = ""
// }
// var numbersQuery = confirm("Would you like to include numbers in your password?");
// if (numbersQuery === false) {
//   numbersList = ""
// }
// var specialCharQuery = confirm("Would you like to include special characters in your password?");
// if (specialCharQuery === false) {
//   specialCharList = ""
// }
// var passwordConfirm = confirm("You have chosen a password that is " + charNum + " characters long and includes the following: \n Puppies, Kittens, Bears \n Would you like to generate your password?")
// if (passwordConfirm === false) {
//   return;
// }
// else if (passwordList = ""){
//   alert("Your password does not include any characters! Please try again.");
//   return;
// }
// else

//This or the other
// var passwordList = lowerCaseList.concat(upperCaseList, numbersList, specialCharList);

// var passwordList = listBase.concat(lowerCaseList, upperCaseList);
// console.log(passwordList);
console.log(charNum);

  //End of work area

  console.log(password);
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  randomChar = randomCharSelector();
  for (var i = 0; i < listBase.length; i++){
  }
  // for (var i = 0; i < charNum; i++) {
  //   // var password = Math.floor(Math.random() * charNum);
  //   password += passwordList[Math.floor(Math.random() * charNum)];
  // };

  passwordText.value = password;
  console.log(password);
  // console.log(combination);
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function generatePassword(){
//   var password = "P6s%hshBD29(@"

  // return password;
// }
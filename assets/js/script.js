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



//A RECORD OF THE COPY
// Assignment Code
var generateBtn = document.querySelector("#generate");
//Character Lists
var charNum = 0
var listBase = [];
// var passwordChars = [];
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
//Need a function to generate the password
function generatePassword() {
  var password = "";
  // var randomChoice = Math.floor(Math.random() * listBase.length);
  // var randomChar = listBase[randomChoice];
  //for (var j = 0; j < charNum; j += listBase.length) {
  for (var j = 0; j <= charNum; j++) {
    var randomChoice = Math.floor(Math.random() * listBase.length);
    // generation += randomChar;
    // generation += listBase.substring(randomChoice, randomChoice, +1);
    password = password + listBase[randomChoice];
  }
  // password = generation.slice(0, charNum);
  return password;
}

// Write password to the #password input
function writePassword() {
  //Text prompts here
  //Added a listBase reset at the top of the function
  listBase = [];
  charNum = prompt("How many characters would you like in your password?");
  if (!charNum) {
  return; 
} else if (charNum < 8){
  alert("Your password must contain at least 8 characters.");
  return;
} else if (charNum > 128){
  alert("Sorry! Your password cannot contain more than 128 characters.");
  return;
} else var lowerCaseQuery = confirm("Would you like to include lowercase letters in your password?");
if (lowerCaseQuery === true) {
  listBase = listBase.concat(lowerCaseList);
  // passwordChars = listBase.concat(lowerCaseList);
  alert("Your password will contain lowercase letters.")
} else {
  alert("Your password will NOT contain lowercase letters.")
}
var upperCaseQuery = confirm("Would you like to include uppercase letters in your password?");
if (upperCaseQuery === true) {
  listBase = listBase.concat(upperCaseList);
  // listBase = (upperCaseList);
  // passwordChars = listBase.concat(upperCaseList);
  alert("Your password will contain uppercase letters.")
} else {
  alert("Your password will NOT contain uppercase letters.")
}
var numbersQuery = confirm("Would you like to include numbers in your password?");
if (numbersQuery === true) {
  listBase = listBase.concat(numbersList);
  // tempList3 = listBase.concat(numbersList);
  alert("Your password will contain numbers.")
} else {
  alert("Your password will NOT contain numbers.")
}
var specialCharQuery = confirm("Would you like to include special characters in your password?");
if (specialCharQuery === true) {
  listBase = listBase.concat(specialCharList);
  // tempList4 = listBase.concat(specialCharList);
  alert("Your password will contain special characters.")
} else {
  alert("Your password will NOT contain special characters.")
}
// passwordChars = listBase.concat(tempList1, tempList2, tempList3, tempList4);
var passwordConfirm = confirm("Would you like to generate your password?")
if (passwordConfirm === false) {
  return;
} else if (listBase == ""){
// } else if (passwordChars = ""){
  alert("Your password does not include any characters! Please try again.");
  return;
} else {
  alert("Your password has been generated.")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}
    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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
  for (var j = 0; j <= charNum; j++) {
    var randomChoice = Math.floor(Math.random() * listBase.length);
    password = password + listBase[randomChoice];
  }
  return password;
}

// Write password to the #password input
function writePassword() {
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
  alert("Your password will contain lowercase letters.")
} else {
  alert("Your password will NOT contain lowercase letters.")
}
var upperCaseQuery = confirm("Would you like to include uppercase letters in your password?");
if (upperCaseQuery === true) {
  listBase = listBase.concat(upperCaseList);
  alert("Your password will contain uppercase letters.")
} else {
  alert("Your password will NOT contain uppercase letters.")
}
var numbersQuery = confirm("Would you like to include numbers in your password?");
if (numbersQuery === true) {
  listBase = listBase.concat(numbersList);
  alert("Your password will contain numbers.")
} else {
  alert("Your password will NOT contain numbers.")
}
var specialCharQuery = confirm("Would you like to include special characters in your password?");
if (specialCharQuery === true) {
  listBase = listBase.concat(specialCharList);
  alert("Your password will contain special characters.")
} else {
  alert("Your password will NOT contain special characters.")
}
var passwordConfirm = confirm("Would you like to generate your password?")
if (passwordConfirm === false) {
  return;
} else if (listBase == ""){
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
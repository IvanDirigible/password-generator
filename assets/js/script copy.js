// Assignment Code
var generateBtn = document.querySelector("#generate");
//Character Lists
var charNum = 0
var listBase = [];
var passwordChars = [];
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
  var generation = "";
  var randomChoice = Math.floor(Math.random() * listBase.length);
  var randomChar = listBase[randomChoice];
  for (var j = 0; j < charNum; j += listBase.length) {
    generation += randomChar;
  }
  password = generation.slice(0, charNum);
  return password;
}

// Write password to the #password input
function writePassword() {
  //Text prompts here
  console.log(listBase);
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
  // tempList1 = listBase.concat(lowerCaseList);
  // passwordChars = listBase.concat(lowerCaseList);
  alert("Your password will contain lowercase letters.")
} else {
  alert("Your password will NOT contain lowercase letters.")
}
// console.log(passwordChars);
var upperCaseQuery = confirm("Would you like to include uppercase letters in your password?");
if (upperCaseQuery === true) {
  // tempList2 = listBase.concat(upperCaseList);
  // listBase = (upperCaseList);
  // passwordChars = listBase.concat(upperCaseList);
  alert("Your password will contain uppercase letters.")
} else {
  alert("Your password will NOT contain uppercase letters.")
}
// console.log(passwordChars);
var numbersQuery = confirm("Would you like to include numbers in your password?");
if (numbersQuery === true) {
  // listBase.concat(numbersList);
  // tempList3 = listBase.concat(numbersList);
  alert("Your password will contain numbers.")
} else {
  alert("Your password will NOT contain numbers.")
}
// console.log(listBase);
var specialCharQuery = confirm("Would you like to include special characters in your password?");
if (specialCharQuery === true) {
  // listBase.concat(specialCharList);
  // tempList4 = listBase.concat(specialCharList);
  alert("Your password will contain special characters.")
} else {
  alert("Your password will NOT contain special characters.")
}
// console.log(listBase);
// passwordChars = listBase.concat(tempList1, tempList2, tempList3, tempList4);
var passwordConfirm = confirm("Would you like to generate your password?")
if (passwordConfirm === false) {
  return;
// } else if (listBase == ""){
} else if (passwordChars = ""){
  alert("Your password does not include any characters! Please try again.");
  return;
} else {
  alert("Your password has been generated.")
  console.log(passwordChars);
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
}
    passwordText.value = password;
    // console.log(listBase)
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
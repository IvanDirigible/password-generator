// Assignment Code
var generateBtn = document.querySelector("#generate");
//Adding these up here
var listBase = ""
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
if (lowerCaseQuery === false) {
  lowerCaseList = "";
}
var upperCaseQuery = confirm("Would you like to include uppercase letters in your password?");
if (upperCaseQuery === false) {
  upperCaseList = ""
}
var numbersQuery = confirm("Would you like to include numbers in your password?");
if (numbersQuery === false) {
  numbersList = ""
}
var specialCharQuery = confirm("Would you like to include special characters in your password?");
if (specialCharQuery === false) {
  specialCharList = ""
}
var passwordConfirm = confirm("You have chosen a password that is " + charNum + " characters long and includes the following: \n Puppies, Kittens, Bears \n Would you like to generate your password?")
if (passwordConfirm === false) {
  return;
}
else if (passwordList = ""){
  alert("Your password does not include any characters! Please try again.");
  return;
}
else
// else lowerCaseList.concat(upperCaseList)


var passwordList = lowerCaseList.concat(upperCaseList, numbersList, specialCharList);
// var passwordList = listBase.concat(lowerCaseList, upperCaseList);
console.log(passwordList);

for (var i = 0; i < charNum; i++);
  //End of work area


  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// function generatePassword(){
//   var password = "P6s%hshBD29(@"

//   return password
// }
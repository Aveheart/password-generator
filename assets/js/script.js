// Assignment Code
var generateBtn = document.querySelector("#generate");
/*var for all characters in password*/
var userChoices;
var length;
var lowerCase;
var upperCase;
var number;
var special;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
var special = ["*", "&", "^", "%", "$", "#", "!", "@", "+", "="];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

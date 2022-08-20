var generateBtn = document.querySelector("#generate");
/*var for all characters in password*/
var userChoices;
var length;
var lowerCase;
var upperCase;
var number;
var special;
/*arrays for each varia*ble*/
number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y","z"];
special = ["*", "&", "^", "%", "$", "#", "!", "@", "+", "="];

/*make uppercase letters */
var upper = [];
var toUpper = function (x) {
  return x.toUpperCase();
}
upperCase = lowerCase.map(toUpper);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  /* question prompts*/
  length = prompt("choose between 8 and 128 characters for password");
  console.log("length of password" + length);

  if(!length){
    alert("you must choose a value");
  
  } else if(length <8 || length > 128) {
    length = prompt("password has to be between 8 and 128 characters");
    console.log("length of password" + length);
  }
}

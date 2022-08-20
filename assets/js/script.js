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
  /* question prompts for each var*/
  length = prompt("choose between 8 and 128 characters for password");
  console.log("length of password" + length);
/*if user chooses a value not equal between 8 and 128 alert prompts */
  if(!length){
    alert("you must choose a value");
  
  } else if(length <8 || length > 128) {
    length = prompt("password has to be between 8 and 128 characters");
    console.log("length of password" + length);
  }
  else {
    confirmNumber = confirm("password will have a number");
    console.log("number" + confirmNumber);

    confirmSpecial = confirm("password will have a special character");
    console.log("special character" + confirmSpecial);

    confirmlowerCase = confirm("password will have lowercase letter(s)");
    console.log("lower case" + confirmlowerCase);

    confirmupperCase = confirm("password will have uppercase letter(s)");
    console.log("upper case" + confirmupperCase);
  };
  /* if user hits cancel on all criteria options will alert this message*/
  if(!confirmNumber && !confirmSpecial && !confirmlowerCase && !confirmupperCase) {
    userChoices = alert("must choose at least one criteria");
  } /*if user answers ok on all 4 options */
  else if (confirmNumber && confirmSpecial && confirmlowerCase && confirmupperCase){
    userChoices = lowerCase.concat(number, special, upperCase);
    console.log(userChoices);
  }
  /*if user answers ok to 3 options */
  else if(confirmNumber && confirmSpecial && confirmlowerCase){
    userChoices = number.concat(special, lowerCase);
    console.log(userChoices);
  }
  else if(confirmNumber && confirmSpecial && confirmupperCase) {
    userChoices = number.concat(special, upperCase);
    console.log(userChoices);
  }
  else if (confirmNumber && confirmlowerCase && confirmupperCase){
    userChoices = number.concat(lowerCase, upperCase);
    console.log(userChoices);
  } 
  else if (confirmspecial && confirmlowerCase && confirmupperCase){
    userchoices = special.concat(lowerCase, upperCase);
    console.log(userChoices);
  }

  /*user selects 2 options */
  else if (confirmNumber && confirmSpecial){
    userChoices = number.concat(special);
    console.log(userChoices);

  }
  else if (confirmNumber && confirmlowerCase){
    userChoices = number.concat(lowerCase);
    console.log(userChoices);

  }
  else if (confirmNumber && confirmupperCase){
    userChoices = number.concat(upperCase);
    console.log(userChoices);

  }
  else if (confirmSpecial && confirmlowerCase){
    userChoices = special.concat(lowerCase);
    console.log(userChoices);

  }
  else if (confirmSpecial && confirmupperCase){
    userChoices = special.concat(upperCase);
    console.log(userChoices);

  }
  else if (confirmlowerCase && confirmupperCase) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }
  /*user chooses 1 option*/
  else if(confirmNumber) {
    userChoices = number;
    console.log(userChoices);
  }
  else if(confirmSpecial) {
    userChoices = special;
    console.log(userChoices);
  }
  else if(confirmlowerCase) {
    userChoices = lowerCase;
    console.log(userChoices);
  }
  else if(confirmupperCase) {
    userChoices = blankupper.concat(upperCase);
    console.log(userChoices);
  };

  var passwordBlank = []; 
  /*create loop to make random choice */
  for (var i = 0; i < length; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }
  /*password is created */
  var password = passwordBlank.join("");
  console.log("new password: " + password);
  return password;








  
}

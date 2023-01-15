// Assignment Code
var generateBtn = document.querySelector("#generate");

// Array of characters that can be used for the password
var number = "0123456789";
var lower = "abcdefghijklmnopqrstuvwxyz";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var special = "!#$%&*+-:;<=>?@^_~";

function generatePassword() {
  var randomPassword = "";
  var choices = "";
  var confirmLength = prompt("How many characters would you like in your password?");
  
  // Prompts user until they select a number between 8 & 128
  while (confirmLength < 8 || confirmLength > 128) {
    alert("Password length must be between 8-128 characters.");
    return generatePassword();
  }

  // Confirms with user what characters to include in the password
  var confirmNumber = confirm("Click OK if you would like to include numbers in your password.");
  var confirmLower = confirm("Click OK if you would like to include lowercase letters in your password.");
  var confirmUpper = confirm("Click OK if you would like uppercase letters in your password.");
  var confirmSpecial = confirm("Click OK if you would like special characters in your password.");

  // Prompts user to select a parameter if all choices were denied
  while (confirmNumber === false && confirmLower === false && confirmUpper === false && confirmSpecial === false) {
    alert("You must select a parameter.")
    return generatePassword();
  }

  // Checks to see what user selected
  if (confirmNumber) {
    choices += number;
  }
  if (confirmLower) {
    choices += lower;
  }
  if (confirmUpper) {
    choices += upper;
  }
  if (confirmSpecial) {
    choices += special;
  }

  // Generates password based on user choices
  for (var i = 0; i < confirmLength; i++) {
    randomPassword += choices.charAt(Math.floor(Math.random() * choices.length));
  }

  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
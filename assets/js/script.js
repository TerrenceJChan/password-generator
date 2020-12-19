// Assignment code here


var charPool = "";
var passwordString = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  charPool = "";
  passwordString = "";
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Logic for generating password
function generatePassword() {
  var lowercaseBox = document.getElementById("lowercase").checked;
  var uppercaseBox = document.getElementById("uppercase").checked;
  var symbolsBox = document.getElementById("symbols").checked;
  var numbersBox = document.getElementById("numbers").checked;
  var length = document.getElementById("length").value;

  if (lowercaseBox === true) {
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    charPool = charPool + lowercaseChars;
    passwordString = passwordString + lowercaseChars.charAt(randomNumber(lowercaseChars.length + 1));
    length--;
  }

  if (uppercaseBox === true) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    charPool = charPool + uppercaseChars;
    passwordString = passwordString + uppercaseChars.charAt(randomNumber(uppercaseChars.length + 1));
    length--;
  }

  if (symbolsBox === true) {
    const symbolChars = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
    charPool = charPool + symbolChars;
    passwordString = passwordString + symbolChars.charAt(randomNumber(symbolChars.length + 1));
    length--;
  }

  if (numbersBox === true) {
    const numberChars = "0123456789";
    charPool = charPool + numberChars;
    passwordString = passwordString + numberChars.charAt(randomNumber(numberChars.length + 1));
    length--;
  }

  for (i = length; i != 0; i--) {
    passwordString = passwordString + charPool.charAt(randomNumber(charPool.length + 1));
  }

  return passwordString;
}

// Get random number with maximum limit specified
function randomNumber(x) {
  return Math.floor(Math.random() * x);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

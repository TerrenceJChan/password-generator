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
    passwordString = passwordString + lowercaseChars.charAt(randomNumber(lowercaseChars.length));
    length--;
  }

  if (uppercaseBox === true) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    charPool = charPool + uppercaseChars;
    passwordString = passwordString + uppercaseChars.charAt(randomNumber(uppercaseChars.length));
    length--;
  }

  if (symbolsBox === true) {
    const symbolChars = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
    charPool = charPool + symbolChars;
    passwordString = passwordString + symbolChars.charAt(randomNumber(symbolChars.length));
    length--;
  }
  console.log(passwordString);
  if (numbersBox === true) {
    const numberChars = "0123456789";
    charPool = charPool + numberChars;
    passwordString = passwordString + numberChars.charAt(randomNumber(numberChars.length));
    length--;
  }
  console.log(passwordString);
  for (i = length; i != 0; i--) {
    passwordString = passwordString + charPool.charAt(randomNumber(charPool.length));
  }
  console.log(passwordString);
  return randomizer();
}

// Get random number with maximum limit specified
function randomNumber(x) {
  return Math.floor(Math.random() * x);
}

// Further randomizes password string
function randomizer() {
  var splitString = passwordString.split('');
  var splitLength = splitString.length;
  var randomizedString = "";

  // Durstenfeld sort method
  for (i = splitLength - 1; i > -1; i--) {
    var j = Math.floor(Math.random() * i);
    var tempChar = splitString[i];
    splitString[i] = splitString[j];
    splitString[j] = tempChar;
  }

  for (i = splitLength - 1; i > -1; i--) {
    randomizedString = randomizedString + splitString[i];
  }

  return randomizedString;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

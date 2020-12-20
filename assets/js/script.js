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
  alert("You will be presented with five prompts to set the criteria for your desired password. Please confirm if you would like to have: lowercase letters, uppercase letters, symbols, numbers, and how long you would like your password to be.");
  var lowercaseBox = confirm("Would you like to have lowercase letters in your password?");
  var uppercaseBox = confirm("Would you like to have uppercase letters in your password?");
  var symbolsBox = confirm("Would you like to have symbols in your password?");
  var numbersBox = confirm("Would you like to have numbers in your password?");

  var length = 0;

  while (length < 8 || length > 128 || Number.isInteger(length) === false) {
    length = parseInt(prompt("Please enter the length of your password. The length of your password must be between 8 to 128 characters long."));
    console.log(length);
    if (length < 8 || length > 128 || Number.isInteger(length) === false) {
      alert("Your input is invalid. Please enter an integer between 8 to 128");
      console.log(length);
    }
  }


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

  if (numbersBox === true) {
    const numberChars = "0123456789";
    charPool = charPool + numberChars;
    passwordString = passwordString + numberChars.charAt(randomNumber(numberChars.length));
    length--;
  }

  for (i = length; i != 0; i--) {
    passwordString = passwordString + charPool.charAt(randomNumber(charPool.length));
  }

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

  // Durstenfeld shuffle method
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

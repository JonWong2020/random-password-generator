// Assignment Code
var generateBtn = document.querySelector("#generate");

// function to obtain random number
function randomInt(min, max) {
  return Math.floor(Math.random()*(max-min) + min)
}

// function to obtain a random character from the random number that was generated
function getRandomChar(list) {
  return list[randomInt(0, list.length - 1)]
}

// function w/prompts for password criteria
function generatePassword() {
  var userInput = window.prompt("How long would you like your password to be?");

  var passwordLenth = parseInt(userInput);

  if (isNaN(passwordLenth)) {
    window.alert("Please enter a number.");
    return;
  }

  if (passwordLenth < 8 || passwordLenth > 128) {
    window.alert("Password lenth must be between 8 and 128 characters");
    return;
  }

//confirmation statements 
  var userSymbols = window.confirm("Would you like speical characters? Ex. !, ?, /, etc.");
  var userLowercase = window.confirm("Would you like lowercase letters?");
  var userUppercase = window.confirm("Would you like UPPERCASE letters?");
  var userNumbers = window.confirm("Would you like numbers?");
 
// variables for symbols, numbers and letters
  var symbols = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperCase = [];
  var numbers = "0123456789".split("");

  var criteriaArray = [];

  // Loop to pull from large array
  for (var i = 0; i < lowerCase.length; i++) {
    upperCase[i] = lowerCase[i].toUpperCase();
  }

  if (userSymbols === true) {
    criteriaArray.push(symbols);
  }

  if (userLowercase === true) {
    criteriaArray.push(lowerCase);
  }

  if (userUppercase === true) {
    criteriaArray.push(upperCase);
  }

  if (userNumbers === true) {
    criteriaArray.push(numbers);
  }

  if (criteriaArray.length === 0) {
    criteriaArray.push(numbers);
  }

  var userPassword = ""

  for (var i = 0; i <passwordLenth; i++) {
    var randomList = getRandomChar(criteriaArray);
    var randomChar = getRandomChar(randomList);
    userPassword += randomChar;
  }
  
  return userPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

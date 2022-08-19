// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var userInput = window.prompt("How long would you like your password to be?");

  
  var userInput = window.prompt("Would you like speical characters? Ex. !, ?, /, etc.");
  var userInput = window.prompt("Would you like lowercase letters?");
  var userInput = window.prompt("Would you like UPPERCASE letters?");
  var userInput = window.prompt("Would you like numbers?")
 
}
// variables for characters, numbers and letters
// var specialChar = ["!", "U+0022", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "U+005C", "]", "^", "_", "`", "{", "|", "}", "~"];
// var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
// var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
// var numbers = "0123456789".split("");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

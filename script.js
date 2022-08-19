// Assignment Code
var generateBtn = document.querySelector("#generate");

// function w/prompts for password criteria
function generatePassword() {
  var userInput = window.prompt("How long would you like your password to be?");

  var passwordLenth = parseInt(userInput)

  if (isNaN(passwordLenth)) {
    window.alert("Please enter a nubmer.")
    return
  }

  if (passwordLenth < 8 || passwordLenth > 128) {
    window.alert("Password lenth must be between 8 and 128 characters")
    return
  }

//confirmation statements 
  var userSymbols = window.confirm("Would you like speical characters? Ex. !, ?, /, etc.");
  var userLowercase = window.confirm("Would you like lowercase letters?");
  var userUppercase = window.confirm("Would you like UPPERCASE letters?");
  var userNumbers = window.confirm("Would you like numbers?")
 
// variables for symbols, numbers and letters
  var symbols = ["!", "U+0022", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "U+005C", "]", "^", "_", "`", "{", "|", "}", "~"];
  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var numbers = "0123456789".split("");

  for (var i = 0; i < lowerCase.length; i++) {
    upperCase[i] = lowerCase[i].toUpperCase()
  }



}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

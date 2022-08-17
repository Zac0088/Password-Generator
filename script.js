// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var uppercase = []
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
var specialCharacters = ['+', '-', '!', '@', '#', '%', '&', '*', '?']

function generatePassword() {
  var passwordLength = window.prompt("Enter desired password length");
  
  if (passwordLength < 8 || passwordLength > 128) {
    console.log("invalid")
    window.alert("To generate password please choose a number beyween 8 and 128.")
    return;
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

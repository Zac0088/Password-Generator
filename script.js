// Assignment Co
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = []
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
var specialCharacters = ['+', '-', '!', '@', '#', '%', '&', '*', '?']
var newPassword = lowerCase + upperCase + numbers + specialCharacters;


function generatePassword() {
  var passwordLength = window.prompt(
    "Enter desired password length."
  );

  if (passwordLength < 8 || passwordLength > 128) {
    console.log("invalid")
    window.alert("To generate password please choose a number beyween 8 and 128.");
    return generatePassword();
  }
  if (passwordLength >= 8 && passwordLength <= 128) {
    var lowerCaseConfirm = window.confirm("Include lowercase letters? (ook for yes, cancel for no)");
    var upperCaseConfirm = window.confirm("Include upperclase letters?(ok for yes, cancel for no)");
    var specialCharactersConfirm = window.confirm("Include special characters?(ok for yes, cancel for no)");
    var numbersConfirm = window.confirm("Include numbers?(ok for yes, cancel for no)");
  }

  var password = "";
  for (var index = 0; index < passwordLength; index++) {
    var trueRandom =
      newPassword[Math.floor(Math.random() * newPassword.passwordLength)];
    password += trueRandom;
  }
  return password;
}






  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

  }



  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);


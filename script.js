// Assignment Co
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = []
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
var specialCharacters = ['+', '-', '!', '@', '#', '%', '&', '*', '?']
var newPass = "";


function generatePassword(length) {
  var passwordLength = window.prompt("Enter desired password length");

  if (passwordLength < 8 || passwordLength > 128) {
    console.log("invalid")
    window.alert("To generate password please choose a number beyween 8 and 128.");
    return;
  }

  var lowerCaseConfirm = window.confirm("Include lowercase letters? (ook for yes, cancel for no)");
  var upperCaseConfirm = window.confirm("Include upperclase letters?(ok for yes, cancel for no)");
  var specialCharactersConfirm = window.confirm("Include special characters?(ok for yes, cancel for no)");
  var numbersConfirm = window.confirm("Include numbers?(ok for yes, cancel for no)");

  console.log(lowerCaseConfirm, upperCaseConfirm, specialCharactersConfirm, numbersConfirm)

  for (index = 0; index < passwordLength; i++) {
    if (newPassword.passwordLength < passwordLength)
    if (lowerCaseConfirm){
      newPass += lowerCase[Math.floor(math.random() * lowerCase.length)];
    }if (upperCaseConfirm) {
      newPass += upperCase[math.floor(math.random() * upperCase.length)];
    } if (specialCharactersConfirm) {
      newPass += specialCharacters[math.floor(math.random() * specialCharacters.length)];
    } if (numbersConfirm) {
      newPass += numbers[math.floor(math.random() * numbers.length)];
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
  }
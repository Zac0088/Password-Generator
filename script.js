// Assignment Co
var generateBtn = document.querySelector("#generate");
var lowerCase = ['a', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var upperCase = ['ABCDEFGHIjKLMNOPQRSTUVWXYZ']
var numbers = ['0123456789']
var specialCharacters = ['+-!@#%&*?']

var newPassword = lowerCase + upperCase + numbers + specialCharacters;


function generatePassword() {
  var passwordLength = window.prompt(
    "Enter desired password length."
  );

  if (passwordLength < 8 || passwordLength > 128) {

    window.alert("To generate password please choose a number beyween 8 and 128.");
    return generatePassword();
  }


  var lowerCaseConfirm = window.confirm("Include lowercase letters? (ook for yes, cancel for no)")
  if (lowerCaseConfirm) {
    console.log("true");
  } else {
    console.log("false");
  }
  var upperCaseConfirm = window.confirm("Include upperclase letters?(ok for yes, cancel for no)")
  if (upperCaseConfirm) {
    console.log("true");
  } else {
    console.log("false");
  }
  var specialCharactersConfirm = window.confirm("Include special characters?(ok for yes, cancel for no)")
  if (specialCharactersConfirm) {
    console.log("true");
  } else {
    console.log("false");
  }
  var numbersConfirm = window.confirm("Include numbers?(ok for yes, cancel for no)")
  if (numbersConfirm) {
    console.log("true");
  } else {
    console.log("false");
  }
  if ((lowerCaseConfirm) && (upperCaseConfirm) && (specialCharactersConfirm) && (numbersConfirm)) {
    let result = "";
    for (let index = 0; index < passwordLength; index++) {
      result += (lowerCase + upperCase + numbers + specialCharacters).charAt(Math.floor(Math.random() * (lowerCase + upperCase + numbers + specialCharacters).length));
    }
    return result;
    }
   else if ((!lowerCaseConfirm) && (upperCaseConfirm) && (specialCharactersConfirm) && (numbersConfirm)) {
      let result ="";
      for (let index=0; index < passwordLength; index++) {
        result += (lowerCase + upperCase + numbers + specialCharacters).charAt(Math.floor(Math.random() * (lowerCase + upperCase + numbers + specialCharacters).length));
      }
      return result;
    }
    else if ((lowerCaseConfirm) && (!upperCaseConfirm) && (specialCharactersConfirm) && (numbersConfirm)) {
      let result ="";
      for (let index=0; index < passwordLength; index++) {
        result += (lowerCase + upperCase + numbers + specialCharacters).charAt(Math.floor(Math.random() * (lowerCase + upperCase + numbers + specialCharacters).length));
      }
      return result;
    }
    else if ((lowerCaseConfirm) && (upperCaseConfirm) && (!specialCharactersConfirm) && (numbersConfirm)) {
      let result ="";
      for (let index=0; index < passwordLength; index++) {
        result += (lowerCase + upperCase + numbers + specialCharacters).charAt(Math.floor(Math.random() * (lowerCase + upperCase + numbers + specialCharacters).length));
      }
      return result;
    }
    else if ((lowerCaseConfirm) && (upperCaseConfirm) && (specialCharactersConfirm) && (!numbersConfirm)) {
      let result ="";
      for (let index=0; index < passwordLength; index++) {
        result += (lowerCase + upperCase + numbers + specialCharacters).charAt(Math.floor(Math.random() * (lowerCase + upperCase + numbers + specialCharacters).length));
      }
      return result;
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


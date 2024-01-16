// Assignment code here
var insertLength
var lowerCase
var upperCase
var numericChar
var specialChar


function generatePassword(){;
  insertLength = window.prompt("Enter password length (between 8 and 128 characters)");

  if (insertLength < 8 || insertLength > 128) {;
    window.alert("Please enter a length between 8 and 128 characters.");  
}

lowerCase = window.confirm("Do you want to include lowercase characters?");
upperCase = window.confirm("Do you want to include uppercase characters?");
numericChar = window.confirm("Do you want to include numeric characters?");
specialChar = window.confirm("Do you want to include special characters?");

lowerCase = "abcdefghijklmnopqrstuvwxyz"
upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
numericChar = "1234567890"
specialChar = "!?#$%._"

var index = Math.floor(Math.random() * options.length);
var computer = options[index];



}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


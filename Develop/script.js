// Assignment code here
function generatePassword() {
  var length = prompt("Enter desired length of the password (between 8 and 128 characters):");
  
  //this helps create the length
  if (length < 8 || length > 128 || isNaN(length)) {
      alert("Please enter a length between 8 and 128 characters.");
      return;
  }

  var lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharacters = "1234567890";
  var specialCharacters= "!@#$%?";


  var lowercaseCharacters = confirm("Include lowercase characters?");
  var uppercaseCharacters = confirm("Include uppercase characters?");
  var numericCharacters = confirm("Include numeric characters?");
  var specialCharacters = confirm("Include special characters?");

  if (lowercaseCharacters == false)
  print ("Select a valid character")

  if (uppercaseCharacters == false)
  print ("Select a valid character")

  if (numericCharacters == false)
  print ("Select a valid character")

  if (specialCharacters == false)
  print ("Select a valid character")

  




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

}
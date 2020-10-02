// Assignment Code
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
// var password = generatePassword();
//var passwordText = document.querySelector("#password");

//passwordText.value = password;
//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword());
//var generateBtn = document.querySelector("#generate");

var length = prompt(
  "choose a length of at least 8 characters and no more than 128 characters"
);

while (true) {
  var length = prompt(
    "choose a length of at least 8 characters and no more than 128 characters"
  );
  if (length >= 8 && length <= 128) {
    break;
  }
}

var lowercase = confirm("Would you like to include lowercase letters?");
console.log(lowercase);
var uppercase = confirm("Would you like to include uppercase letters?");
console.log(uppercase);
var numeric = confirm("Would you like numerical values?");
console.log(numeric);
var special = confirm("Would you like to include special characters?");
console.log(special);

function stringGen(len) {
  var text = " ";

  var charset = "abcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < len; i++)
    text += charset.charAt(Math.floor(Math.random() * charset.length));

  return text;
}
alert(stringGen(length));

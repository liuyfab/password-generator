
var specialCharArray=["!", "#", "%", "&", "(", ")", "[", "]", "{", "}", ".", ";", ":", "*", "-", "+", "/", "=", "\\", "?","'","~","_"];
var numberArray=["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var lowerCaseArray=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ]
var upperCaseArray=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

function chooseCriteria() {
  var passwordLength=parseInt(window.prompt ("Choose your password length: \nbetween 8 and 128 characters?"))
  console.log(passwordLength)

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Pick a number between 8-128")
    chooseCriteria();
  }

  // if(passwordLength >= 8 || <=128)  create confirm for specialChar,numeric,lowercase,uppercase.
  
  var specialChar = window.confirm ("Do you want special characters?") 
  var numeric = window.confirm ("Do you want numeric characters?")
  var lowerCase = window.confirm ("Do you want lower case letters?")
  var upperCase = window.confirm ("Do you want upper case letters?")
  console.log(specialChar)

  if (specialChar === false && numeric === false && lowerCase === false && upperCase === false) {
    window.alert("Please choose at least one character type")
  chooseCriteria()
  return;
  }else{
    var userChoices={
      length: passwordLength,
      special: specialChar,
      lower: lowerCase,
      upper: upperCase,
      numbers: numeric
    }
  }
  console.log(userChoices)
return userChoices
}

function random (arr) {
  var index = Math.floor(Math.random()* arr.length)
  var element = arr[index]
  return element
}
console.log(random(upperCaseArray))

function generatePassword() {
  var choices = chooseCriteria()
  var finalResult = []
  var possibleChar = []
  var guaranteeChar = []
  if(choices.special) {
    possibleChar= possibleChar.concat(specialCharArray)
    guaranteeChar.push(random(specialCharArray))
  }
  if(choices.lower) {
    possibleChar= possibleChar.concat(lowerCaseArray)
    guaranteeChar.push(random(lowerCaseArray))
  }
  if(choices.upper) {
    possibleChar= possibleChar.concat(upperCaseArray)
    guaranteeChar.push(random(upperCaseArray))
  }
  if(choices.numbers) {
    possibleChar= possibleChar.concat(numberArray)
    guaranteeChar.push(random(numberArray))
  }

  for(var i = 0; i < choices.length; i++) {
    var character = random(possibleChar)
    finalResult.push(character)
  }

  for(var i = 0; i < guaranteeChar.length; i++) {
    finalResult[i] = guaranteeChar[i]
  }
  return finalResult.join("")

}
// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


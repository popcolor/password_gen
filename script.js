var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", genBtn);

function genBtn() {
  while (true) {
    var promptLength = prompt(
      "choose a length of at least 8 characters and no more than 128 characters"
    );
    if (promptLength >= 8 && promptLength <= 128) {
      break;
    }
  }

  var lowercaseAnswer = confirm("Would you like to include lowercase letters?");
  console.log(lowercaseAnswer);
  var uppercaseAnswer = confirm("Would you like to include uppercase letters?");
  console.log(uppercaseAnswer);
  var numericAnswer = confirm("Would you like numerical values?");
  console.log(numericAnswer);
  var specialAnswer = confirm("Would you like to include special characters?");
  console.log(specialAnswer);
  var settings = {
    LC: lowercaseAnswer,
    UC: uppercaseAnswer,
    NM: numericAnswer,
    SA: specialAnswer,
    PL: promptLength,
  };
  console.log(settings);

  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var special = "~`!@#$%^&*()_+-={}[]";

  function makeid() {
    var text = "";
    var possible = "";

    if (settings.LC) {
      possible += lowercase;
    }
    if (settings.UC) {
      possible += uppercase;
    }
    if (settings.NM) {
      possible += numbers;
    }
    if (settings.SA) {
      possible += special;
    }

    for (var i = 0; i < settings.PL; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    alert(text);
    console.log(text.length);

    return text;
  }

  makeid();
}



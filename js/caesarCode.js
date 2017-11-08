function getDistance () {
  return document.getElementById("distance").value;
}
function getInputText () {
  return document.getElementById("input").value;
}

function CaesarCode (distance, inputText) {
  var newString = '';
  distance = distance % 26;
  for (var i = 0; i < inputText.length; i++) {
    if( inputText.charCodeAt(i) >= 97 && inputText.charCodeAt(i) <=122 ) {
      var newCharCode = inputText.charCodeAt(i) + distance;
      (newCharCode > 122) ?
        newString = newString.concat(String.fromCharCode(newCharCode - 26)) :
        newString = newString.concat(String.fromCharCode(newCharCode));
    } else {
      newString = newString.concat(inputText[i]);
    }
  }
  return newString;
}

function deCaesarCode () {
  debugger
  var distance = Number(getDistance());
  var inputText = getInputText();
  var outPutText = CaesarCode(distance, inputText);

  document.getElementById("output").innerHTML = outPutText;
}

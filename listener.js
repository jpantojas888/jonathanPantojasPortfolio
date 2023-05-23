function switchModes(){
  var darkMode = document.getElementById('greyMode');
  var lightMode = document.getElementById('lightMode');
  var isDarkEnabled = darkMode.disabled === false;

  if (isDarkEnabled) {
    darkMode.disabled = true;
    lightMode.disabled = false;
  } else {
    darkMode.disabled = false;
    lightMode.disabled = true;
  }

}
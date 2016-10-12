// If no-js is in tag, replace it with js
var docElement = document.documentElement, jsClassName = ["js"], classes = docElement.className.replace(/(^|\s)no-js(\s|$)/, "").split(" ").concat(jsClassName);
docElement.className = classes.join(" ");

function setMainFrame(setFrameTo, isStudentPage, elementToSetActive) {
  var oldActiveClass = document.getElementsByClassName("active")[0];
  var main_iFrame = document.getElementById("main_iFrame");
  var setActive;

  if (typeof (elementToSetActive) == 'string'){
    setActive = document.getElementById(elementToSetActive);
  } else {
    if (!!elementToSetActive) { setActive = elementToSetActive.parentNode; }
  }

  if (isStudentPage) { main_iFrame.src = "studentPages/" + setFrameTo + "/index.html"; } else { main_iFrame.src = setFrameTo; }
  if (!!setActive) { setActive.className += " active"; }
  if (!!oldActiveClass) { oldActiveClass.className = oldActiveClass.className.replace('active',''); }
}

function getURLParam(name) {
  // http://stackoverflow.com/a/11582513/1709894
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

function isURL(str) {
  var regex = new RegExp('^(http|https)://'); // Test if is HTTP or HTTPS url
  if (regex.test(str)) { return true; }
  return false;
}

function handleParams() {
  var siteName = getURLParam('site');
  if (isURL(siteName)) {
    setMainFrame(siteName, false, null);
  }
}

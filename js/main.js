// If no-js is in tag, replace it with js
var docElement = document.documentElement, jsClassName = ["js"], classes = docElement.className.replace(/(^|\s)no-js(\s|$)/, "").split(" ").concat(jsClassName);
docElement.className = classes.join(" ");

function setMainFrame(setFrameTo, isStudentPage, elementToSetActive) {
  var oldActiveClass = document.getElementsByClassName("active")[0];
  if (isStudentPage) {
    document.getElementById("main_iFrame").src = "studentPages/" + setFrameTo + "/index.html";
  } else {
    document.getElementById("main_iFrame").src = setFrameTo + ".html";
  }
  oldActiveClass.className = oldActiveClass.className.replace('active','');
  //if (elementToSetActive='homeBtn') {document.getElementById("homeBtn")}
  if (typeof(elementToSetActive) == 'string'){ document.getElementById(elementToSetActive).className = "active"; } else { elementToSetActive.parentNode.className = "active"; }
}

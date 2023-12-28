function changeTag(element, newTag) {
    var newElement = document.createElement(newTag);
    [...element.attributes].forEach(attr => { newElement.setAttribute(attr.nodeName, attr.nodeValue) });
    element.parentNode.replaceChild(newElement, element);
}

var parentElement = document.getElementById("ph_studid1").parentElement;
changeTag(parentElement.childNodes[3], "input");
parentElement.childNodes[3].setAttribute("autocomplete", "username");

var loginButton = document.getElementById("loginbtn");
loginButton.setAttribute("script", "var username = document.getElementById('text_studid1').value; document.getElementById('showstudid').children[1].value = username; checkform(2)");

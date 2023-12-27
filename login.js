function changeTag(element, newTag) {
    var newElement = document.createElement(newTag);
    [...element.attributes].forEach(attr => { newElement.setAttribute(attr.nodeName, attr.nodeValue) });
    element.parentNode.replaceChild(newElement, element);
}

var parentElement = document.getElementById("ph_studid1").parentElement;
changeTag(parentElement.childNodes[3], "input");
parentElement.childNodes[3].setAttribute("autocomplete", "username");

//new Promise(resolve => setTimeout(resolve, 1000)).then(() => {
    //var username = parentElement.parentElement.childNodes[3].getAttribute("value");
//    changeTag(parentElement.childNodes[3], "div");
//});

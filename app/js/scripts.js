window.onload = function () {
  setSpacerHeight();
}

window.onresize = function () {
  setSpacerHeight();
}

function setSpacerHeight() {

var element = document.getElementById('header'),
    style = window.getComputedStyle(element),
    headerHeight = style.getPropertyValue('height');

console.log(headerHeight);

document.getElementById('spacer').setAttribute('style','height:' + headerHeight);

};



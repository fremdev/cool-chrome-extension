var controlBox = document.getElementsByClassName("bottom-left")[0];
var targetBox = document.getElementsByClassName("bottom-right")[0];
controlBox.addEventListener("click", function() {
  targetBox.remove();
});

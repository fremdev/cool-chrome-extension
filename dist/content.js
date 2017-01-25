var controlBox = document.getElementsByClassName("bottom-left")[0];
var targetBox = document.getElementsByClassName("bottom-right")[0];
var title = document.getElementsByClassName("title")[0];
controlBox.addEventListener("click", function() {
  targetBox.remove();
  title.innerHTML = "OMG?! Did you see it, guys?! It was magic!"
});

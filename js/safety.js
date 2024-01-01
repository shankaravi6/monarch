var one = document.getElementById("bone");
var two = document.getElementById("btwo");
var three = document.getElementById("bthree");

function setOne(event) {
  one.style.display = "block";
  two.style.display = "none";
  three.style.display = "none";
}

function setTwo(event) {
  one.style.display = "none";
  two.style.display = "block";
  three.style.display = "none";
}

function setThree(event) {
  one.style.display = "none";
  two.style.display = "none";
  three.style.display = "block";
}

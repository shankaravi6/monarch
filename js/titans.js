function setTitan(name) {
  var tab1 = document.getElementById("tab1");
  var tab2 = document.getElementById("tab2");
  var tab3 = document.getElementById("tab3");
  var tab4 = document.getElementById("tab4");
  var tab5 = document.getElementById("tab5");

  if (name == "godzilla") {
    tab1.style.display = "flex";
    tab2.style.display = "none";
    tab3.style.display = "none";
    tab4.style.display = "none";
    tab5.style.display = "none";
  }

  if (name == "kong") {
    tab1.style.display = "none";
    tab2.style.display = "flex";
    tab3.style.display = "none";
    tab4.style.display = "none";
    tab5.style.display = "none";
  }

  if (name == "vark") {
    tab1.style.display = "none";
    tab2.style.display = "none";
    tab3.style.display = "flex";
    tab4.style.display = "none";
    tab5.style.display = "none";
  }

  if (name == "ghidorah") {
    tab1.style.display = "none";
    tab2.style.display = "none";
    tab3.style.display = "none";
    tab4.style.display = "flex";
    tab5.style.display = "none";
  }

  if (name == "ion") {
    tab1.style.display = "none";
    tab2.style.display = "none";
    tab3.style.display = "none";
    tab4.style.display = "none";
    tab5.style.display = "flex";
  }
}

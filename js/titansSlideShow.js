let slideIndexT = 1;
showSlidesT(slideIndexT);

function plusSlidesT(nT) {
  showSlidesT((slideIndexT += nT));
}

function currentSlideT(nT) {
  showSlidesT((slideIndexT = nT));
}

function showSlidesT(nT) {
  let iT;
  let slidesT = document.getElementsByClassName("mySlidesT");
  let dotsT = document.getElementsByClassName("dot");
  if (nT > slidesT.length) {
    slideIndexT = 1;
  }
  if (nT < 1) {
    slideIndexT = slidesT.length;
  }
  for (iT = 0; iT < slidesT.length; iT++) {
    slidesT[iT].style.display = "none";
  }
  for (iT = 0; iT < dotsT.length; i++) {
    dotsT[iT].className = dotsT[iT].className.replace(" active", "");
  }
  slidesT[slideIndexT - 1].style.display = "block";
}

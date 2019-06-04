var photo = document.getElementById("rowed");
const work = document.getElementById("roll")
const btnWork = document.getElementById("wor");
const btnPhoto = document.getElementById("phot")
var i= 0;

works = () => {

    photo.style.display = "none";
    work.style.display = "flex";
    btnWork.style.background = "black";
    btnWork.style.color = "white";
    btnPhoto.style.background = "white";
    btnPhoto.style.color = "black";

  
}

photos = () => {

    photo.style.display = "flex";
    work.style.display = "none";
    btnWork.style.background = "white";
    btnWork.style.color = "black";
    btnPhoto.style.background = "black";
    btnPhoto.style.color = "white";

}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  } 
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}



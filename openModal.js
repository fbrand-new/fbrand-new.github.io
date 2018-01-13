var numOfImages = 4;

 // Open the Modal
 function openModal() {
   document.getElementById('myModal').style.display = "flex";
   modals[slideIndex-1].style.display = "flex";
 }

// Close the Modal
 function closeModal() {
   document.getElementById('myModal').style.display = "none";
   modals[slideIndex-1].style.display = "none";
 }

var slides = document.getElementsByClassName("mySlides");
var slideIndex = 1;
showSlides(slideIndex);

var modals = document.querySelectorAll(".modal-image");
// Next/previous controls

function fwd_transition(){
  // var slides = document.getElementsByClassName("mySlides");
  slides[slideIndex-1].style.opacity = "0";
  if(slideIndex == numOfImages) {slides[0].style.opacity = "0";}
  if(slideIndex < numOfImages) {slides[slideIndex].style.opacity = "0";}
  setTimeout(plusSlides_one,500);
  setTimeout(transitionEnd,1000);
  
}

function bck_transition(){
  slides[slideIndex-1].style.opacity = "0";
  if(slideIndex == 1) {slides[slides.length - 1].style.opacity = "0";}
  if(slideIndex > 1) {slides[slideIndex - 2].style.opacity = "0";}
  setTimeout(minusSlides_one,500);
  setTimeout(transitionEnd,1000);
}

function transitionEnd(){
  slides[slideIndex-1].style.opacity = "1";
}

function plusSlides_one(){
  plusSlides(1);
  // var slides = document.getElementsByClassName("mySlides");
  // slides[slideIndex-1].style.opacity = "1";
}

function minusSlides_one(){
  plusSlides(-1);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// function automaticShowSlides(){

//   var slides = document.getElementsByClassName("mySlides");

//   for(k = 0;k < slides.length; k++)
//   {
//     var timer = setInterval(showSlides(k),1000);
//   }
// }


function showSlides(n) {
  var i;
  // var slides = document.getElementsByClassName("mySlides");
  // var dots = document.getElementsByClassName("demo");
  // var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    // modals[i].style.display = "none";
    // slides[i].style.opacity = "0";
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace(" active", "");
  // }
  slides[slideIndex-1].style.display = "flex";
  // modals[slideIndex-1].style.display = "flex";
  // slides[slideIndex-1].style.opacity = "1";
  // slides[slideIndex-1].style.opacity = "0.5";
  // slides[slideIndex+numOfImages-1].style.display = "flex"; 
}



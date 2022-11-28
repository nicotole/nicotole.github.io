//Working

let hamburgerMenu = document.querySelector('.hamburgerNavbar');
let body = document.querySelector('body');
let counterNumber = document.querySelector('.count');
let divSpinner = document.querySelector('.divSpinner');
let done = false;
let used = false;
let time = 5; //In seconds
let count = 0; //Start number
let target = 100; //Last number
let firstInterval = setInterval(counter, time*1000 / target); 

function counter(){
  if(count >= target){
      clearInterval(firstInterval);     //Counter logic
  }
  counterNumber.innerHTML = count;
  count++;
}

setInterval(() => {
  if(done == false){
    hamburgerMenu.style.display = "flex";
    body.style.overflow = "visible";                //Fade effect
    divSpinner.style.opacity = "0";             
    divSpinner.style.transition = "opacity 2s"
    done = true;
  }
}, time*1000);

setInterval(() => {
  if(used==false){
    body.removeChild(divSpinner);      //Clean spinner content
    used = true;
  }
}, time*1300);


function suscribedAlert(){
  alert('Usted recibirá las últimas novedades en su correo.');
}

//Carrousel

let prev = document.querySelector("#prev");
let prev2 = document.querySelector("#prev2");
let prev3 = document.querySelector("#prev3");

let next = document.querySelector("#next");
let next2 = document.querySelector("#next2");
let next3 = document.querySelector("#next3");

let carousel = document.querySelector("#carousel-container");
let carousel2 = document.querySelector("#carousel-container2");
let carousel3 = document.querySelector("#carousel-container3");

let track = document.querySelector("#track");
let track2 = document.querySelector("#track2");
let track3 = document.querySelector("#track3");

let width = carousel.offsetWidth;
let width2 = carousel2.offsetWidth;
let width3 = carousel3.offsetWidth;

let index = 0;
let index2 = 0;
let index3 = 0;

window.addEventListener("resize", function () {
  width = carousel.offsetWidth;
  width2 = carousel2.offsetWidth;
  width3 = carousel3.offsetWidth;
});

//First carousel

next.addEventListener("click", function (e) {
  e.preventDefault();
  index = index + 1;
  prev.classList.add("show");
  track.style.transform = "translateX(" + index * (-width/4) + "px)";
  if ((track.offsetWidth - index * (width/4)) < (index * (width/8))) {
    next.classList.add("hide");
  }
});

prev.addEventListener("click", function () {
  index = index - 1;
  next.classList.remove("hide");
  if (index === 0) {
    prev.classList.remove("show");
  }
  track.style.transform = "translateX(" + index * (-width/4) + "px)";
});

track.offsetWidth - index * width < index * width


//Second carousel

next2.addEventListener("click", function (e) {
  e.preventDefault();
  index2 = index2 + 1;
  prev2.classList.add("show");
  track2.style.transform = "translateX(" + index2 * (-width2/4) + "px)";
  if ((track2.offsetWidth - index2 * (width2/4)) < (index2 * (width2/8))) {
    next2.classList.add("hide");
  }
});

prev2.addEventListener("click", function () {
  index2 = index2 - 1;
  next2.classList.remove("hide");
  if (index2 === 0) {
    prev2.classList.remove("show");
  }
  track2.style.transform = "translateX(" + index2 * (-width2/4) + "px)";
});

track2.offsetWidth - index2 * width2 < index2 * width2


//Third carousel

next3.addEventListener("click", function (e) {
  e.preventDefault();
  index3 = index3 + 1;
  prev3.classList.add("show");
  track3.style.transform = "translateX(" + index3 * (-width3/4) + "px)";
  if ((track3.offsetWidth - index3 * (width3/4)) < (index3 * (width3/8))) {
    next3.classList.add("hide");
  }
});

prev3.addEventListener("click", function () {
  index3 = index3 - 1;
  next3.classList.remove("hide");
  if (index3 === 0) {
    prev3.classList.remove("show");
  }
  track3.style.transform = "translateX(" + index3 * (-width3/4) + "px)";
});

track3.offsetWidth - index3 * width3 < index3 * width3

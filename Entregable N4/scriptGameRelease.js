//For add a new card, you have to work with an array of cards and a new span that represents the new element
let card1 = document.querySelector('.card1');
let card2 = document.querySelector('.card2');
let card3 = document.querySelector('.card3');
let span1 = document.querySelector('.span1');
let span2 = document.querySelector('.span2');
let span3 = document.querySelector('.span3');
let cards = [];
let spans = [];

cards.push(card1);
cards.push(card2);
cards.push(card3);

spans.push(span1);
spans.push(span2);
spans.push(span3);


function showPrevious(n) {
    if (n == cards.length - 1) { //I'm in the first card and I want go to the lastone
        cards[0].style.display = "none";
        spans[0].style.borderTop = "4px solid #612490";
        cards[cards.length - 1].style.display = "flex";
        spans[spans.length - 1].style.borderTop = "4px solid #36065A";
    } else {
        cards[n + 1].style.display = "none";
        spans[n + 1].style.borderTop = "4px solid #612490";
        cards[n].style.display = "flex";
        spans[n].style.borderTop = "4px solid #36065A";
    }
}

function showNext(n) {
    if (n == 0) {     //I'm in the last card and I want go to the firstone
        cards[0].style.display = "flex";
        spans[0].style.borderTop = "4px solid #36065A";
        cards[cards.length - 1].style.display = "none";
        spans[spans.length - 1].style.borderTop = "4px solid #612490";
    } else {      
        cards[n - 1].style.display = "none";
        spans[n - 1].style.borderTop = "4px solid #612490";
        cards[n].style.display = "flex";
        spans[n].style.borderTop = "4px solid #36065A";
    }

}


let title = document.querySelector('.gameReleaseH1');
let test = document.querySelector('.charactersContainer');

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 1) {
    title.classList.add("hide-title");
  }else if (document.documentElement.scrollTop <= 0){
    title.classList.remove("hide-title");
  }
}

// ------------------------------- ej 6

let sectionOne = document.querySelector(".featuresContainer");
let sectionTwo = document.querySelector(".secondContainer");

const options = {};


const observer = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting){
      sectionOne.classList.add("gameReleaseFeaturesAction");
    }
  });
}, options);

observer.observe(sectionOne);


//-------------------------- historia

let faders = document.querySelectorAll(".fade-in");
let sliders = document.querySelectorAll(".slide-in");
let slidersUp = document.querySelectorAll(".slide-up");

let historytext1 = document.querySelector("#history-text-1");
let historytext2 = document.querySelector("#history-text-2");
let historytext3 = document.querySelector("#history-text-3");

let historyCard1 = document.querySelector("#history-card-1");
let historyCard2 = document.querySelector("#history-card-2");
let historyCard3 = document.querySelector("#history-card-3");

// let trailer = document.querySelector("#trailer");
let historyImg1 = document.querySelector("#history-img-1");
let historyImg3 = document.querySelector("#history-img-3");
let historyParagraph1 = document.querySelector("#history-paragraph-1");
let historyParagraph3 = document.querySelector("#history-paragraph-3");

let containerCharacters = document.querySelectorAll(
  "article.characters .container-characters"
);
let characters = document.querySelectorAll("article.characters ul");

window.addEventListener("scroll", scrollAppear);

function scrollAppear() {
  faders.forEach((fader) => {
    let top = fader.getBoundingClientRect().top;
    let bottom = fader.getBoundingClientRect().bottom;
    let scroll = window.innerHeight - window.innerHeight / 2;
    if (top < scroll) {
      fader.classList.add("appear");
    } else {
      fader.classList.remove("appear");
    }
  });

  sliders.forEach((slider) => {
    let top = slider.getBoundingClientRect().top;
    let bottom = slider.getBoundingClientRect().bottom;
    let scroll = window.innerHeight;
    if (top >= 0 && bottom <= scroll) {
      slider.classList.add("appear");
    }
  });

  let position = window.innerHeight - window.innerHeight / 2;
  let topPosition = historytext1.getBoundingClientRect().top;
  let topPosition1 = historytext2.getBoundingClientRect().top;
  let topPosition2 = historytext3.getBoundingClientRect().top;


  if (topPosition < position) {
    historyCard1.classList.add("showContent");
    historytext1.classList.remove("fade-in");
    if (historyCard2.classList.contains("showContent")) {
      historyCard2.classList.remove("showContent");
      historytext2.classList.add("fade-in");
    }
  } else {
    historyImg1.classList.remove("appear");
    historyParagraph1.classList.remove("appear");
  }

  if (topPosition1 < position) {
    historyCard1.classList.remove("showContent");
    historytext1.classList.add("fade-in");
    historyCard2.classList.add("showContent");
    historytext2.classList.remove("fade-in");
    if (historyCard3.classList.contains("showContent")) {
      historyCard3.classList.remove("showContent");
      historytext3.classList.add("fade-in");
    }
  }

  if (topPosition2 < position) {
    historyCard2.classList.remove("showContent");
    historytext2.classList.add("fade-in");
    historyCard3.classList.add("showContent");
    historytext3.classList.remove("fade-in");
  }

  if (topTrailer < position) {
    historyImg3.classList.remove("appear");
    historyParagraph3.classList.remove("appear");
  }

  slidersUp.forEach((slider) => {
    let top = slider.getBoundingClientRect().top;
    let scroll = window.innerHeight;
    if (top < scroll) {
      slider.classList.add("appear");
    }
  });
}


// -------------------

let container = document.querySelector("#meny");
const toggle = document.querySelector("#menyAvPaa");
toggle.addEventListener("click", function() {
  console.log("click al nav menu!!! ");
  console.log(container);
  if (!container.classList.contains("meny--open")){
    container.classList.add("meny--open");
  } else {
    container.classList.remove("meny--open");
  }
//-------------------- ej 9


let sectionChar = document.querySelector(".character1");
let sectionChar2 = document.querySelector(".character2");
let sectionChar3 = document.querySelector(".character3");


const options1 = {};


const observer1 = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    console.log(entry);
    if (entry.isIntersecting){
      sectionChar.classList.add("gameReleaseCharacterAction");
      sectionChar2.classList.add("gameReleaseCharacterAction")
      sectionChar3.classList.add("gameReleaseCharacterAction")
    }else{
      sectionChar.classList.remove("gameReleaseCharacterAction");
      sectionChar2.classList.remove("gameReleaseCharacterAction")
      sectionChar3.classList.remove("gameReleaseCharacterAction")
    }
  });
}, options);

observer1.observe(sectionChar);


  

});


let nn = document.querySelector('#navbar');

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 50) {
    nn.classList.add("sticky");
  }else{
    nn.classList.remove("sticky");
  } 
}
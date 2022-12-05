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

window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.documentElement.scrollTop > 80) {
    title.classList.add("hide-title");
  }else{
    title.classList.remove("hide-title");
  } 
}

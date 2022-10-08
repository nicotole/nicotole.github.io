//Working

let body = document.querySelector('body');
let counter = document.querySelector('.count');
let divSpinner = document.querySelector('.divSpinner');
let i = 0; 

(function draw() {
  if(i <= 100) {
    var r = Math.random();
    
    requestAnimationFrame(draw);  
    counter.innerHTML = Math.round(i) + '%';
    
    if(r < 0.9) { 
      i = i + r;
    }

  }else{
    body.removeChild(divSpinner);
    body.style.overflow = "visible";
  } 
})();




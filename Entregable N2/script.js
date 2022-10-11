//Working


let body = document.querySelector('body');
let counterNumber = document.querySelector('.count');
let divSpinner = document.querySelector('.divSpinner');
let done = false;
let used = false;
let time = 0; //In seconds
let count = 0; //Start number
let target = 100-2; //Last number - fade
let firstInterval = setInterval(counter, time*1000 / target); 

function counter(){
  if(count > target){
      clearInterval(firstInterval);     //Counter logic
  }
  count++;
  counterNumber.innerHTML = count;
}

setInterval(() => {
  if(done == false){
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



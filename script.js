//Working


let body = document.querySelector('body');
let counterNumber = document.querySelector('.count');
let divSpinner = document.querySelector('.divSpinner');
let done = false;
let time = 1; //In seconds
let count = 0; //Start number
let target = 100; //Last number
let firstInterval = setInterval(counter, time*1000 / target);

function counter(){
  if(count > target){
      clearInterval(firstInterval);
  }
  count++;
  counterNumber.innerHTML = count;
}

setInterval(() => {
  if(done == false){
    body.removeChild(divSpinner);
    body.style.overflow = "visible";
    done = true;
  }
}, time*1000);






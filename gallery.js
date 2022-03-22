let img = document.querySelector("#img_galleri");
let arrowRight = document.querySelector("#arrow_right");
let arrowLeft = document.querySelector("#arrow_left");
let myNumber = 1;

window.addEventListener("DOMContentLoaded", start);

function start() {
  img.classList.add("pic" + myNumber);
  console.log(myNumber);

  arrowRight.addEventListener("click", clickNext);
  arrowLeft.addEventListener("click", clickPrevious);
}

function clickNext() {
  img.classList = "";
  img.classList.add("pic" + myNumber++);

//   if (myNumber >= maxnumber+1) myNumber = minnumber;
}

function clickPrevious() {

  img.classList = "";
  img.classList.add("pic" + myNumber--);


//   if (myNumber <= minnumber-1) myNumber = maxnumber;
}

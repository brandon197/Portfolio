const navSlide = () => {
  console.log("toggle");
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-list-mobile");
  const navLink = document.querySelectorAll(".nav-list-mobile li");

  if (burger) {
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
    });
    navLink.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
    });
  }
};


let i = 0;
let txt = 'Brandon Chan';
let speed = 120;

const typeWriter = () => {
  console.log("init");
  
  if (i < txt.length) {
    document.querySelector(".typing").innerHTML += txt.charAt(i);
    //console.log('here:',i,txt.charAt(i));
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onscroll = function() {progress()};
function progress() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


typeWriter();
navSlide();


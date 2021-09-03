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

navSlide();

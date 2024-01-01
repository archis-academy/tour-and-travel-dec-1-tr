const hamburger = document.querySelector(".hamburger");
const heroNavbar = document.querySelector(".hero-navbar");

hamburger.addEventListener("click", function () {
  heroNavbar.classList.toggle("active");
});

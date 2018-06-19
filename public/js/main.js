var hamburger = document.querySelector(".hamburger-icon");
var mobile = document.querySelector(".mobile");



console.log("Javascript is working");


hamburger.addEventListener("click", function() {
  mobile.classList.toggle("display");
});
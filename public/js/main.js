var hamburger = document.querySelector(".hamburger-icon");
var mobile = document.querySelector(".mobile");
var liDropdown = document.querySelectorAll(".mobile li");

console.log("Javascript is working");

hamburger.addEventListener("click", function() {
  console.log(liDropdown);
  console.log("Clicked");
  mobile.classList.toggle("display");
  liDropdown.forEach(function(li) {
    li.classList.toggle("display");
  });
});
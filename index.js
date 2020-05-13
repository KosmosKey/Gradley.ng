// Const variables
const listButtons = document.querySelectorAll(".listButtons button");
const responsiveNavIcon = document.querySelector(".responsiveNavIcon");
const closeButton = document.querySelector(".fa-times");
const navSide = document.querySelector(".navSide");
const overlay = document.getElementById("overlay");

// EventHandler for overlay
overlay.addEventListener("click", function () {
  navSide.classList.remove("active");
  overlay.classList.remove("active");
});

// EventHandler for the closeButton (the SideNav)
closeButton.addEventListener("click", function () {
  navSide.classList.remove("active");
  overlay.classList.remove("active");
});

// EventHandler for opening (the SideNav)
responsiveNavIcon.addEventListener("click", function () {
  navSide.classList.add("active");
  overlay.classList.add("active");
});

// Foreach function for Buttons (My account, Payment & Billings and etc.)
listButtons.forEach((button) => {
  button.addEventListener("click", function () {
    listButtons.forEach((buttons) => {
      buttons.classList.remove("active");
    });
    button.classList.add("active");
  });
});

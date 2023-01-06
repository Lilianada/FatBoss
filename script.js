//header
const toggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".hamburger-list");
const navLinks = document.querySelectorAll(".navItem");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("change");
  navList.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("active");
  });
});

//Onclick for games Images
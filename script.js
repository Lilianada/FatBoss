//header
const toggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".hamburger-list");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("change");
  navLinks.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("active");
  });
});

//Onclick for games Images
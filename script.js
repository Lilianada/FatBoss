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

//Onclick for Select language
const selected = document.querySelector(".select-containerg");
const selectList = document.querySelector("select-list");

selected.addEventListener("click", () => {
  selectList.classList.toggle("show");
  console.log("clicked");
});

//Onclick for games Images
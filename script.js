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
// Mobile
const selectedBox = document.querySelector(".select-container");
const selectList = document.querySelector(".select-list");
const selected = document.querySelector(".selected-text");
const selectedImg = document.querySelector(".selected-img");

selectedBox.addEventListener("click", () => {
  selectList.classList.toggle("show");
  console.log("clicked");
});

selectList.addEventListener("click", (e) => {
  const text = e.target.querySelector(".text");
  const img = e.target.querySelector("img");

  selected.innerHTML = text.innerHTML;
  selectedImg.src = img.src;
  e.preventDefault();
});

// Desktop
const selectedItem = document.querySelector(".select-wrapper");
const selectDropdown = document.querySelector(".select-dropdown");
const imgSelected = document.querySelector("#imgSelected");
const selectedText = document.querySelector("#langText");

selectedItem.addEventListener("click", () => {
  selectDropdown.classList.toggle("show");
  console.log("clicked");
});

selectDropdown.addEventListener("click", (e) => {
  const selectedText = e.target.querySelector("#langText");
  const imgSelected = e.target.querySelector("#imgSelected");

  selectedText.innerHTML = lang.innerHTML;
  imgSelected.src = img.src;
  e.preventDefault();
});

//Onclick for games Images
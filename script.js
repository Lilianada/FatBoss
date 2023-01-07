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
const selectedBox = document.querySelector(".select-container");
const selected = document.querySelector(".selected-text");
const selectList = document.querySelector(".select-list");
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

// const selectedItem = document.querySelector(".select-wrapper");
// const selectDropdown = document.querySelector(".select-dropdown");

// selectedItem.addEventListener("click", () => {
//   selectDropdown.classList.toggle("show");
//   console.log("clicked");
// });

//Onclick for games Images
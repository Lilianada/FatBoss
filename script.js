//header
let toggle = document.querySelector('.nav-toggle');
let navList = document.querySelector('.hamburger-list');
let navLinks = document.querySelectorAll('.navItem');

// Add event listener to toggle button
toggle.addEventListener('click', () => {
  toggle.classList.toggle('change');
  navList.classList.toggle('active');
});

// Add event listener to each nav link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('active');
  });
});

// Mobile language select
let selectedBox = document.querySelector('.select-container');
let selectList = document.querySelector('.select-list');
let selected = document.querySelector('.selected-text');
let selectedImg = document.querySelector('.selected-img');

// Add event listener to mobile language select container
selectedBox.addEventListener('click', () => {
  selectList.classList.toggle('show');
});

// Add event listener to mobile language select list
selectList.addEventListener('click', (e) => {
  selected.innerHTML = e.target.textContent;
  selectedImg.src = e.target.firstElementChild.src;
  e.preventDefault();
});

// Desktop language select
let selectedItem = document.querySelector('.select-wrapper');
let selectDropdown = document.querySelector('.select-dropdown');
let imgSelected = document.querySelector('#imgSelected');
let selectedText = document.querySelector('#langText');

// Add event listener to desktop language select container
selectedItem.addEventListener('click', () => {
  selectDropdown.classList.toggle('show');
});

// Add event listener to desktop language select list
selectDropdown.addEventListener('click', (e) => {
  selectedText.innerHTML = e.target.textContent;
  imgSelected.src = e.target.firstElementChild.src;
  e.preventDefault();
});

//Popup modal
var array = [
  {
    id: 1,
    name: "Anna	Nowak",
    price: "3,500.00",
    game: "RIP City",
  },
  {
    id: 2,
    name: "Maria	Kowalski",
    price: "1500.00",
    game: "Big Bass Bonanza",
  },
  {
    id: 3,
    name: "Jan	Wiśniewski",
    price: "500.00",
    game: "Megaways Mob",
  },
  {
    id: 4,
    name: "Piotr	Wójcik",
    price: "5,000.00",
    game: "Temple of Wealth",
  },
  {
    id: 5,
    name: "Kazimierz	Kowalczyk",
    price: "13,500.00",
    game: "Napoleon vs Rabbits",
  },
  {
    id: 6,
    name: "Andrzej	Kamiński",
    price: "3,000.00",
    game: "RIP City",
  },
  {
    id: 7,
    name: "Magdalena	Grabowski",
    price: "10,500.00",
    game: "Craps",
  },
  {
    id: 8,
    name: "Krzysztof	Nowakowski",
    price: "30,500.00",
    game: "Hit the Bank",
  },
  {
    id: 9,
    name: "Ewa	Lewandowski",
    price: "7,500.00",
    game: "RIP City",
  },
  {
    id: 10,
    name: "Stanislaw	Szymański",
    price: "8,000.00",
    game: "Big Bass Bonanza",
  },
  {
    id: 11,
    name: "Joanna	Woźniak",
    price: "10,000.00",
    game: "Blackjack",
  },
{
  id: 12,
  name: "Marta	Dąbrowski",
  price: "900.00",
  game: "Net Gains",
},
{
  id: 13,
  name: "Jerzy	Kozłowski",
  price: "500.00",
  game: "Power of Thor",
},
{
  id: 14,
  name: "Emilia	Nowacki",
  price: "700.00",
  game: "Wild Yield",
},
{
  id: 15,
  name: "Jozef	Szewczyk",
  price: "500.00",
  game: "Money Train 3",
},
{
  id: 16,
  name: "Cezary	Zalewski",
  price: "400.00",
  game: "Athena Ascending",
},
{
  id: 17,
  name: "Mariusz	Lis",
  price: "300.00",
  game: "Chaos Crew",
},
{
  id: 18,
  name: "Grzegorz	Kalinowski",
  price: "500.00",
  game: "Rock Bottom",
},
{
  id: 19,
  name: "Wojciech	Wasilewski",
  price: "700.00",
  game: "Extra Win X",
},
{
  id: 20,
  name: "Iwona	Adamski",
  price: "800.00",
  game: "Rise of Dead",
},
{
  id: 21,
  name: "Marek	Baran",
  price: "4,500.00",
  game: "Aqua Lord",
},
{
  id: 22,
  name: "Bogdan	Sikora",
  price: "1,500.00",
  game: "Pearl Harbor",
},
{
  id: 23,
  name: "Katarzyna	Ratajczak",
  price: "500.00",
  game: "The Dog House",
},
{
  id: 24,
  name: "Henryk	Górski",
  price: "3,500.00",
  game: "Fury of Odin Megaways",
},
{
  id: 25,
  name: "Jadwiga	Krajewski",
  price: "2,500.00",
  game: "Rise of Dead",
}
];

const popup = document.querySelector(".popup-section");
const userName = document.getElementById("userName");
const gameName = document.getElementById("gameName");
const amount = document.getElementById("amount");

let id = setInterval(function () {
  var random = array[Math.floor(Math.random() * array.length)];
  userName.innerHTML = random.name + " " + 'won';
  gameName.innerHTML = random.game;
  amount.innerHTML = random.price;
  popup.classList.add("show-popup");
  setTimeout(() => {
    if (popup.classList.contains("show-popup")) {
      popup.classList.remove("show-popup");
    }
  }, 10000);
}, 16000);
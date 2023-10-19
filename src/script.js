///Chall 1

function formatDate() {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[now.getDay()];

  let hours = now.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day}, ${hours}:${minutes}`;
}
let now = new Date();
let h2 = document.querySelector("h2");
h2.innerHTML = formatDate();

///Chall 2
function refresh(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#city-input").value;
  searchInput =
    searchInput.charAt(0).toUpperCase() +
    searchInput.substring(1).toLowerCase();

  let city = document.querySelector("#city");

  if (searchInput) {
    city.innerHTML = searchInput;
  } else {
    city.innerHTML = null;
    alert("Please type a city name");
  }
}

let form = document.querySelector("#city-form");
form.addEventListener("submit", refresh);

///Bonus
let celsiusTemp = 18;
let farenheitTemp = Math.round((celsiusTemp * 9) / 5 + 32);

function convertToCelsius() {
  let temp = document.querySelector("#temp");
  temp.innerHTML = celsiusTemp;
}
function convertToFarenheit() {
  let temp = document.querySelector("#temp");
  temp.innerHTML = farenheitTemp;
}
// Bonus feature
let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", convertToCelsius);

let farenheit = document.querySelector("#farenheit");
farenheit.addEventListener("click", convertToFarenheit);

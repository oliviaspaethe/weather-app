// Display current date

let now = new Date();

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

let hour = now.getHours();
let minutes = now.getMinutes();

let date = document.querySelector(".current-date");
date.innerHTML = `${day} ${hour}:${minutes}`;

// Display search result city + temperature

function displayCurrentWeather(response) {
  document.querySelector(".current-city").innerHTML = response.data.name;
  document.querySelector(".current-temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector(".current-weather").innerHTML =
    response.data.weather[0].main;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function search(city) {
  let apiKey = "31bf6c8133210444d285ffe2a24e7beb";
  let unit = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(displayCurrentWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#search-bar").value;
  search(city);
}

let searchBar = document.querySelector("#search-form");
searchBar.addEventListener("submit", handleSubmit);

search("London");

/* bonus feature

function celFormat(event) {
  event.preventDefault();
  let displayCel = document.querySelector(".current-temp");
  displayCel.innerHTML = `24`;
}

function farFormat(event) {
  event.preventDefault();
  let displayCel = document.querySelector(".current-temp");
  displayCel.innerHTML = `16`;
}

let celsius = document.querySelector("#cel-temp");
celsius.addEventListener("click", celFormat);
let farenheit = document.querySelector("#far-temp");
farenheit.addEventListener("click", farFormat);
*/

const body = document.getElementsByTagName("body")[0];
console.log(body);
const card = document.createElement("div");
const search = document.createElement("div");
const searchBox = document.createElement("input");
const serachBtn = document.createElement("button");
const weather = document.createElement("div");
const tempreture = document.createElement("h1");
let cityName = document.createElement("h2");
const details = document.createElement("div");

function createCardLayout() {
  card.classList.add("card");
  card.style.border = "2px dotted #000";
  card.style.height = "80vh";
  card.style.width = "50vw";
  //   card.style.display = "flex";
  body.appendChild(card);

  // creating search div.
  search.classList.add("searchdiv");
  card.appendChild(search);
  //styling search div
  search.style.display = "flex";
  search.style.height = "10vh";
  search.style.width = "100%";

  searchBox.placeholder = "Enter city name";
  //style input box
  searchBox.style.height = "50px";
  searchBox.style.width = "100%";
  serachBtn.textContent = "click here";

  //style search btn
  serachBtn.style.height = "50px";
  //   serachBtn.style.width = "25%";
  serachBtn.style.borderRadius = "15%";
  //add childnode to search div
  search.appendChild(searchBox);
  search.appendChild(serachBtn);

  //create div sibling to search div.
  weather.classList.add("weather");
  //styling weather
  weather.style.border = "2px dotted yellow";
  weather.style.height = "65vh";
  card.appendChild(weather);
  // h1 for displaying tempreture.
  tempreture.classList.add("tempreture");
  tempreture.textContent = "20 °C";
  weather.appendChild(tempreture);

  //h2 for displaying city name.
  cityName.classList.add("cityName");
  cityName.textContent = "solapur";
  tempreture.insertAdjacentElement("afterend", cityName);
}

createCardLayout(cityName);

async function fetchWeatherData() {
  const URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
  const apiKey = "ddfbc197ad5d17455d8123c1e9b68d20";

  const response = await fetch(URL + cityName + `&appid=${apiKey}`);
  const data = await response.json();
  console.log(data);
}

function getCityName() {
  serachBtn.addEventListener("click", function () {
    cityName = searchBox.value;
    fetchWeatherData(cityName);
  });
}
getCityName();

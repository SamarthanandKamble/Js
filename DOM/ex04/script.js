const body = document.getElementsByTagName("body")[0];
console.log(body);
const card = document.createElement("div");
const search = document.createElement("div");
const searchBox = document.createElement("input");
const serachBtn = document.createElement("button");
const weather = document.createElement("div");
const tempreture = document.createElement("h1");
const cityName = document.createElement("h2");
const details = document.createElement("div");

function createCardLayout() {
  card.style.border = "2px dotted #000";
  card.style.height = "80vh";
  card.style.width = "50vw";
  card.style.display = "flex";

  body.appendChild(card);
}

createCardLayout();

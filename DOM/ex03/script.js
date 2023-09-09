const cntr = document.querySelector("#container");
const heading3 = document.createElement("h3");
const cardContainer = document.createElement("div");

function createCard(data) {
  cardContainer.style.display = "flex";
  cardContainer.style.height = "100%";
  cardContainer.style.width = "100%";
  cardContainer.style.flexWrap = "wrap";
  cardContainer.style.justifyContent = "space-around";
  cardContainer.style.alignItems = "center";
  cardContainer.style.alignContent = "space-around";
  cardContainer.style.flexDirection = "row";

  cntr.appendChild(cardContainer);

  data.forEach((element) => {
    var div = document.createElement("div");
    div.style.height = "200px";
    div.style.width = "200px";
    div.style.margin = "10px";
    div.style.padding = "10px";
    div.style.border = "1px solid #000";
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    cardContainer.appendChild(div);
    p1.innerHTML = `Username : ${element.username}`;
    p2.innerHTML = `Name : ${element.name}`;
    p3.innerHTML = `Website : ${element.website}`;
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
  });
}

function fetchUsersData() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (data) {
      return data.json();
    })
    .then(function (data) {
      console.log(data);
      createCard(data);
    });
}
fetchUsersData();

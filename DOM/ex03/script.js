const cntr = document.querySelector("#container");
const heading3 = document.createElement("h3");
function createCard(data) {
  data.forEach((element) => {
    var div = document.createElement("div");
    cntr.appendChild(div);
    div.style.display = "flex";
    div.style.flexDirection = "row";
    div.style.height = "200px";
    div.style.width = "200px";
    div.style.border = "2px solid #000";
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerHTML = element.username;
    p2.innerHTML = element.name;
    p3.innerHTML = element.website;
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

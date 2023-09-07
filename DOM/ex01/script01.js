const rootElement = document.querySelector("#root");
const circle = document.createElement("div");
const bulbBtn = document.createElement("button");

function createCirle() {
  circle.style.border = "2px solid #000";
  circle.style.borderRadius = "50%";
  circle.style.height = "200px";
  circle.style.width = "200px";
  rootElement.appendChild(circle);
}

function createButton() {
  bulbBtn.textContent = "OFF";
  rootElement.appendChild(bulbBtn);
}

createCirle();
createButton();

bulbBtn.addEventListener("click", function () {
  if (bulbBtn.innerText === "OFF") {
    circle.style.background = "yellow";
    bulbBtn.innerText = "ON";
  } else {
    circle.style.background = "white";
    bulbBtn.innerText = "OFF";
  }
});

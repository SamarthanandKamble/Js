let cntDiv = document.querySelector("#cnt-div");
cntDiv[0].addEventListener("mouseenter", (e) => {
  console.log("Mouse enter", e);
});

cntDiv.addEventListener("mouseover", (e) => {
  console.log(e.target.innerText);
});

cntDiv.addEventListener("mouseleave", () =>
  console.log("Mouse leave triggered")
);

cntDiv.addEventListener("mouseout", (e) => console.log(e));

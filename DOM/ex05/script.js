const container = document.querySelector("#container");
const searchDiv = document.createElement("div");
const inputBox = document.createElement("input");
const searchBtn = document.createElement("button");
const taskDiv = document.createElement("div");
const ul = document.createElement("ul");
let p = document.createElement("p");
let tasks = [];

function createContainer() {
  searchDiv.classList.add("searchDiv");
  searchDiv.style.height = "80vh";
  searchDiv.style.width = "40vw";
  searchDiv.style.border = "2px dotted yellow";
  container.style.width = "100%";
  container.appendChild(searchDiv);

  inputBox.style.height = "10vh";
  inputBox.style.width = "80%";
  inputBox.style.fontSize = "800";
  searchDiv.appendChild(inputBox);

  searchBtn.style.height = "10vh";
  searchBtn.style.width = "20%";
  searchBtn.textContent = "Search";
  searchDiv.appendChild(searchBtn);

  taskDiv.style.border = "2px dotted red";
  taskDiv.style.height = "60vh";
  taskDiv.style.width = "100%";
  taskDiv.style.display = "flex";
  searchDiv.appendChild(taskDiv);
}
createContainer();

function generateTask() {
  searchBtn.addEventListener("click", function () {
    tasks.push(inputBox.value);
    addTaskList(inputBox.value);
  });
}
generateTask();

function addTaskList(task) {
  let li = document.createElement("li");
  let taskDoneBtn = document.createElement("button");
  taskDoneBtn.textContent = "done";
  let taskEditBtn = document.createElement("button");
  taskEditBtn.textContent = "edit";
  li.classList.add("task");
  li.textContent = task;
  ul.appendChild(li);
  taskDiv.appendChild(ul);
  taskDiv.appendChild(taskDoneBtn);
  taskDiv.appendChild(taskEditBtn);
}

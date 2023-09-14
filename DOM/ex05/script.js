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

  taskDiv.classList.add = "taskListDiv";
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
    inputBox.value = "";
  });
}
generateTask();

function addTaskList(task) {
  let li = document.createElement("li");
  li.textContent = task;
  li.classList.add("task");
  let taskDoneBtn = document.createElement("button");
  let taskEditBtn = document.createElement("button");
  taskDoneBtn.classList.add = "taskListDoneBtn";
  taskEditBtn.classList.add = "taskListEditBtn";
  taskDoneBtn.textContent = "done";
  taskEditBtn.textContent = "edit";
  li.appendChild(taskEditBtn);
  li.appendChild(taskDoneBtn);
  ul.appendChild(li);
  taskDiv.appendChild(ul);

  ul.style.width = "100%";
  li.style.textAlign = "start";
  li.style.padding = "5px";
  ul.style.padding = "5px";
  taskDoneBtn.style.padding = "2px";
  taskEditBtn.style.padding = "2px";
}

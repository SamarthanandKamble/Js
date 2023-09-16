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

  searchBtn.type = "submit";
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
  taskDoneBtn.classList.add("taskListDoneBtn");
  taskEditBtn.classList.add("taskListEditBtn");
  taskDoneBtn.textContent = "Done";
  taskEditBtn.textContent = "Edit";
  let taskListDiv = document.createElement("div");
  taskListDiv.classList.add("taskListdiv");
  taskListDiv.style.display = "flex";
  taskListDiv.appendChild(li);
  taskListDiv.appendChild(taskEditBtn);
  taskListDiv.appendChild(taskDoneBtn);
  ul.appendChild(taskListDiv);
  taskDiv.appendChild(ul);
  li.insertAdjacentElement("afterend", taskEditBtn);
  li.insertAdjacentElement("afterend", taskDoneBtn);

  ul.style.width = "100%";
  li.style.textAlign = "start";
  li.style.padding = "5px";
  ul.style.padding = "5px";
  taskDoneBtn.style.padding = "2px";
  taskEditBtn.style.padding = "2px";
  taskDoneBtn.style.margin = "2px";
  taskEditBtn.style.margin = "2px";

  taskDoneBtn.addEventListener("click", () => markTodoDone(taskListDiv));
  taskEditBtn.addEventListener("click", () => editTheTask(taskListDiv));
}

function markTodoDone(item) {
  item.remove();
}

function editTheTask(itemDiv) {
  itemDiv.children[2].textContent = "Update";
  let editTaskInputBox = document.createElement("input");
  itemDiv.children[0].appendChild(editTaskInputBox);
  // itemDiv.children[0].textContent = "";
  itemDiv.children[2].addEventListener("click", function (e) {
    console.log(e.target.value);
    let updatedtask = editTaskInputBox.value;
    console.log(updatedtask);
    itemDiv.firstChild.textContent = updatedtask;
    itemDiv.firstChild.style.display = "block";
    itemDiv.children[2].textContent = "Edit";
  });
}

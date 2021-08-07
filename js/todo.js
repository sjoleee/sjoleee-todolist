const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentNode;
  li.remove();
  toDos = toDos.filter((todo) => todo.id != li.id);
  saveToDos();
  if (toDos.length <= 8 && toDos.length >= 1) {
    toDoForm.classList.remove("hidden");
  }
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  const checkButton = document.createElement("input");
  const checkLabel = document.createElement("label");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", deleteToDo);
  checkButton.type = "checkbox";
  checkButton.id = Math.random();
  checkLabel.htmlFor = checkButton.id;
  checkButton.addEventListener("click", checkToDo);
  span.innerText = newToDo.text;
  toDoList.appendChild(li);
  li.appendChild(checkButton);
  li.appendChild(checkLabel);
  li.appendChild(span);
  li.appendChild(deleteButton);
}

function checkToDo(event) {
  const li = event.target.parentNode;
  const span = li.querySelector("span");
  span.classList.toggle("check");
}

function handleToDoSubmit(event) {
  event.preventDefault();
  if (toDos.length >= 8) {
    toDoForm.classList.add("hidden");
    alert("That's enough!");
    return;
  }
  const newToDo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  //   for (let x of parsedToDos) {
  //     paintToDo(x);
  //   }
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

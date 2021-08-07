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
}

function checkToDo(event) {
  const li = event.target.parentNode;
  li.classList.toggle("check");
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;
  const span = document.createElement("span");
  const checkButton = document.createElement("input");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "❌";
  deleteButton.addEventListener("click", deleteToDo);
  checkButton.type = "checkbox";
  checkButton.addEventListener("click", checkToDo);
  span.innerText = newToDo.text;
  toDoList.appendChild(li);
  li.appendChild(checkButton);
  li.appendChild(span);
  li.appendChild(deleteButton);
}

function handleToDoSubmit(event) {
  event.preventDefault();
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

const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("#todo-list");

function handleToDoSubmit(event) {
  event.preventDefult();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

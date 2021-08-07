const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const greetingDiv = document.querySelector("#greeting-div");
const greeting = document.querySelector("#greeting");
const greetingBtn = document.querySelector("#greeting-btn");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greetingBtn.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${username}`;
  document.querySelector("#todo-div").classList.remove("hidden");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
const changeForm = document.querySelector("#change-form");
const changeInput = document.querySelector("#change-form input");

function changeName(event) {
  greeting.classList.add(HIDDEN_CLASSNAME);
  greetingBtn.classList.add(HIDDEN_CLASSNAME);
  changeForm.classList.remove(HIDDEN_CLASSNAME);
}
greetingBtn.addEventListener("click", changeName);

function newName(event) {
  event.preventDefault();
  const newUsername = changeInput.value;
  localStorage.setItem(USERNAME_KEY, newUsername);
  paintGreetings(newUsername);
  changeForm.classList.add(HIDDEN_CLASSNAME);
}

changeForm.addEventListener("submit", newName);

if (savedUsername == null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

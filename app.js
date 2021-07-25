const h1 = document.querySelector("div.hello:first-child h1");

console.dir(h1);

function handleTitleClick() {
  h1.style.color = "blue";
}

function handleMouseEnter() {
  h1.innerText = "hi";
}

function handleMouseLeave() {
  h1.innerText = "bye";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}

function handleWindowCopy() {
  alert("copy");
}

function handleWindowPaste() {
  alert("paste");
}

h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseEnter);
h1.addEventListener("mouseleave", handleMouseLeave);

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("paste", handleWindowPaste);

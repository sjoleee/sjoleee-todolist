const images = [
  "0.jpeg",
  "1.jpeg",
  "2.jpeg",
  "3.jpeg",
  "4.jpeg",
  "5.jpeg",
  "6.jpeg",
  "7.jpeg",
  "8.jpeg",
  "9.jpeg",
  "10.jpeg",
  "11.jpeg",
  "12.jpeg",
];

const chosenImages = images[Math.floor(Math.random() * images.length)];

const bgDiv = document.createElement("div");
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImages}`;
bgImage.classList.add("bgImage");
bgDiv.appendChild(bgImage);
document.body.appendChild(bgDiv);
bgDiv.id = "bg-div";

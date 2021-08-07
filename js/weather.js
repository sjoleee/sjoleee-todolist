const API_KEY = "78b4f3b7884b0b3c0c1071f48d03e5fd";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const CurrentTemp = document.querySelector("#weather span:nth-child(3)");
      //   const betweenTemp = document.querySelector("#weather span:last-child");
      city.innerText = `@${data.name}`;
      weather.innerText = data.weather[0].main;
      CurrentTemp.innerText = `${Math.round(data.main.temp)}℃`;
      //   betweenTemp.innerText = `${Math.round(
      //     data.main.temp_min
      //   )}℃ ~ ${Math.round(data.main.temp_max)}℃`;
    });
}
function onGeoError() {
  alert("error");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

const apiKey = "1dc17ed28dc973d807a8aae20ed3096b";
const city = "New York";

const tempElement = document.querySelector(".temp");
const descriptionElement = document.querySelector(".description");
const locationElement = document.querySelector(".location");

// fetch weather data from API
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
  .then(response => response.json())
  .then(data => {
    tempElement.textContent = `${Math.round(data.main.temp)}\xB0F`;
    descriptionElement.textContent = data.weather[0].description;
    locationElement.textContent = `${data.name}, ${data.sys.country}`;

    const tempValue = data.main.temp;
    const tempContainer = document.querySelector(".temp-container");
    
    if (tempValue < 20) {
      tempContainer.style.backgroundColor = "#00a2ff";
    } else if (tempValue < 40) {
      tempContainer.style.backgroundColor = "#00c4ff";
    } else if (tempValue < 60) {
      tempContainer.style.backgroundColor = "#00eaff";
    } else if (tempValue < 80) {
      tempContainer.style.backgroundColor = "#fff700";
    } else {
      tempContainer.style.backgroundColor = "#ff1f00";
    }
  })
  .catch(error => {
    console.log(error);
  });

  

const apiKey = "0caeb87ecb4e756c1fc9bc9b21647bcf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + '&appid=' + apiKey);
    var data = await response.json();

    console.log(data);
    document.querySelector('.city-name').innerText = data.name;
    document.querySelector('.temperature').innerText = "Temperature: " + Math.round(data.main.temp) + "°C";
    document.querySelector('.pressure').innerText =  "Pressure: " + data.main.pressure + "hPa";
    document.querySelector('.humidity').innerText = "Humidity: " + data.main.humidity + "%";
    document.querySelector('.wind').innerText = "Wind: " + data.wind.speed + "km/h";
}

searchBtn.addEventListener('click', () => { 
    checkWeather(searchBox.value);
})


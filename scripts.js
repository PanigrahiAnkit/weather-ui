const apiKey = "0caeb87ecb4e756c1fc9bc9b21647bcf";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=kharar&units=metric"; 

async function checkWeather() {
    const response = await fetch(apiUrl + '&appid=' + apiKey);
    var data = await response.json();

    console.log(data);
    document.querySelector('.city-name').innerText = data.name;
    document.querySelector(".temperature").innerText = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerText = data.main.humidity + "%";
    document.querySelector('.wind').innerText = data.wind.speed + "km/h";


}

checkWeather();

const apiKey = "1c6d51ce955e20613ccb758381a4edc9";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weather = document.querySelector(".waetherrain");

async function checkWeather(city) {
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city},pk&appid=${apiKey}&units=metric`;

    const response = await fetch(apiurl);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } 
    else {
        let data = await response.json();
        // console.log(data);

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";


        // use distract method
        const mainweather = data.weather[0].main;

        if (mainweather == "Clouds") {
            weather.src = "./assets/images/cloud.png";
        } 
        else if (mainweather == "Clear") {
            weather.src = "./assets/images/clear.png";
        } 
        else if (mainweather == "Rain") {
            weather.src = "./assets/images/rain.png";
        } 
        else if (mainweather == "Snow") {
            weather.src = "./assets/images/snow.png";
        } 
        else if (mainweather == "Mist") {
            weather.src = "./assets/images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }
}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

checkWeather("Quetta");


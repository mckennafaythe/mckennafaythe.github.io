const apiWeather = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=376518d3f8cbf59c812b2a2aebacf5d7";

    fetch(apiWeather)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const wDescription = document.getElementById('description');
        const currentTemp = document.getElementById('curTemp');
        const humidityVal = document.getElementById('humidity');
        const windSpeedVal = document.getElementById('windSpeed');

        wDescription.innerHTML = jsObject.weather[0].description;
        currentTemp.innerHTML = jsObject.main.temp;
        humidityVal.innerHTML = jsObject.main.humidity;
        windSpeedVal.innerHTML = jsObject.wind.speed;

    });

 


  
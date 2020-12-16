const cozumelApiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.42&lon=-86.92&exclude=minutely,hourly&units=imperial&appid=376518d3f8cbf59c812b2a2aebacf5d7";

    fetch(cozumelApiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        //DISPLAY WEATHER ALERTS
        if (jsObject.hasOwnProperty('alerts')) {
            document.getElementById("messageText").textContent = jsObject.alerts.description;
            document.getElementById("displayMessage").style.display = "block";
        }

        //CURRENT WEATHER CONDITIONS
        const wDescription = document.getElementById('description');
        const currentTemp = document.getElementById('curTemp');
        const humidityVal = document.getElementById('humidity');

        wDescription.innerHTML = jsObject.current.weather[0].description;
        currentTemp.innerHTML = jsObject.current.temp;
        humidityVal.innerHTML = jsObject.current.humidity;

        //3 DAY WEATHER FORECAST
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        for (let i = 0; i < 3; i++) {
            let unix_timestamp = jsObject.daily[i].dt
            const date = new Date(unix_timestamp * 1000);
            const imageSrc = jsObject.daily[i].weather[0].icon;
            document.getElementById(`weekday${i+1}`).textContent = weekdays[date.getDay()];
            document.getElementById(`weatherIcon${i+1}`).setAttribute('src', 'http://openweathermap.org/img/wn/' + imageSrc + '.png');
            document.getElementById(`weatherIcon${i+1}`).setAttribute('alt', jsObject.daily[i].weather[0].description);
            document.getElementById(`forecast${i+1}`).textContent = jsObject.daily[i].temp.day;
        }

    });
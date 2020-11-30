const prestonApiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=376518d3f8cbf59c812b2a2aebacf5d7";

    fetch(prestonApiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const wDescription = document.getElementById('description');
        const currentTemp = document.getElementById('curTemp');
        const humidityVal = document.getElementById('humidity');
        const windSpeedVal = document.getElementById('windSpeed');

        wDescription.innerHTML = jsObject.weather[0].description;
        currentTemp.innerHTML = jsObject.main.temp;
        humidityVal.innerHTML = jsObject.main.humidity;
        windSpeedVal.innerHTML = jsObject.wind.speed;

        function windChill() {
            let t = parseFloat(document.getElementById('curTemp').innerHTML);
            let s = parseFloat(document.getElementById('windSpeed').innerHTML);
            let output = "N/A";
            if (t <= 50 && s > 3) {
                let f = (35.74 + (0.615*t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * (t * (Math.pow(s, 0.16))));
                output = Math.round(f);
            }
        
            document.getElementById("windChill").innerHTML = output;
        }
        
        windChill();

    });

 


  
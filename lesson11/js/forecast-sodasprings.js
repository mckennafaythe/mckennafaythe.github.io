const sodaSpringsApiLink = "https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=376518d3f8cbf59c812b2a2aebacf5d7";

fetch(sodaSpringsApiLink)
  .then((response) => response.json())
  .then((jsObject) => {

    const forecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    for (let i = 0; i < forecast.length; i++) {
        const d = new Date(forecast[i].dt_txt);
        const imageSrc = forecast[i].weather[0].icon;
        document.getElementById(`weekday${i+1}`).textContent = weekdays[d.getDay()];
        document.getElementById(`weatherIcon${i+1}`).setAttribute('src', 'http://openweathermap.org/img/wn/' + imageSrc + '.png');
        document.getElementById(`weatherIcon${i+1}`).setAttribute('alt', forecast[i].weather[0].description);
        document.getElementById(`forecast${i+1}`).textContent = forecast[i].main.temp;
    }

});
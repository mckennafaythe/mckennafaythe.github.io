const eventsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(eventsURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    
    for (let i = 0; i < towns.length; i++) {
        if (towns[i].name == "Soda Springs") {

          let townEvents = document.createElement('ul');

          for (let j = 0; j < towns[i].events.length; j++) {

            let townEvent = document.createElement('li');

            townEvent.textContent = towns[i].events[j];
        
            townEvents.appendChild(townEvent);

          }

          document.querySelector('div.upcomingEvents').appendChild(townEvents);

          break;
        }
    }
    });
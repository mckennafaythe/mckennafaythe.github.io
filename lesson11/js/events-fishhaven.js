const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    
    for (let i = 0;;) {
        if (towns[i].name == "Fish Haven") {

        let townEvents = document.createElement('ul');
        let event1 = document.createElement('li');
        let event2 = document.createElement('li');
        let event3 = document.createElement('li');
        let event4 = document.createElement('li');

        event1.textContent = towns[i].events[0];
    
        townEvents.appendChild(event1);
        townEvents.appendChild(event2);
        townEvents.appendChild(event3);
        townEvents.appendChild(event4);

        document.querySelector('div.upcomingEvents').appendChild(townEvents);

        }
    }
    });

   
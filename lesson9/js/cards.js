const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];
    
    for (let i = 0; i < towns.length; i++) {
        if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs") {

        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let motto = document.createElement('p');
        let yrFound = document.createElement('p');
        let pop = document.createElement('p');
        let rain = document.createElement('p');
        let image = document.createElement('img');

        h2.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        yrFound.textContent = 'Year Founded: ' + towns[i].yearFounded;
        pop.textContent = 'Population: ' + towns[i].currentPopulation;
        rain.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        image.setAttribute('src', 'images/' + towns[i].photo);
        image.setAttribute('alt', towns[i].name + ', Idaho');
        motto.setAttribute('class', 'motto');
        yrFound.setAttribute('class', 'townInfo');
        pop.setAttribute('class', 'townInfo');
        rain.setAttribute('class', 'townInfo');
    
        card.appendChild(h2);
        card.appendChild(motto);
        card.appendChild(yrFound);
        card.appendChild(pop);
        card.appendChild(rain);
        card.appendChild(image);

        document.querySelector('div.cards').appendChild(card);

        }

    }
  });

  
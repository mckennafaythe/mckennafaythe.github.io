

    fetch("json/rentalData.json")
    .then((response) => response.json())
    .then((json => console.log(json))); 
    
    fetch("json/rentalData.json")
    .then((response) => response.json())
    .then((Object) => {

        for (let i = 0; i < Object.rentals.length; i++) {

            let container = document.getElementById('rentalTable');
            let row = document.createElement('tr');
            let imgRow = document.createElement('td');
            let rentalImg = document.createElement('img');
            let rentalType = document.createElement('td');
            let maxPersons = document.createElement('td');
            let resHalfDay = document.createElement('td');
            let resFullDay = document.createElement('td');
            let walkHalfDay = document.createElement('td');
            let walkFullDay = document.createElement('td');

            rentalImg.setAttribute('src', 'images/' + Object.rentals[i].image);
            rentalImg.setAttribute('alt', Object.rentals[i].description);
            rentalType.textContent = Object.rentals[i].type;
            maxPersons.textContent = Object.rentals[i].maxpersons;
            resHalfDay.textContent = Object.rentals[i].reservation[0].halfday;
            resFullDay.textContent = Object.rentals[i].reservation[0].fullday;
            walkHalfDay.textContent = Object.rentals[i].walkin[0].halfday;
            walkFullDay.textContent = Object.rentals[i].walkin[0].fullday;

            container.appendChild(row);
            row.appendChild(imgRow);
            imgRow.appendChild(rentalImg);
            row.appendChild(rentalType);
            row.appendChild(maxPersons);
            row.appendChild(resHalfDay);
            row.appendChild(resFullDay);
            row.appendChild(walkHalfDay);
            row.appendChild(walkFullDay);
        }

    });
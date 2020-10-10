let d = new Date();

document.getElementById("currentYear").textContent = d.getFullYear();



let today = new Date();

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let currentWeekday = days[today.getDay()];

let date = today.getDate();

var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let currentMonth = months[today.getMonth()];

let currentYear = today.getFullYear();

document.getElementById("currentDate").innerHTML = currentWeekday + ", " + date + " " + currentMonth + " " + currentYear; 
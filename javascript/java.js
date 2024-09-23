function updateTime() {

let chicagoElement = document.querySelector("#chicago");
if (chicagoElement) {
let chicagoDateElement = chicagoElement.querySelector(".date");
let chicagoTimeElement = chicagoElement.querySelector(".time");
let chicagoTime = moment().tz("America/Chicago");
chicagoDateElement.innerHTML = chicagoTime.format("MMMM Do YYYY");
chicagoTimeElement.innerHTML = chicagoTime.format("h:mm:ss [<small>]A[</small>]");
}

let denverElement = document.querySelector("#denver");
if (chicagoElement) {
let denverDateElement = denverElement.querySelector(".date");
let denverTimeElement = denverElement.querySelector(".time");
let denverTime = moment().tz("America/Denver");
denverDateElement.innerHTML = denverTime.format("MMMM Do YYYY");
denverTimeElement.innerHTML = denverTime.format("h:mm:ss [<small>]A[</small>]");
}

let vancouverElement = document.querySelector("#vancouver");
if (chicagoElement) {
let vancouverDateElement = vancouverElement.querySelector(".date");
let vancouverTimeElement = vancouverElement.querySelector(".time"); 
let vancouverTime = moment().tz("America/Vancouver");
vancouverDateElement.innerHTML = vancouverTime.format("MMMM Do YYYY");
vancouverTimeElement.innerHTML = vancouverTime.format("h:mm:ss [<small>]A[</small>]");
}

let stJohnsElement = document.querySelector("#st-johns");
if (chicagoElement) {
let stJohnsDateElement = stJohnsElement.querySelector(".date");
let stJohnsTimeElement = stJohnsElement.querySelector(".time");
let stJohnsTime = moment().tz("America/St_Johns");
stJohnsDateElement.innerHTML = stJohnsTime.format("MMMM Do YYYY");
stJohnsTimeElement.innerHTML = stJohnsTime.format("h:mm:ss [<small>]A[</small>]");
}
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
          <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
      </div>
    `
}


let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
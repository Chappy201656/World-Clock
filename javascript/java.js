function updateTime() {

let chicagoElement = document.querySelector("#chicago");
let chicagoDateElement = chicagoElement.querySelector(".date");
let chicagoTimeElement = chicagoElement.querySelector(".time");
let chicagoTime = moment().tz("America/Chicago");

chicagoDateElement.innerHTML = chicagoTime.format("MMMM Do YYYY");
chicagoTimeElement.innerHTML = chicagoTime.format("h:mm:ss [<small>]A[</small>]");

let denverElement = document.querySelector("#denver");
let denverDateElement = denverElement.querySelector(".date");
let denverTimeElement = denverElement.querySelector(".time");
let denverTime = moment().tz("America/Denver");

denverDateElement.innerHTML = denverTime.format("MMMM Do YYYY");
denverTimeElement.innerHTML = denverTime.format("h:mm:ss [<small>]A[</small>]");

let vancouverElement = document.querySelector("#vancouver");
let vancouverDateElement = vancouverElement.querySelector(".date");
let vancouverTimeElement = vancouverElement.querySelector(".time"); 
let vancouverTime = moment().tz("America/Vancouver");

vancouverDateElement.innerHTML = vancouverTime.format("MMMM Do YYYY");
vancouverTimeElement.innerHTML = vancouverTime.format("h:mm:ss [<small>]A[</small>]");

let stJohnsElement = document.querySelector("#st-johns");
let stJohnsDateElement = stJohnsElement.querySelector(".date");
let stJohnsTimeElement = stJohnsElement.querySelector(".time");
let stJohnsTime = moment().tz("America/St_Johns");

stJohnsDateElement.innerHTML = stJohnsTime.format("MMMM Do YYYY");
stJohnsTimeElement.innerHTML = stJohnsTime.format("h:mm:ss [<small>]A[</small>]");

}
updateTime();
setInterval(updateTime, 1000);
let dayname = document.getElementById("dayname");
let date = document.getElementById("date");
let month = document.getElementById("month");
let year = document.getElementById("year");


let hours = document.getElementById("hours");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let period = document.getElementById("period");

setInterval(() => {
    let currentTime = new Date();
    
    hours.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();
}, 1000)


setInterval(() => {
    let currentTime = new Date();
    
    date.innerHTML = currentTime.getDate(); 
    month.innerHTML = currentTime.getUTCMonth() +1;
    year.innerHTML = currentTime.getFullYear();
}, 1000)
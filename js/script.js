var today = new Date();
var date = today.getMonth() + 1 + '-' +today.getDay() + '-' + today.getFullYear();
var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
var dateTime = date+' '+time;

function DateTime() {
    document.write(dateTime());
}


window.onload = function() {
    document.getElementById("fadeIn").style.opacity = 1;
    document.getElementById("fadeInLonger").style.opacity = 1;
}



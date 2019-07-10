/* JavaScript function to get the current time. Displayed in footer on html page */
function dateTime() {
    var today = new Date();
    var date = today.getMonth() + 1 + '-' +today.getDay() + '-' + today.getFullYear();
    var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
    var dateTime = date+' '+time; 
    document.write(dateTime);
}




/* JavaScript function, When the window loads 2 text fields fade in at different speeds. */
window.onload = function() {
    document.getElementById("fadeIn").style.opacity = 1;
    document.getElementById("fadeInLonger").style.opacity = 1;
}


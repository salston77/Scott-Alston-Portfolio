/* JavaScript function to get the current time. Displayed in footer on html page  Hope to be able to use this to check when people visit page
That functionality is to come if I continue with this site.*/
function dateTime() {
    var now = new Date();
    var date = now.getMonth() + 1 +'-' + now.getDay() +'-' + now.getFullYear();
    var time = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    var date_Time= date+' '+time; 
    document.write(date_Time);
}




/* JavaScript function, When the window loads, 2 text fields fade in at different speeds. */
window.onload = function() {
    document.getElementById("fadeIn").style.opacity = 1;
    document.getElementById("fadeInLonger").style.opacity = 1;
}


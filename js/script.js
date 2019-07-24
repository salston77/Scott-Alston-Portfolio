/* JavaScript function to get the current time. Displayed in footer on html page  Hope to be able to use this to check when people visit page
That functionality is to come if I continue with this site.*/
function dateTime() {
    var time = new Date();
    var date = time.getDate();
    var month = time.getMonth();
    var year = time.getFullYear();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var second = time.getSeconds();
    var temp = '' + ((hour > 12) ? hour - 12 : hour);
    if (hour == 0)
        temp = '12';
    temp += ((minute < 10) ? ':0' : ':') + minute;
    temp += ((second < 10) ? ':0' : ':') + second;
    temp += (hour >= 12) ? ' P.M.' : ' A.M.';
    temp += ' '+(month + 1)+ '-' + (date)  + '-' +(year);
    document.write(temp);
}




/* JavaScript function, When the window loads, 2 text fields fade in at different speeds. */
window.onload = function() {
    document.getElementById("fadeIn").style.opacity = 1;
    document.getElementById("fadeInLonger").style.opacity = 1;
}


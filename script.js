const timer = document.getElementById("timer");
var hour = 0;
var min = 0;
var sec = 0;
var milsec = 0;

var stoptime = true;

function starttimer() {
    if (stoptime = true) {
        stoptime = false;
        timecycle();
    }
}

function stoptimer() {
    if (stoptime == false) {
        stoptime = true;
    }
}

function timecycle() {
    if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hour = parseInt(hour);
        milsec = parseInt(milsec);

        milsec = milsec + 1;

        if (milsec == 100) {
            sec = sec + 1;
            milsec = 0;
        }

        if (sec == 60) {
            min = min + 1;
            sec = 0;
            milsec = 0;

        }

        if (min == 60) {
            hour = hour + 1;
            min = 0;
            sec = 0;
            milsec = 0;


        }
        if (milsec < 10) {
            milsec = "0" + milsec;
        }
        if (sec < 10) {
            sec = "0" + sec;
        }
        if (min < 10) {
            min = "0" + min;
        }
        if (hour < 10) {
            hour = "0" + hour;
        }

        timer.innerHTML = hour + ":" + min + ":" + sec + ":" + milsec;

        setTimeout('timecycle()', 10);

    }
}

function resettimer() {
    timer.innerHTML = "00:00:00:00";
    stoptime = true;
    hour = 0;
    min = 0;
    sec = 0;
    milsec = 0;
    listitem.innerHTML = '';

}

function laptimer() {

    listitem.innerHTML += hour + ":" + min + ":" + sec + ":" + milsec + "<br>";

}
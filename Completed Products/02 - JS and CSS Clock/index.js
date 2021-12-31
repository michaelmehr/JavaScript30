var hourHand = document.getElementById('hour-hand');
var minuteHand = document.getElementById('min-hand');
var secondHand = document.getElementById('second-hand');

setInterval(updateClock, 1000);
updateClock();

/**
 * Functions
 */

function hourToDegree(hours) {
    let _hours = hours;
    let _degrees = (360 / 12) * _hours;
    _degrees += 90;
    return _degrees;
}

function minuteToDegree(minutes) {
    let _minutes = minutes;
    let _degrees = (360 / 60) * _minutes;
    _degrees += 90;
    return _degrees;
}

function secondToDegree(seconds) {
    let _seconds = seconds;
    let _degrees = (360 / 60) * _seconds;
    _degrees += 90;
    return _degrees;
}


function updateClock() {
    let _time = new Date()
    let _hours = _time.getHours();
    let _minutes = _time.getMinutes();
    let _seconds = _time.getSeconds();

    console.log(`time: ${_hours} : ${_minutes} : ${_seconds}`);
    
    var _hourDegree = hourToDegree(_hours);

    console.log(_hourDegree);

    hourHand.style.transform = 'rotate(' + hourToDegree(_hours) + 'deg)';
    minuteHand.style.transform = 'rotate(' + minuteToDegree(_minutes) + 'deg)';
    secondHand.style.transform = 'rotate(' + secondToDegree(_seconds) + 'deg)';
}
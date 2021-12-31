const hourHand = document.getElementsByClassName('hour-hand');
const minuteHand = document.getElementsByClassName('min-hand');
const secondHand = document.getElementsByClassName('second-hand');

/**
 * Functions
 */

function hourToDegree(hours) {
    let _hours = hours;
    let _degrees = 360 / _hours;
    _degrees += 90;
    return _degrees;
}

function minuteToDegree(minutes) {
    let _minutes = minutes;
    let _degrees = 360 / _minutes;
    _degrees += 90;
    return _degrees;
}

function secondToDegree(seconds) {
    let _seconds = seconds;
    let _degrees = 360 / _seconds;
    _degrees += 90;
    return _degrees;
}


function updateClock() {
    let _time = new Date()
    let _hours = _time.getHours();
    let _minutes = _time.getMinutes();
    let _seconds = _time.getSeconds();
    
    hourHand.style.transform(_hours + 'deg');
    minuteHand.style.transform(_minutes + 'deg');
    secondHand.style.transform(_seconds + 'deg');
}
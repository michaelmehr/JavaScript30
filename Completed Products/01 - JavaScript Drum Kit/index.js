const keys = document.getElementsByClassName('key');
const audio = document.getElementsByName('audio');

/**
 * Key Down Event
 */
document.addEventListener('keydown', (e) => {

    switch(e.key) {

        case 'a':
            let _clapAudio = new Audio('sounds/clap.wav');
            _clapAudio.play();
            document.getElementById('clap').classList.add("key--pressed");
            break;
        case 's':
            let _hiHatAudio = new Audio('sounds/hihat.wav');
            _hiHatAudio.play();
            document.getElementById('hihat').classList.add("key--pressed");
            break;
        case 'd':
            let _kickAudio = new Audio('sounds/kick.wav');
            _kickAudio.play();
            document.getElementById('kick').classList.add("key--pressed");
            break;
        case 'f':
            let _openHatAudio = new Audio('sounds/openhat.wav');
            _openHatAudio.play();
            document.getElementById('openhat').classList.add("key--pressed");
            break;
        case 'g':
            let _boomAudio = new Audio('sounds/boom.wav');
            _boomAudio.play();
            document.getElementById('boom').classList.add("key--pressed");
            break;
        case 'h':
            let _rideAudio = new Audio('sounds/ride.wav');
            _rideAudio.play();
            document.getElementById('ride').classList.add("key--pressed");
            break;
        case 'j':
            let _snareAudio = new Audio('sounds/snare.wav');
            _snareAudio.play();
            document.getElementById('snare').classList.add("key--pressed");
            break;
        case 'k':
            let _tomAudio = new Audio('sounds/tom.wav');
            _tomAudio.play();
            document.getElementById('tom').classList.add("key--pressed");
            break;
        case 'l':
            let _tinkAudio = new Audio('sounds/tink.wav');
            _tinkAudio.play();
            document.getElementById('tink').classList.add("key--pressed");
            break;
        default:
            break;
    }


});


/**
 * Key Up Event
 */
document.addEventListener('keyup', (e) => {

    switch(e.key) {

        case 'a':
            document.getElementById('clap').classList.remove("key--pressed");
            break;
        case 's':
            document.getElementById('hihat').classList.remove("key--pressed");
            break;
        case 'd':
            document.getElementById('kick').classList.remove("key--pressed");
            break;
        case 'f':
            document.getElementById('openhat').classList.remove("key--pressed");
            break;
        case 'g':
            document.getElementById('boom').classList.remove("key--pressed");
            break;
        case 'h':
            document.getElementById('ride').classList.remove("key--pressed");
            break;
        case 'j':
            document.getElementById('snare').classList.remove("key--pressed");
            break;
        case 'k':
            document.getElementById('tom').classList.remove("key--pressed");
            break;
        case 'l':
            document.getElementById('tink').classList.remove("key--pressed");
            break;
        default:
            break;
    }
});
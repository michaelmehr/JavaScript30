var rootElement = document.querySelector(':root');


// DOM Input Elements
var spacingSlider = document.getElementById('spacing');
var blurSlider = document.getElementById('blur');
var basePicker = document.getElementById('base');


spacingSlider.addEventListener('input', updateSpacing);
blurSlider.addEventListener('input', updateBlur);
basePicker.addEventListener('input', updateBaseColor);


function updateSpacing(e) {
    rootElement.style.setProperty('--spacing', e.target.value + 'px');
}

function updateBlur(e) {
    rootElement.style.setProperty('--blur', e.target.value + 'px');
}

function updateBaseColor(e) {
    rootElement.style.setProperty('--base', e.target.value);
}
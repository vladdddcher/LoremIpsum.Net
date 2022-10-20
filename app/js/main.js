
const  keyboardSupport = document.getElementById('slider-keyboard')

noUiSlider.create(keyboardSupport, {
    start: 75,
    range: {
        'min': 0,
        'max': 100
    }
});
 
const  keyboardSupportValue = document.getElementById('slider-keyboard-value');
keyboardSupport.noUiSlider.on('update', function (values, handle) {
    keyboardSupportValue.innerHTML = Math.round(values[handle]);
});


 
 
 
 
$('input, select').styler();
 
 
 
 
    AOS.init();
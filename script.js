window.onload = function () {
    initColorPicker();
};

function initColorPicker() {
    let colorBox = document.getElementById("color-box");
    let rgb = {
        red: document.getElementById("red"),
        green: document.getElementById("green"),
        blue: document.getElementById("blue")
    };
    let colorPickers = document.getElementsByClassName("picker");
    setColorPickerEventList(colorBox, rgb, colorPickers);
}

function setColorPickerEventList(element, colors, pickerElements) {
    let pickerLen = pickerElements.length;
    for (let i = 0; i < pickerLen; i++) {
        pickerElements[i].addEventListener('change', () => {
            let red = color.red.value
            let green = color.green.value
            let blue = color.blue.value
            setElementBGColor(element, red, green, blue);
            setDispalyValues(red, green, blue)
        });
    }
}

function setElementBGColor(bgElement, red, green, blue) {
    let rgbVal = [red, green, blue].join(',');
    bgElement.style.backgroundColor = "rgb (" + rgbVal +")"
}

function  setDispalyValues(red, green, blue) {
    let redval = document.getElementById("redVal");
    let greenval = document.getElementById("greenVal");
    let blueval = document.getElementById("blueVal");
}
    redval.innerText = red;
    greenval.innerText = green;
    blueval.innerText = blue;

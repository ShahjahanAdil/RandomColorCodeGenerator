let copied = document.getElementById("copied");

function generateColor() {
    let randomNumber = Math.floor(Math.random() * 16777215);
    let colorCode = "#" + randomNumber.toString(16);
    document.getElementById("color-code").innerText = colorCode;
    document.body.style.backgroundColor = colorCode;
    copied.style.display = 'block'
    navigator.clipboard.writeText(colorCode);
}

generateColor();

document.getElementById("btn").onclick = function () {
    copied.innerText = "Color Copied";
    setTimeout(function () {
        copied.style.display = 'none';
    }, 1000)
    generateColor();
}
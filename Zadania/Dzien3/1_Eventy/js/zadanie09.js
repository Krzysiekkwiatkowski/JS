document.addEventListener("DOMContentLoaded", function () {
    var spanWidth = document.getElementById("windowWidth");
    var spanHeight = document.getElementById("windowHeight");
    var width = window.innerWidth;
    var height = window.innerHeight;
    window.addEventListener("click", function () {
        spanWidth.innerText = width;
        spanHeight.innerText = height;
    });
});
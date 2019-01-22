document.addEventListener("DOMContentLoaded", function () {
    var box = document.getElementById("box");
    box.addEventListener("mousemove", function (e) {
        var spanGlobalX = document.getElementById("globalX");
        var spanGlobalY = document.getElementById("globalY");
        var spanLocalX = document.getElementById("localX");
        var spanLocalY = document.getElementById("localY");
        var globalX = e.screenX;
        var globalY = e.screenY;
        var localX = e.clientX;
        var localY = e.clientY;
        spanGlobalX.innerText = globalX;
        spanGlobalY.innerText = globalY;
        spanLocalX.innerText = localX;
        spanLocalY.innerText = localY;
    })
});
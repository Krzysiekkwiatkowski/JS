document.addEventListener("DOMContentLoaded", function () {
    var div = document.getElementById("bubblingButtons");
    var buttons = div.getElementsByTagName("button");
    var counter = 0;
    div.addEventListener("click", function (e) {
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].dataset.counter++;
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.getElementsByTagName("button");
    var span = document.querySelector(".counter");
    for (var button of buttons){
        button.addEventListener("click", function () {
            span.innerText++;
        })
    }
});
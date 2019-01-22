document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll("button");
    var spans = document.getElementsByClassName("counter");
    for (var i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function (e) {
            var object = e.currentTarget;
            var number = object.getAttribute("id").charAt(6);
            var span = spans[number-1];
            span.innerText++;
        });
    }
});
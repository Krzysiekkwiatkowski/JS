document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.getElementsByClassName("button");

    var changeColor = function () {
        this.parentElement.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    }

    for (var button of buttons){
        button.addEventListener("click", changeColor)
    }
});
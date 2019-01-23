document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.getElementsByClassName("button");

    for (var button of buttons){
        button.addEventListener("click", hidden)
    }

    var hidden = function () {
        if(this.nextElementSibling != null){
            this.nextElementSibling.classList.toggle("hidden")
        }
    }
});
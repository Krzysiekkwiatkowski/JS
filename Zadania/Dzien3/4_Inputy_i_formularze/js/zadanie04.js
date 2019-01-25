document.addEventListener("DOMContentLoaded", function () {
    var images = document.querySelectorAll("img");
    var options = document.querySelectorAll("option");

    for (var i = 0; i < options.length; i++) {
        options[i].addEventListener("click", function () {
            if(this.innerText == "Windows"){
                images[0].style.visibility = "hidden";
                images[1].style.visibility = "hidden";
                images[2].style.visibility = "visible";
            }
            if(this.innerText == "Os X"){
                images[0].style.visibility = "visible";
                images[1].style.visibility = "hidden";
                images[2].style.visibility = "hidden";
            }
            if(this.innerText == "Ubuntu"){
                images[0].style.visibility = "hidden";
                images[1].style.visibility = "visible";
                images[2].style.visibility = "hidden";
            }
        })
    }
});
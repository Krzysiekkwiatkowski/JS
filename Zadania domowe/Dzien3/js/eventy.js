document.addEventListener("DOMContentLoaded", function () {
    var links = document.querySelectorAll("a");
    var contents = document.querySelectorAll(".content");
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function () {
            this.nextElementSibling.style.display = "contents";
        })
    }
});
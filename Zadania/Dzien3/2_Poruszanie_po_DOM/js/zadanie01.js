document.addEventListener("DOMContentLoaded", function () {
    var divs = document.getElementsByClassName("listContainer");
    for (var div of divs){
        div.addEventListener("mouseover", function () {
            var classes = this.classList;
            classes.add("hovered");
            var children = this.firstElementChild.children;
            var firstChild = this.firstElementChild.firstElementChild;
            var lastChild = this.firstElementChild.lastElementChild;
            firstChild.style.backgroundColor = "red";
            lastChild.style.backgroundColor = "blue";
            for (var i = 1; i < children.length - 1; i++) {
                children[i].style.backgroundColor = "green";
            }
        })
    }
});
document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("remove");
    button.addEventListener("click", function () {
        var ul = document.querySelector("ul");
        var children = ul.children;
        for (var i = children.length - 1; i >= 0; i--) {
            var child = children[i];
            child.parentElement.removeChild(child);
        }
    })
});
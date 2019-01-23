document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector("a");
    button.addEventListener("click", function () {
        var ul = document.querySelector("ul");
        var newLi = document.createElement("li");
        ul.appendChild(newLi);
        var number = ul.children;
        newLi.innerText = "Element " + number.length + " - w chwili dodania było " + (number.length - 1) + " elementów"
    })
});
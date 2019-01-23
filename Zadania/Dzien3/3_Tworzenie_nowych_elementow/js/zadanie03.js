document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("remove");
    button.addEventListener("click", function () {
       button.parentElement.removeChild(button);
    })
});
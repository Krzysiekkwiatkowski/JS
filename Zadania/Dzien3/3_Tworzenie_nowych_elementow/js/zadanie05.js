document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.getElementsByClassName("deleteBtn");
    for(var button of buttons){
        button.addEventListener("click", function () {
            var tr = this.parentElement.parentElement;
            tr.parentElement.removeChild(tr);
        })
    }
});
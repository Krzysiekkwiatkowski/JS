document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.getElementsByClassName("moveBtn");

    var moving = function () {
        var a = this;
        var li = this.parentElement;
        var ul = this.parentElement.parentElement;
        var clonedLi = li.cloneNode(true);
        if(ul.parentElement.nextElementSibling != null){
            ul.removeChild(li);
            ul.parentElement.nextElementSibling.firstElementChild.appendChild(clonedLi);
            clonedLi.appendChild(a);
            a.previousElementSibling.parentElement.removeChild(a.previousElementSibling);
        } else if(ul.parentElement.previousElementSibling != null){
            ul.removeChild(li);
            ul.parentElement.previousElementSibling.firstElementChild.appendChild(clonedLi);
            clonedLi.appendChild(a);
            a.previousElementSibling.parentElement.removeChild(a.previousElementSibling);
        }
    }

    for (var button of buttons){
        button.addEventListener("click", moving)
    }
});
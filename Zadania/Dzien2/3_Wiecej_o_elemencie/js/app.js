document.addEventListener("DOMContentLoaded", function() {

    //Zadanie 1
    var list = document.getElementsByClassName("exercise ex1");
    var lis = document.querySelectorAll("ul > li");
    for (var li of lis){
        if(!li.hasAttribute("data-direction")){
            li.dataset.derection = "up";
        }
    }

    for (var i = 0; i < lis.length; i++) {
        if(lis[i] % 2 != 0){
            lis[i].setAttribute("backgrounColor", "green");
        }
    }
});
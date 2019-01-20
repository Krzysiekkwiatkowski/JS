document.addEventListener("DOMContentLoaded", function() {

    //Zadanie 1
    var list = document.getElementsByClassName("exercise ex1");
    var lis = document.querySelectorAll("ul > li");
    for (var li of lis){
        if(!li.hasAttribute("data-direction")){
            li.dataset.direction = "up";
        }
    }

    for (var i = 0; i < lis.length; i++) {
        if(i % 2 != 0){
            lis[i].style.backgroundColor = "green";
        }
    }

    lis[4].setAttribute("class", "big");

    for (var i = 0; i < lis.length; i++) {
        if(i % 3 == 0){
            lis[i].style.textDecoration = "underline";
        }
    }

    //Zadanie 2
    var option = document.querySelectorAll("select > option");
    for (var i = 0; i < option.length; i++) {
        option[i].innerText = option[i].getAttribute("value");
    }

    for (var i = 0; i < option.length; i++) {
        option[i].dataset.year = parseInt(option[i].getAttribute("value")) + 20;
    }

    //Zadanie 3
    var firefox = document.querySelector(".firefox");
    firefox.style.backgroundImage = "url(\"assets/img/firefox.png\")";

    var edge = document.querySelector(".edge");
    edge.style.backgroundImage = "url(\"assets/img/edge.png\")";

    var chrome = document.querySelector(".chrome");
    chrome.style.width = "100px";
});
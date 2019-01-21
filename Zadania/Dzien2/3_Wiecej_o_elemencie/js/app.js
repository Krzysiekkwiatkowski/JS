document.addEventListener("DOMContentLoaded", function () {

    //Zadanie 1
    var list = document.getElementsByClassName("exercise ex1");
    var lis = document.querySelectorAll("ul > li");
    for (var li of lis) {
        if (!li.hasAttribute("data-direction")) {
            li.dataset.direction = "up";
        }
    }

    for (var i = 0; i < lis.length; i++) {
        if (i % 2 != 0) {
            lis[i].style.backgroundColor = "green";
        }
    }

    lis[4].setAttribute("class", "big");

    for (var i = 0; i < lis.length; i++) {
        if (i % 3 == 0) {
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
    var chrome = document.querySelector(".chrome");
    chrome.style.width = "100px";
    var divs = document.querySelectorAll("div > div");
    var chromeLink = divs.item(0).getElementsByTagName("a");
    chromeLink[0].innerText = "Chrome";


    var edge = document.querySelector(".edge");
    edge.style.backgroundImage = "url(\"assets/img/edge.png\")";
    var edgeLink = divs.item(2).getElementsByTagName("a");
    edgeLink[0].setAttribute("href", "https://www.microsoft.com/pl-pl/windows/microsoft-edge");

    var firefox = document.querySelector(".firefox");
    firefox.style.backgroundImage = "url(\"assets/img/firefox.png\")";
    var firefoxLink = divs.item(4).getElementsByTagName("a");
    firefoxLink[0].innerText = "Firefox";
    firefoxLink[0].setAttribute("href", "https://www.mozilla.org/pl/firefox/");
    //Dopisany jest na końcu, żeby wszystkie elementy strony zostały załadowane przed wykonaniem kodu

    //Zadanie 4
    var ex4 = document.getElementsByClassName("exercise ex4");
    var spans = ex4[0].querySelectorAll("span");
    var name = spans[0];
    name.innerHTML = "Krzysztof Kwiatkowski";
    var favouriteColor = spans[1];
    favouriteColor.innerHTML = "Niebieski";
    var favouriteMeal = spans[2];
    favouriteMeal.innerHTML = "Sushi";

    //Zadanie 5
    var ex5 = document.getElementsByClassName("exercise ex5");
    var ul = ex5[0].getElementsByTagName("ul").item(0);
    ul.className = "menu";
    var li = ul.querySelectorAll("li");
    for (var i = 0; i < li.length; i++) {
        if (!li[i].classList.contains("menuElement")) {
            li[i].classList.add("menuElement");
        }
    }
    for (var i = 0; i < li.length; i++) {
        if (li[i].classList.contains("error")) {
            li[i].classList.remove("error");
        }
    }

    //Zadanie 6
    var ex6 = document.getElementsByClassName("exercise ex6");
    var lis = ex6[0].querySelectorAll("ul > li");

    for (var i = 0; i < lis.length; i++) {
        lis[i].dataset.id = i + 1;
    }

    for (var i = 0; i < lis.length; i++) {
        if (!lis[i].hasAttribute("data-id")) {
            lis[i].setAttribute("data-id", i + 1);
        }
    }
});
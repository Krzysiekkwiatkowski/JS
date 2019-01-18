/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".offers").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children;

    //Zadanie 1
    var homeElement = document.getElementById("home");
    var newClass = homeElement.id;
    var newId = homeElement.className;
    homeElement.className = newClass;
    homeElement.id = newId;

    //Zadanie 2
    console.log(homeElement);
    console.log(typeof homeElement);
    for (var childElement of childElements) {
        console.log(childElement);
        console.log(typeof homeElement);
    }
    console.log(banner);
    console.log(typeof banner);
    for (var block of blocks) {
        console.log(block);
        console.log(typeof block);
    }
    for (var link of links) {
        console.log(link);
        console.log(typeof link);
    }

    //Zadanie 3
    for (var block of blocks) {
        console.log(block.innerHTML);   //Zawiera tylko linki
        console.log(block.outerHTML);   //Zawiera divy wraz z linkami
    }
    for (var block of blocks) {
        block.innerHTML = "Nowa wartość diva o klasie blocks";
    }

    //Zadanie 4
    console.log(homeElement.getAttribute("id"));

    //Zadanie 5
    for (var tag of childElements) {
        console.log(tag.tagName);
    }

    //Zadanie 6
    for (var link of links){
        console.log(link.dataset);
    }

    //Zadanie 7
    console.log(banner.classList);
    console.log(banner.className);
    console.log(typeof banner.classList);
    console.log(typeof banner.className);
});
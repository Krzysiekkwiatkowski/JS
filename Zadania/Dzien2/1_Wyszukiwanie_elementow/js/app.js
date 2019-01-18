document.addEventListener("DOMContentLoaded", function(){
    //Zadanie 1
    var article = document.querySelector("article.first");
    var h1 = article.getElementsByTagName("H1");
    console.log(h1.length);
    var offers = article.getElementsByClassName("offers");
    console.log(offers.length);
    for (var i = 0; i < offers.length; i++) {
        console.log(offers[i]);
    }
    var divs = article.getElementsByTagName("div");
    console.log(divs.length);
    for (var i = 0; i < divs.length; i++) {
        console.log(divs[i]);
    }

    //Zadanie 2
    var nav = document.querySelector("nav > ul > li:nth-child(5)");

    //Zadanie 3
    var header1 = document.getElementById("home");
    //lub
    var header2 = document.getElementsByTagName("header");

    var li1 = document.querySelector("li:not([data-direction])");
    //lub
    var li2 = document.querySelector("nav > ul > li:not([data-direction])");

    var block1 = document.querySelector(".block");
    //lub
    var block2 = document.querySelector("div.block");

    //Zadanie 4
    var lis = document.querySelectorAll("nav > ul > li");
    console.log(lis.length);

    var ps = document.querySelectorAll("div > p");
    console.log(ps.length);

    var divs = document.querySelectorAll("article div");
    console.log(divs.length);

    //Zadanie dodatkowe
    var navlis = document.querySelectorAll("nav li");
    for (var change of navlis){
        if(!change.dataset.direction){
            change.dataset.direction = "top";
        }
    }
});
//Zadanie domowe 1
var menu = document.getElementById("menu");
getDataInfo(menu);

function getDataInfo(element) {
    var table = [];
    var lis = element.querySelectorAll("li");
    for (var i = 0; i < lis.length; i++) {
        table[i] = lis[i].getAttribute("data-info");
    }
    return table;
}

//Zadanie domowe 2
var classes = document.getElementById("main-contener");
console.log(getElementClass(classes));

function getElementClass(element) {
    var table = [];
    for (var i = 0; i < element.classList.length; i++) {
        table.push(element.classList[i])
    }
    return table;
}

//Zadanie domowe 3
var pinkColor = document.getElementsByClassName("pink-color")[0];
console.log(getElementText(pinkColor));

function getElementText(element) {
    return element.innerText;
}

//Zadanie domowe 4
var images = document.getElementsByClassName("images");
getElementAlt(images);

function getElementAlt(element) {
    var table = [];
    for (var i = 0; i < element.length; i++) {
        table.push(element[i].getAttribute("alt"));
    }
    return table;
}

//Zadanie domowe 5
var links = document.getElementsByClassName("my-link");
getElementHref(links);

function getElementHref(element) {
    var table = [];
    for (var i = 0; i < element.length; i++) {
        table.push(element[i].getAttribute("href"));
    }
    return table;
}
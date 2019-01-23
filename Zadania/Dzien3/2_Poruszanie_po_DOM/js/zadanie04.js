document.addEventListener("DOMContentLoaded", function () {
    var first = document.getElementsByClassName("first")[0].firstElementChild.children[2];
    console.log(first.dataset.answer);
    var second = document.getElementById("second").parentElement.children[3];
    console.log(second.dataset.answer);
    var table = document.getElementsByTagName("h1");
    for (var element of table){
        if(element.dataset.ex == "third"){
            var children = element.parentElement.parentElement.lastElementChild.firstElementChild.children;
            var third = children[Math.floor(children.length / 2)];
            console.log(third.dataset.answer);
        }
    }
    var divs = document.getElementsByTagName("div");
    for (var div of divs){
        if(div.className == "fourth"){
            var parent = div.parentElement;
            var article = parent.getElementsByTagName("article")[0];
            var forth = article.getElementsByTagName("p")[1];
            console.log(forth.dataset.answer);
        }
    }
});
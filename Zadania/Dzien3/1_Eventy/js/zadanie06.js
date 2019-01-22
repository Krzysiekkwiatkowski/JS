document.addEventListener("DOMContentLoaded", function () {
     var divs = document.getElementsByClassName("box");
     for (var div of divs){
         div.addEventListener("click", function () {
             this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
         })
     }
});
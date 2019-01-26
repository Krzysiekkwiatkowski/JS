document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector("button");
    var email = document.getElementById("email");
    var name = document.getElementById("name");
    var surname = document.getElementById("surname");
    var pass1 = document.getElementById("pass1");
    var pass2 = document.getElementById("pass2");
    var checkbox = document.getElementById("agree");
    button.addEventListener("click", function (event) {
        var letter = false;
        var number = false;
        if (/[a-zA-Z]+/.test(pass1.value)) {
            letter = true;
        }
        if (/\d/.test(pass1.value)) {
            number = true;
        }
        if (!(email.value.includes("@") && name.value.length > 5 && surname.value.length > 5 && pass1.value === pass2.value && checkbox.checked && letter && number && pass1.value.length > 4)) {
            event.preventDefault();
        }
    })
});
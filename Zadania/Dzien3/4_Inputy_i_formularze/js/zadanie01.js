document.addEventListener("DOMContentLoaded", function () {
    var cardType = document.getElementById("card");
    var type = document.getElementById("type");
    cardType.addEventListener("input", function () {
        if (cardType.value[0] == 4) {
            type.innerText = "VS";
            if (cardType.value.length > 12 && cardType.value.length < 17) {
                cardType.style.backgroundColor = "lightgreen";
            } else {
                cardType.style.backgroundColor = "lightpink";
            }
        } else if (cardType.value[0] == 5) {
            type.innerText = "MC";
            if (cardType.value.length == 16) {
                cardType.style.backgroundColor = "lightgreen";
            } else {
                cardType.style.backgroundColor = "lightpink";
            }
        } else if (cardType.value[0] == 3 && (cardType.value[1] == 4 || cardType.value[1] == 7)) {
            type.innerText = "AE";
            if (cardType.value.length == 15) {
                cardType.style.backgroundColor = "lightgreen";
            } else {
                cardType.style.backgroundColor = "lightpink";
            }
        } else {
            cardType.style.backgroundColor = "lightpink";
        }
    })
});
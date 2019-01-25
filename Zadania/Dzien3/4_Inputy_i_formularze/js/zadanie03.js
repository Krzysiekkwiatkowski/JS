document.addEventListener("DOMContentLoaded", function () {
    var price = document.getElementById("price");
    var checkboxes = document.getElementsByTagName("input");
    var submit = document.querySelector("button");
    var form = document.querySelector("form");
    var calculateCost = function () {
        var sum = 0;
        for (var i = 1; i < checkboxes.length - 1; i++) {
            if (checkboxes[i].checked) {
                sum += parseFloat(checkboxes[i].dataset.price);
            }
        }
        price.innerText = Math.round(sum * 10)/10 + "zł";
    };

    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener("input", function () {
            if(checkboxes[0].checked && checkboxes[checkboxes.length - 1].checked){
                for (var j = 0; j < checkboxes.length; j++) {
                    if (checkboxes[j].checked) {
                        checkboxes[j].click();
                    }
                    calculateCost();
                }
            } else if (checkboxes[0].checked) {
                for (var j = 0; j < checkboxes.length; j++) {
                    if (j < checkboxes.length - 1) {
                        if (!checkboxes[j].checked) {
                            checkboxes[j].click();
                        } else if (checkboxes[checkboxes.length - 1].checked) {
                            checkboxes[j].click();
                        }
                    } else {
                        if (checkboxes[j].checked) {
                            checkboxes[j].click();
                        }
                    }
                    calculateCost();
                }
            }
            if (checkboxes[checkboxes.length - 1].checked) {
                if (checkboxes[0].checked) {
                    checkboxes[0].click();
                }
                for (var j = 1; j < checkboxes.length; j++) {
                    if (checkboxes[j].checked) {
                        checkboxes[j].click();
                    }
                    calculateCost()
                }
            }
            calculateCost();
        });
    }

    submit.addEventListener("click", function (event) {
        event.preventDefault();
        var cost = price.innerText;
        var div = document.createElement("div");
        div.innerText = "Wartość twojego zamówienia to " + cost;
        form.appendChild(div);
    });
});
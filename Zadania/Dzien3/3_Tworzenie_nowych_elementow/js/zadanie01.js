document.addEventListener("DOMContentLoaded", function () {
    var button = document.getElementById("addBtn");
    button.addEventListener("click", function () {
        var number = document.getElementById("orderId");
        var item = document.getElementById("item");
        var quantity = document.getElementById("quantity");
        var table = document.getElementById("orders");
        var newTr = document.createElement("tr");
        table.appendChild(newTr);
        var newTd1 = document.createElement("td");
        var newTd2 = document.createElement("td");
        var newTd3 = document.createElement("td");
        newTr.appendChild(newTd1);
        newTr.appendChild(newTd2);
        newTr.appendChild(newTd3);
        newTd1.innerText = number.value;
        newTd2.innerText = item.value;
        newTd3.innerText = quantity.value;
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var invoiceData = document.getElementById("invoiceData");
    var check = document.getElementById("invoice");
    invoiceData.style.visibility = "hidden";
    check.addEventListener("input", function () {
        if(check.checked == true){
            invoiceData.style.visibility = "visible";
        } else {
            invoiceData.style.visibility = "hidden";
        }
    });
});
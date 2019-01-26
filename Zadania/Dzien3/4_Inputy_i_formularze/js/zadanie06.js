document.addEventListener("DOMContentLoaded", function () {
    var button = document.querySelector("button");
    var team1 = document.getElementById("team1");
    var points1 = document.getElementById("points1");
    var team2 = document.getElementById("team2");
    var points2 = document.getElementById("points2");
    var table = document.querySelector("tbody");
    button.addEventListener("click", function (event) {
        if (team1.value !== team2.value && points1.value >= 0 && points2.value >= 0) {
            var tr = document.createElement("tr");
            var td1 = document.createElement("td");
            var td2 = document.createElement("td");
            var td3 = document.createElement("td");
            table.appendChild(tr);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            var cols = tr.children;
            cols[0].innerText = team1.value;
            cols[1].innerText = team2.value;
            cols[2].innerText = points1.value + " - " + points2.value;
            table.appendChild(tr);
            event.preventDefault();
        } else if (team1.value === team2.value || points1.value < 0 || points2.value < 0) {
            event.preventDefault();
        }
    });
});
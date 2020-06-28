// Aufgabe 9 mit Unterstützung und Tipps von Herr Rausch und Naomi Noller
// Array erstellen
var mytodoList = ["Putzen", "Medienpsychologie nachholen", "Spazieren gehen", "EIA Aufgabe lösen"];
window.addEventListener("load", function () {
    // Array Elemente werden ausgegeben und der Papierkorb wird angezeigt
    function drawList() {
        zweiteliste.innerHTML = "";
        for (var index = 0; index < mytodoList.length; index++) {
            zweiteliste.innerHTML += "<div>" + "<input type='checkbox'>" + mytodoList[index] + "<i class='fas fa-trash-alt'id=delete></i>" + "</div>";
        }
        // "in total" Anzeige passt sich dadurch automatisch an
        var intotal = document.querySelector("#Span");
        intotal.innerHTML = mytodoList.length;
    }
    var zweiteliste = document.querySelector(".addtolist");
    drawList();
    // Mit klick auf add-button1 wird ein neues Element hinzugefügt
    var eingabe = document.querySelector("#newAdd");
    console.log(eingabe);
    var addNewElement = document.querySelector("#button");
    addNewElement.addEventListener("click", function () {
        mytodoList.push(eingabe.value);
        drawList();
        eingabe.value = "";
        console.log(mytodoList);
    });
    //Löscht die erledigten Punkte
    var löschen = document.getElementsByClassName("far fa-trash-alt");
    var i;
    for (i = 0; i < löschen.length; i++) {
        löschen[i].onclick = function () {
            var br = this.parentElement;
            br.style.display = "none";
        };
    }
});
//# sourceMappingURL=app09.js.map
// Aufgabe 9 mit Unterstützung und Tipps von Herr Rausch und Naomi Noller

// Array erstellen
let mytodoList: string[] = ["Putzen", "Medienpsychologie nachholen", "Spazieren gehen", "EIA Aufgabe lösen"];


window.addEventListener("load", function () {
    // Array Elemente werden ausgegeben und der Papierkorb wird angezeigt
    function drawList(): void {
        zweiteliste.innerHTML = "";
        for (var index: number = 0;
            index < mytodoList.length; index++) {
            zweiteliste.innerHTML += "<div>" + "<input type='checkbox'>" + mytodoList[index] + "<i class='fas fa-trash-alt'id=delete></i>" + "</div>";
        }
        // "in total" Anzeige passt sich dadurch automatisch an
        var intotal: string[] = document.querySelector("#Span");
        intotal.innerHTML = mytodoList.length;
    }


    var zweiteliste = document.querySelector(".addtolist");
    drawList();
    // Mit klick auf add-button1 wird ein neues Element hinzugefügt
    var eingabe: string = document.querySelector("#newAdd");
    console.log(eingabe);
    var addNewElement: string = document.querySelector("#button");
    addNewElement.addEventListener("click", function () {
        mytodoList.push(eingabe.value);
        drawList();
        eingabe.value = "";
        console.log(mytodoList);
    });
});






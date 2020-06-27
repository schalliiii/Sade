// Aufgabe 9 
var myList = ["einkaufen", "essen", "eia schaffen"];
console.log(myList);
document.querySelector(".todoliste").innerHTML = myList[0];
document.querySelector(".todoliste").innerHTML += myList[1];
document.querySelector(".todoliste").innerHTML += myList[2];
function drawList() {
    document.querySelector(".todoliste").innerHTML = "";
    for (var index = 0; (index < myList.length); index++) {
        console.log(index);
        document.querySelector(".todoliste").innerHTML += "<li>" + myList[index];
    }
}
function addNewElement() {
    myList.push("BWL Hausarbeit");
    drawList();
}
window.addEventListener("load", function () {
    drawList();
    addNewElement();
});
//# sourceMappingURL=app09.js.map
// Aufgabe 9 


let myList: string[] = ["einkaufen", "essen", "eia schaffen"];

console.log(myList);

document.querySelector(".todoliste").innerHTML = myList[0];
document.querySelector(".todoliste").innerHTML += myList[1];
document.querySelector(".todoliste").innerHTML += myList[2];

function drawList(): void {

    document.querySelector(".todoliste").innerHTML = "";
    for (let index: number = 0;
        (index < myList.length; index++) {

        console.log(index);
        document.querySelector(".todoliste").innerHTML += "<li>" + myList[index];

    }

}




function addNewElement(): void {
    myList.push("BWL Hausarbeit");
    drawList();
}
window.addEventListener("load", function () {

    drawList();
    addNewElement();


})
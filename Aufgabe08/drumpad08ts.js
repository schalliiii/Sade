//Aufgabe 8 mit Tipps von Jasmin Basler gelöst
window.addEventListener("load", function () {
    //Drum Pad
    document.querySelector("#b1").addEventListener("click", function () {
        playSample("A.mp3");
    });
    document.querySelector("#b2").addEventListener("click", function () {
        playSample("C.mp3");
    });
    document.querySelector("#b3").addEventListener("click", function () {
        playSample("F.mp3");
    });
    document.querySelector("#b4").addEventListener("click", function () {
        playSample("G.mp3");
    });
    document.querySelector("#b5").addEventListener("click", function () {
        playSample("hihat.mp3");
    });
    document.querySelector("#b6").addEventListener("click", function () {
        playSample("kick.mp3");
    });
    document.querySelector("#b7").addEventListener("click", function () {
        playSample("laugh-1.mp3");
    });
    document.querySelector("#b8").addEventListener("click", function () {
        playSample("laugh-2.mp3");
    });
    document.querySelector("#b9").addEventListener("click", function () {
        playSample("snare.mp3");
    });
    //Drum Machine 
    document.querySelector("#play").addEventListener("click", playstop);
    document.querySelector("#mic").addEventListener("click", recording);
    var threesounds = ["kick.mp3", "snare.mp3", "hihat.mp3"];
    var i = 0;
    var drumbeat;
    function play3beats() {
        drumbeat = setInterval(function () {
            playSample(threesounds[i]);
            i++;
            if (i >= threesounds.length) {
                i = 0;
            }
        }, 400);
    }
});
//# sourceMappingURL=drumpad08ts.js.map
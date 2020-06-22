//Aufgabe 8 mit Erklärung und Unterstützung von Jasmin Basler gelöst
window.addEventListener("load", function () {
    // Mein DrumPad
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
    document.querySelector("#play").addEventListener("click", playbreak);
    document.querySelector("#mic").addEventListener("click", recording);
    //Drum Machine, 3 Beats abspielen
    var drumsounds = ["kick.mp3", "snare.mp3", "hihat.mp3"];
    var i = 0;
    var drumbeat;
    function playBeats() {
        drumbeat = setInterval(function () {
            playSample(drumsounds[i]);
            i++;
            if (i >= drumsounds.length) {
                i = 0;
            }
        }, 400);
    }
    //Play Button durch Stop Button ersetzen 
    function playbreak() {
        var playstopbutton = document.querySelector("#play");
        if (playstopbutton.getAttribute("class") == "fas fa-play") {
            playstopbutton.setAttribute("class", "fas fa-pause");
            playBeats();
        }
        else {
            playstopbutton.setAttribute("class", "fas fa-play");
            stopthebeat();
        }
    }
    function stopthebeat() {
        clearInterval(drumbeat);
    }
    //Den Beat aufnehmen
    var recorder = false;
    function recording() {
        if (recorder) {
            recorder = false;
        }
        else {
            recorder = true;
        }
    }
    function playSample(mp3) {
        if (recorder) {
            drumsounds.push(mp3);
        }
        var sound = new Audio(mp3);
        sound.play();
    }
    // Den Beat löschen
    document.getElementById("delete").addEventListener("click", function () {
        drumsounds = [];
    });
});
//# sourceMappingURL=drumpad08ts.js.map
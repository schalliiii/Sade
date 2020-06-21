//Aufgabe 8 mit Tipps von Jasmin Basler gelöst
window.addEventListener("load", function () {
    function playSample(mp3) {
        var allSounds = new Audio(mp3);
        allSounds.play();
    }
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
    //Drum Machine, 3 Beats abspielen
    document.querySelector("#play").addEventListener("click", playstop);
    document.querySelector("#mic").addEventListener("click", recording);
    var threesounds = ["kick.mp3", "snare.mp3", "hihat.mp3"];
    var i = 0;
    var drumbeat;
    function playthreebeats() {
        drumbeat = setInterval(function () {
            playSample(threesounds[i]);
            i++;
            if (i >= threesounds.length) {
                i = 0;
            }
        }, 400);
    }
    //Play Button durch Stop Button ersetzen 
    function playstop() {
        var playstopbutton = document.querySelector("#play");
        if (playstopbutton.getAttribute("class") == "fas fa-play") {
            playstopbutton.setAttribute("class", "fas fa-pause");
            playthreebeats();
        }
        else {
            playstopbutton.setAttribute("class", "fas fa-play");
            stopBeat();
        }
    }
    function stopBeat() {
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
            drumbeat.push(mp3);
        }
        var sound = new Audio(mp3);
        sound.play();
    }
    // Den Beat löschen
    document.getElementById("delete").addEventListener('click', function () {
        drumbeat = [];
    });
});
//# sourceMappingURL=drumpad08ts.js.map
// 7.1: Unterstützung und Tipps von Jasmin Basler
function playSample(mp3) {
    var allSounds = new Audio(mp3);
    allSounds.play();
}
window.addEventListener("load", function () {
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
    // 7.2 Erklärung und Tipps von Jasmin Basler 
    var drumbeat = ["kick.mp3", "snare.mp3", "hihat.mp3"];
    var s = 1;
    function play(here) {
        var threesounds = new Audio(drumbeat[s]);
        threesounds.play();
    }
    document.querySelector("#play").addEventListener("click", function () {
        setInterval(function () {
            play(s - 1);
            s = s;
            s = s + 1;
            if (s > 2) {
                s = 0;
            }
        }, 400);
    });
    // Aufgabe 8  Input und Tipps von Hannah im Praktikum
    document.querySelector("#play").addEventListener("click", playStop);
    document.querySelector("#delete").addEventListener("click", deleteBeat);
    document.querySelector("#mic").addEventListener("click", createBeat);
    var playButton = document.querySelector("#play");
    var intervallloop;
    if (playButton.classList.contains("fa-play")) {
        playButton.classList.remove("fa-play");
        playButton.classList.add("fa-stop");
        intervallloop = setInterval(threesounds, 400);
    }
    else {
        playButton.classList.remove("fa-stop");
        playButton.classList.add("fa-stop");
        clearInterval(intervallloop);
    }
});
//# sourceMappingURL=drumpad08tsjasmin.js.map
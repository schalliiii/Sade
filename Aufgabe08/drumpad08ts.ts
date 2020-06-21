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

    //Drum Machine, 3 Beats abspielen
    document.querySelector("#play").addEventListener("click", playbreak);
    document.querySelector("#mic").addEventListener("click", recording);
    var threesounds: string [] = ["kick.mp3", "snare.mp3", "hihat.mp3"];
    var i: number[] = 0;
    var drumbeat: string [];
    function playthreebeats(): void {
        drumbeat = setInterval(function () {
            playSample(threesounds[i]);
            i++;
            if (i >= threesounds.length) {
                i = 0;
            }
        }, 400);
    }

    //Play Button durch Stop Button ersetzen 
    function playbreak(): void {
        var playstopbutton: void = document.querySelector("#play");
        if (playstopbutton.getAttribute("class") == "fas fa-play") {
            playstopbutton.setAttribute("class", "fas fa-pause");
            playthreebeats();
        }
        else {
            playstopbutton.setAttribute("class", "fas fa-play");
            stoptheBeat();
        }
    }
    function stoptheBeat(): void {
        clearInterval(drumbeat);
    }
    //Den Beat aufnehmen
    var recorder: boolean = false;
    function recording(): void {
        if (recorder) {
            recorder = false;
        }
        else {
            recorder = true;
        }
    }
    function playSample(mp3: string): void {
        if (recorder) {
            drumbeat.push(mp3);
        }
        const sound: HTMLAudioElement = new Audio(mp3);
        sound.play();

    }
    // Den Beat löschen
    document.getElementById("delete").addEventListener("click", function () {
        drumbeat = [];
    });



});




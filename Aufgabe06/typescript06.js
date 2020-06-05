"use strict";
window.addEventListener('load', function () {
    document.querySelector(".europe").addEventListener('click', EuropeFunction);
    document.querySelector(".northamerica").addEventListener('click', NorthamericaFunction);
    document.querySelector(".southamerica").addEventListener('click', SouthamericaFunction);
    document.querySelector(".africa").addEventListener('click', AfricaFunction);
    document.querySelector(".asia").addEventListener('click', AsiaFunction);
    document.querySelector(".australia").addEventListener('click', AustraliaFunction);
    function EuropeFunction() {
        document.getElementsById("continent").innerHTML = "Europe";
        document.getElementById("wort1").innerHTML = "Europe";
        document.getElementById("Wert1").innerHTML = "4209.3 kg CO2";
        document.getElementById("Wert2").innerHTML = "16.85577672348352 %";
        document.getElementById("Wert3").innerHTML = "-0.152324949151177 %";
        document.getElementById("Wert4").innerHTML = "-756.3999999999996 kg CO2";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 16.85577672348352% ");
    }
    function NorthamericaFunction() {
        document.getElementById("continent").innerHTML = "Northamerica";
        document.getElementById("wort1").innerHTML = "Northamerica";
        document.getElementById("Wert1").innerHTML = "6035.6 kg CO2";
        document.getElementById("Wert2").innerHTML = "21.184235729948313 %";
        document.getElementById("Wert3").innerHTML = "-0.08557057148051622 %";
        document.getElementById("Wert4").innerHTML = "-564.7999999999993 kg CO2";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 21.184235729948313 % ");
    }
    function SouthamericaFunction() {
        document.getElementById("continent").innerHTML = "Southamerica";
        document.getElementById("wort1").innerHTML = "Southamerica";
        document.getElementById("Wert1").innerHTML = "1261.5 kg CO2";
        document.getElementById("Wert2").innerHTML = "4.6555275344741425 %";
        document.getElementById("Wert3").innerHTML = "0.1138089351933605 %";
        document.getElementById("Wert4").innerHTML = "128.9000000000001 kg CO2";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 4.6555275344741425 % ");
    }
    function AfricaFunction() {
        document.getElementById("continent").innerHTML = "Africa";
        document.getElementById("wort1").innerHTML = "Africa";
        document.getElementById("Wert1").innerHTML = "1235.5 kg CO2";
        document.getElementById("Wert2").innerHTML = "3.5082273557806363 %";
        document.getElementById("Wert3").innerHTML = "1200.8482490272372 %";
        document.getElementById("Wert4").innerHTML = "1234.472 kg CO2";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 3.5082273557806363 %  ");
    }
    function AsiaFunction() {
        document.getElementById("continent").innerHTML = "Asia";
        document.getElementById("wort1").innerHTML = "Asia";
        document.getElementById("Wert1").innerHTML = "16274.1 kg CO2";
        document.getElementById("Wert2").innerHTML = "46.218073485737406 %";
        document.getElementById("Wert3").innerHTML = "0.2562313291701081 %";
        document.getElementById("Wert4").innerHTML = "3319.3999999999996 kg CO2";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 46.218073485737406 %  ");
    }
    function AustraliaFunction() {
        document.getElementById("continent").innerHTML = "Australia";
        document.getElementById("wort1").innerHTML = "Australia";
        document.getElementById("Wert1").innerHTML = "2100.5 kg CO2";
        document.getElementById("Wert2").innerHTML = "7.57815917057599 %";
        document.getElementById("Wert3").innerHTML = "0.05393878575012544 %";
        document.getElementById("Wert4").innerHTML = "107.5 kg CO2";
        document.querySelector(".chartWrapper .chart").setAttribute("style", "height: 7.57815917057599 %  ");
    }
});
//# sourceMappingURL=typescript06.js.map
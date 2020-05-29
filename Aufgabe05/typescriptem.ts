var EUROPA: number = 4965.70 + 4616.40 + 4705.80 + 4615.20 + 4541.50 + 4436.90 + 4202 + 4191.60 + 4247.30 + 4278.70 + 4209.30;
var NORDAMERIKA: number = 6600.40 + 6139.90 + 6375.80 + 6262.80 + 5998.90 + 6.167 + 6268.90 + 6048.70 + 5938.30 + 5920.50 + 6035.60;
var SÜDAMERIKA: number = 1132.60 + 1132.60 + 1093.10 + 1164.20 + 1215.50 + 1.262 + 1308.90 + 1331.30 + 1321.70 + 1294.70 + 1279.20 + 1261.50;
var AFRIKA: number = 1.028 + 1041.90 + 1072.10 + 1073.70 + 1107.10 + 1134.40 + 1167.10 + 1174.50 + 1192.10 + 1.207 + 1235.50;
var ASIEN: number = 12954.70 + 13246.60 + 13986.80 + 14860.10 + 15308.80 + 15660.20 + 15787.70 + 15.877 + 15.984 + 16274.30 + 16274.10;
var AUSTRALIEN: number = 1993.00 + 1875.70 + 1939.10 + 2035.20 + 2063.20 + 2014.70 + 2027.60 + 1986.80 + 1997.40 + 2001.30 + 2100.50;
var WELT: number = EUROPA + NORDAMERIKA + SÜDAMERIKA + AFRIKA + ASIEN + AUSTRALIEN;

var europaw: number = (EUROPA / WELT) * 100;
var nordamerikaw: number = (NORDAMERIKA / WELT) * 100;
var südamerikaw: number = (SÜDAMERIKA / WELT) * 100;
var afrikaw: number = (AFRIKA / WELT) * 100;
var asienw: number = (ASIEN / WELT) * 100;
var australienw: number = (AUSTRALIEN / WELT) * 100;

var EUROPE: number = (4209.30 - 4965.70) / 4965.70 ;
var NORTHAMERICA: number = (6035.60 - 6600.40) / 6600.40 ;
var SOUTHAMERICA: number = (1261.50 - 1132.60) / 1132.60;
var AFRICA: number = (1235.50 - 1.028) / 1.028 ;
var ASIA: number = (16274.10 - 12954.70) / 12954.70;
var AUSTRALIA: number =  (2100.50 - 1993.00) / 1993.00;

var europe: number = 4209.30 - 4965.70 ;
var northamerica: number = 6035.60 - 6600.40 ;
var southamerica: number = 1261.50 - 1132.60 ;
var africa: number = 1235.50 - 1.028 ;
var asia: number = 16274.10 - 12954.70 ;
var australia: number =  2100.50 - 1993.00 ;

console.group("EUROPA");
console.log("Die Emission von Europa ist: + EUROPA + kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit + europaw + %");
console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um +EUROPE + % verändert");
console.log("2018 im Vergleich zu 2008 sind das + europe + kg CO2");
console.groupEnd();

console.group("NORDAMERIKA");
console.log("Die Emission von Nordamerika ist: + NORDAMERIKA + kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit + nordamerikaw + %");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um + NORTHAMERICA + % verändert");
console.log("2018 im Vergleich zu 2008 sind das + northamerica + kg CO2");
console.groupEnd();

console.group("SÜDAMERIKA");
console.log("Die Emission von Südamerika ist: + SÜDAMERIKA + kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit + südamerikaw + %");
console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um + SOUTHAMERICA + % verändert");
console.log("2018 im Vergleich zu 2008 sind das + southamerica + kg CO2");
console.groupEnd();

console.group("AFRIKA");
console.log("Die Emission von Afrika ist: + AFRIKA + kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit + afrikaw + %");
console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um + AFRICA + % verändert");
console.log("2018 im Vergleich zu 2008 sind das + africa + kg CO2");
console.groupEnd();

console.group("ASIEN");
console.log("Die Emission von Asien ist: + ASIEN + kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit + asienw + %");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um + ASIA + % verändert");
console.log("2018 im Vergleich zu 2008 sind das + asia + kg CO2");
console.groupEnd();

console.group("AUSTRALIEN");
console.log("Die Emission von Australien ist: + AUSTRALIEN + kg CO2");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit + australienw + %");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um + AUSTRALIA + % verändert");
console.log("2018 im Vergleich zu 2008 sind das + australia + kg CO2");
console.groupEnd();



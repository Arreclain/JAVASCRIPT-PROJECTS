var first = 0;
var second = 1;
var current = 0;
var Instruments = ["ocarina", "harp", "flute", "harmonica", "guitar", "drums"]


function callLoop() {
    var i = 0;
    while (i < 11) {
        current = first + second;
        document.getElementById("fib").innerHTML += " " + current;
        first = second;
        second = current;
        i++;
    }
}

function getLength() {
    alert(" " + document.getElementById("fib").innerHTML.length);
}

function forLoop() {
    var i;
    var instruList = "Instruments, with string length: "
    for (i = 0; i < Instruments.length; i++) {
        instruList += Instruments[i] + "  " + Instruments[i].length + ", ";
    }
    document.getElementById("listOfInstruments").innerHTML = instruList;
}

function printIntrument(){
    result = Instruments[instrumentPicker.value];
    document.getElementById("arrayOutput").innerHTML = result;
}

function constantFunction(){
    
}
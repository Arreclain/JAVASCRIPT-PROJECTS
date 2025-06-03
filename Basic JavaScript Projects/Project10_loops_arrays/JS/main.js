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

//I nned to make an object using the const keyword.  It's properties will need to include values.
const demo = {
    tool: "leafblower",
    volumne: "loud"
}
//displays a string using .innerHTML that includes a property value of my object 
function constantFunction(){
    var message = "You chose a " +demo.tool+ " and it is "+demo.volumne +".";
    document.getElementById("constantP").innerHTML = message;
}
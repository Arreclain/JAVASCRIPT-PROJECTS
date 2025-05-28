var townBread = 0;

function bakery() {
    var bakedBread = 0;
    function bakeBread() {
        bakedBread += 5;
    }
    function shipBread() {
        townBread += bakedBread;
        bakedBread = 0;
    }
    bakeBread();
    bakeBread();
    shipBread();
    document.getElementById("breadReport").innerHTML = "Milan has " + townBread + " loaves of bread from this one bakery.";
}

function updateTime() {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    document.getElementById("clock").innerHTML = "The local time is: " + hours + ":" + minutes;
    //    alert("Event triggered.");
}

function timeFunction(){
    var time = new Date().getHours();
    var output = "error";

        if(time < 12 == time > 6){
            output = "It's the morning."; 
        }
        else if( time >=12 && time < 16){
            output = "It's the afternoon.";
        }
        else if(time >=16 && time < 21){
            output = "It's the evening.";
        }
        else{
            output = "Go to bed.";
        }
        document.getElementById("Time_of_Day").innerHTML = output;
}


var minutes = 2;
var seconds = 0;
const wire = Math.floor(Math.random()*10 + 1);
const correctWire = "wire" + wire;
var clockItself;

function startClock() {
    //alert("A timer has started");
    clockItself = setInterval(decrement, 1000);
//    console.info(wire);
}

function decrement() {
       if (document.getElementById(correctWire).checked == true) {
           clearInterval(clockItself);
           alert("You stopped the clock.  You're a hero!  I guess?");
       } 
    seconds--;
    if (seconds < 0) {
        seconds = 59;
        minutes--;
        if (minutes < 0) {
            seconds = 0;
            minutes = 0;
            alert("You ran out of time.  The correct choice was "+ correctWire);
            clearInterval(clockItself);
            return;
        }
    }
    document.getElementById("countdownTimer").innerHTML = minutes + ":" + seconds;
} 
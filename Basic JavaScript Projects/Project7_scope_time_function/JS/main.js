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
    document.getElementById("breadReport").innerHTML = "Milan has " + townBread +" loaves of bread from this one bakery.";
}

function updateTime(){
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    document.getElementById("clock").innerHTML = "The local time is: " + hours + ":" + minutes;
//    alert("Event triggered.");
}
    var minutes = 2;
    var seconds = 0;

function startClock(){
    alert("A timer has started");
    setInterval(decriment,1000);
    function decriment(){
        seconds--;
        if (seconds < 0){
            seconds = 59;
            if(minutes < 0){
                seconds = 0;
                minutes = 0;
                alert("You ran out of time.");
                return null;
            }
            minutes--;
        }
        document.getElementById("countdownTimer").innerHTML = minutes + ":" + seconds;
    }

}
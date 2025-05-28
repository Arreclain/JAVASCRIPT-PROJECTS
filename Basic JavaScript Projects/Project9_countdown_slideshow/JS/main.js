function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        //Wow this was smoother than what I did in Project 7.
        timer.innerHTML = seconds;
        //Okay, this is also more convenient.  I used setInterval.
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's Up!");
            //OMG, this is again nicer than what I did.
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

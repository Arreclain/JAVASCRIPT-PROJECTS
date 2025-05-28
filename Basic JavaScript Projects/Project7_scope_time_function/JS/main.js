/*                  The Bakery                  */
//A global variable.
var townBread = 0;
//A function with a local variable.  
//When called, it runs two nested variables, uses the local variable, updates the global variable, and then prints that one out to the page.
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

/*                    Update Time                      */
//Just once, on click, prints out the time.  If the local variables were vars, then I think it would check each time.
function updateTime() {
    const hours = new Date().getHours();
    const minutes = new Date().getMinutes();
    document.getElementById("clock").innerHTML = "The local time is: " + hours + ":" + minutes;
    //    alert("Event triggered.");   I was checking that things were running.  This is a debugging fossil.
}


/*                          timeFunction                        */
//This is the requested function, taking advantage of the liberty afforded me earlier, to not have to do things verbatim.
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
        //Print the verbal time of day.  Helpful if you live in a bunker with no windows.
        document.getElementById("Time_of_Day").innerHTML = output;
}

/*                          The Timer Function                           */
//Global variables and two constants.  The top variables track the displayed time on the timer.
var minutes = 2;
var seconds = 0;
//This constant assigns which wire is the correct wire.
const wire = Math.floor(Math.random()*10 + 1);
//I'm not sure if it's *critical* but this constant casts it as a string for when we check the user input later.
const correctWire = "wire" + wire;
//This let's me abort the interval function.  It was *not* okay with being an undefined constant, so now it's a var.
var clockItself;

//It...it...I remember leaving a note as to what startClock() does somewhere...
function startClock() {
    //alert("A timer has started");      Me checking if it's being called at all.  I had issues since onload was attached to a paragraph tag and that's a no-no.
    clockItself = setInterval(decrement, 1000);
    //console.info(wire);                There are only so many times that wire1 is the correct wire before you use console to learn that wire needs a X10 in it's defining equation.
}

//Okay, this is a bigger function.  It handles the timer.
function decrement() {
    //If wire is cut, stop timer, then tell the player that they won.
       if (document.getElementById(correctWire).checked == true) {
           clearInterval(clockItself);
           alert("You stopped the clock.  You're a hero!  I guess?");
       } 
       //An unstopped timer must progress.  It does so one second at a time.  It turns out Java and JavaScript share the x-- means of reducing a value  : )
    seconds--;
    //What if seconds would become negative?
    if (seconds < 0) {
        //go to 59 seconds (60-1) since we would have pulled a second from a whole minute.
        seconds = 59;
        //That means we broke into a minute.  Reduce minutes by 1.
        minutes--;
        //What if we were out of minutes?
        if (minutes < 0) {
            //Abort the clock, setting values to 0:0.
            seconds = 0;
            minutes = 0;
            //Depress the player, ruining their day and their hopes of stopping the timer.
            alert("You ran out of time.  The correct choice was "+ correctWire);
            //Seriously, stop that timer.  This took research.  I had to assign it an id (so to speak) and everything just to get it to quit.
            clearInterval(clockItself);
            //You don't return null in JavaScript.  You just return.  I ...  you know what, have an unclosed paren (
            return;
        }
    }
    //Update the time in the timer.
    document.getElementById("countdownTimer").innerHTML = minutes + ":" + seconds;
} 

//I loved writing this timer function.  It was challenging and fun.
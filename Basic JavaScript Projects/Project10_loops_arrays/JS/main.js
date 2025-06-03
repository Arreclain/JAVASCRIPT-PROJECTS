var first = 0; //These top three are used to make the fibonacci sequence.
var second = 1;
var current = 0;
var Instruments = ["ocarina", "harp", "flute", "harmonica", "guitar", "drums"] //A list for forLoop().


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

//Don't be fooled, this uses the result of the fibonacci sequence generating callLoop(), pulled from the html after it is written there.  : )
function getLength() {
    alert(" " + document.getElementById("fib").innerHTML.length);
}

//Let is used, and I use a for loop to spit out instruments, followed by a count of how many letters are in their name.
function forLoop() {
    let i;
    var instruList = "Instruments, with string length: "
    for (i = 0; i < Instruments.length; i++) {
        instruList += Instruments[i] + "  " + Instruments[i].length + ", ";
    }
    document.getElementById("listOfInstruments").innerHTML = instruList;
}

function printIntrument() {
    result = Instruments[instrumentPicker.value];  //The slider's input is read as a value and put into the instrument's array.
    document.getElementById("arrayOutput").innerHTML = result;  //Prints out the value at that array.
}

//I needed to make an object using the const keyword.  It's properties needed to include values.
const demo = {
    tool: "leafblower",
    volumne: "loud"
}

//Displays a string using .innerHTML that includes a property value of my object.
function constantFunction() {
    let message = "You chose a " + demo.tool + " and it is " + demo.volumne + ".";
    document.getElementById("constantP").innerHTML = message;
    function blast() {
        let message = "Everyone heard you use the " + demo.tool + ".";
        return message;  //Played around with scope here.  This inner version of message should have ended with the closing of the function blast();
    }
    alert(blast());
}

//Writing this for myself again: var is limited in that it never has just block scope.  It is always either global or function level.  Let and constant can be at any of the three levels.

//I got tired of reading about cars as objects.  Here, have a thrilling warehouse.
let warehouse = {
    storage: ["haunted relics", "empty", "empty", "empty", "empty"],
    ship: function (x) {
        this.storage[x] = "empty";  //What is this, Star Trek?  Resources are finite, even if that doesn't need to be true.  I am a cruel programmer.
    },
    store: function (x, y) {
        toString(y);  //Just in case of tom-foolery, I force it to be a string.
        this.storage[x] = y;
    }
}
var warehouse1;  //This got moved out of the function, as it was going to be a headache.
function spendMoney() {
    warehouse1 = new Object(warehouse);
    document.getElementById("purchasedLand").innerHTML = "You have built a warehouse.  It is currently empty.";
}

//I debugged a lot here.  Anyway, it calls upon the object warehouse1, skips the first room, and puts things in the others.
function buyGoods() {
    if (document.getElementById("purchasedLand").innerHTML == "Empty Lot") {
        alert("You don't own a warehouse.  Go get one first.");
        return; //If you don't pass my error check, I want nothing to do with you.
    }
    else {
        var i = 0;
       // console.log("I equals = " + i + "and warehouse1.length = " + warehouse1.storage.length);
        while (i < warehouse1.storage.length) {
            if (i == 0) {
                alert("The door is locked.  We cannot store anything in room 1");
                i++;
                continue;
            }
            if (i % 2 == 0) {
                warehouse1.store(i,"stone");
               // alert("I equals exactly = " +i);
            }
            if (i % 2 == 1) {
                warehouse1.store(i,"wood");
            }
            if (i === (warehouse1.length - 1)) {
               // alert("The warehouse is full, barring the locked first room");
                break;  //Yes, it would have left the loop anyway, but the creative braincells are all out on lunch, so you get this result.
            }
           // console.log("I equals = " + i);
            i++;
        }
    }
    //alert("The loop ended");
}
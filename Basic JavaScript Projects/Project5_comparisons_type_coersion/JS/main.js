function coercion() {
    let x = "Help";
    let y = 7;
    let a = x + y;
    let b = y + x;
    document.getElementById("aResults").innerHTML = "String plus a number yields a " + typeof a;
    document.getElementById("bResults").innerHTML = "A number plus a string yields a " + typeof b;
    //document.write(typeof a);
    //document.write(typeof b);

    document.getElementById("naanIsBread").innerHTML = 0 / 0;
    document.getElementById("correct").innerHTML = isNaN("Run");
    document.getElementById("incorrect").innerHTML = isNaN(3);

    document.getElementById("toInfinity").innerHTML = 3E320;
    document.getElementById("andBeyond").innerHTML = -3E320;
}

function booleans() {
    let x = 16;
    part1 = false;
    part2 = false;
    reply = "Well..."

    reply += (x % 2 == 0);
    reply += " and "
    reply += (x > 20);
    reply += "."
    document.getElementById("theBox").innerHTML = reply;
    console.log("Finished Booleans" + (2 + 2) + (5 < 3));
}

function write(location, text) {
    let p = "";
    p += location;
    document.getElementById(p).innerHTML = text;
}

function madness() {
    let a = 5;
    let b = "5";
    let c = 7;
    let d = false;

    write("sameTypeData", a === a);
    write("differentBoth", a === d);
    write("sameType", a === c);
    write("sameData", a === b);

}

function moreMadness(){
    let a = 3;
    let b = 4;

    write("andCompareTrue", a%3==0 && a >= 2);
    write("andCompareFalse", a%3==0 && a >= 5);
    write("orCompareTrue", b%2==0 || b > 20);
    write("orCompareFalse", b%5 == 0, b > 10);
}

function notCompare(){
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNumber").value;
    alert("A = " + firstNumber + " and B = "+ secondNumber);
    //alert("Is it possible to display a value? "+ c);
    write("compareResults",!(firstNumber < secondNumber));
}
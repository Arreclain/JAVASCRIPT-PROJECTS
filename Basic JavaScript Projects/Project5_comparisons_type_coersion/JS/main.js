function coercion(){
let x = "Help";
let y = 7;
let a = x+y;
let b = y+x;
document.getElementById("aResults").innerHTML = "String plus a number yields a " + typeof a;
document.getElementById("bResults").innerHTML = "A number plus a string yields a " + typeof b;
//document.write(typeof a);
//document.write(typeof b);

document.getElementById("naanIsBread").innerHTML = 0/0;
document.getElementById("correct").innerHTML = isNaN("Run");
document.getElementById("incorrect").innerHTML = isNaN(3);

document.getElementById("toInfinity").innerHTML = 3E320;
document.getElementById("andBeyond").innerHTML = -3E320;
}

function booleans(){
    let x = 16;
    part1 = false;
    part2 = false;
    reply = "Well..."

    reply+= (x%2 == 0);
    reply+=" and "
    reply+= (x>20);
    reply+="."
    document.getElementById("theBox").innerHTML = reply;
}
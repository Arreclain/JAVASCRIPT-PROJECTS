
function double(y){
    return answer = y+y;
}

function negateSelf(y){
    return answer = y-y;
}

function makeBig(y){
    return answer = y * y;
}

function makeSmall(y){
    return answer = y / y;
}

function doMath(x){
    let text = "Ten added to ten equals = " + double(x);
    let text2 = "Ten subtracted from ten equals = " + negateSelf(x);
    let text3 = "Ten times ten equals = " + makeBig(x);
    let text4 = "Ten divided by ten equals = " + makeSmall(x);

    document.getElementById("Math").innerHTML = text;
    document.getElementById("Anti-Math").innerHTML = text2;
    document.getElementById("MakeBig").innerHTML = text3;
    document.getElementById("MakeSmall").innerHTML = text4;
}

function bigMaths(){
    document.getElementById("its3guys").innerHTML = (3 * 10 + 6 / 2)%10 + " is your answer.  No big deal.";
}

function sigh(y){
return -y;
}

function bigSigh(){
    let explanation = "Look, you don't know this, but I once tutored middle school math.  The kids, to waste time, would pretend they didn't understand how to make numbers negative." +
    "  It's okay, you didn't know, but I basically have been asked this question for weeks on end before." +
    "  In short, yes, it's easy.  First, we can mulitply, lets say, 5, by negative 1, for " + 5 * (0-1) +
    ".  Or we can just flip the sign on it mentally, which is the same action.  Like this: " + sigh(5) +
    ".  Okay, I'm not going to answer that question anymore.  Thank you."

 document.getElementById("disappointment").innerHTML = explanation;
}

function isEven(x){
    if(x%2 == 0) return true;
    else return false;
}

function aWhileLoop(x,y){
    let output = "Results = ";
    while(y>0){
        if(isEven(y) == true){
            output += x++ + ", ";
        }
        else{
            output += x-- + ", ";
        }
        y--;
    }
    document.getElementById("looped").innerHTML = output + " is the result.";
}

function write(location,text){
    let p = "";
    p += location;
    document.getElementById(p).innerHTML = text;
}

function powerlevel(){
    answer = "Your power level is " +Math.random()*1000+"!  Wow!";
    write("powerLevel",answer);
}

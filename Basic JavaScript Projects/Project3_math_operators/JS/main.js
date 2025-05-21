//This beauty shortens the hideous document.getElementByID().innerHTML pathway that I keep having to use.
function write(location,text){
    let p = "";
    p += location;
    document.getElementById(p).innerHTML = text;
}

//A use of addition.
function double(y){
    return answer = y+y;
}

//A use of subtraction.
function negateSelf(y){
    return answer = y-y;
}

//A use of multiplication.
function makeBig(y){
    return answer = y * y;
}

//A use of division.
function makeSmall(y){
    return answer = y / y;
}

//This is called by the first button.
function doMath(x){
    //I first call all of the math functions above, then append the results to strings.
    let text = "Ten added to ten equals = " + double(x);
    let text2 = "Ten subtracted from ten equals = " + negateSelf(x);
    let text3 = "Ten times ten equals = " + makeBig(x);
    let text4 = "Ten divided by ten equals = " + makeSmall(x);

    //Here, I make the printer go brr and print out all of the results.
    write("Math",text);
    write("Anti-Math",text2);
    write("MakeBig",text3);
    write("MakeSmall",text4);
}

//With this function and the second button, I use all the earlier math operators and then also use the modulus operator.
//Due to bad design in the above functions, I cannot call them here.
function bigMaths(){
    let text = (3 * 10 + 6 / 2)%10 + " is your answer.  No big deal.";
    write("its3guys", text);
}

//This function does what middle schoolers /"failed/" to do over about 5 weeks.
function sigh(y){
return -y;
}

//This function calls sigh(y) within a block of exposition.
function bigSigh(){
    let explanation = "Look, you don't know this, but I once tutored middle school math.  The kids, to waste time, would pretend they didn't understand how to make numbers negative." +
    "  It's okay, you didn't know, but I basically have been asked this question for weeks on end before." +
    "  In short, yes, it's easy.  First, we can mulitply, lets say, 5, by negative 1, for " + 5 * (0-1) +
    ".  Or we can just flip the sign on it mentally, which is the same action.  Like this: " + sigh(5) +
    ".  Okay, I'm not going to answer that question anymore.  Thank you."

 write("disappointment",explanation);
}

//This probably exists in Math.  Hold on.  OMG, it's not there.  Well, it returns true if the number is even.
function isEven(x){
    if(x%2 == 0) return true;
    else return false;
}

//This function alternates incrementing and decrementing x while it decrements y.  When y = 0, the loop ends.
//It also prints out the summed string.
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
    write("looped", output + " is the result.");
}


//Math.random() returns a random value betwee 0 and 1.
//Math.ceil() rounds the float within to the nearest int.
//Together, they yield a more DBZ friendly result.
function powerlevel(){
    answer = "Your power level is " + Math.ceil(Math.random()*1000)+"!  Wow!";
    write("powerLevel",answer);
}

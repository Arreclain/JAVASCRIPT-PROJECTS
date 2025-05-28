//Some global variables.
var a = "A";
var b = "a";
var c = "h!";
var sentence = "This is a test sentence.";

//Stortens the printing of results.
function write(location, text) {
    let p = "";
    p += location;
    document.getElementById(p).innerHTML = text;
}

//Uses concat()
function text1Fill() {
    var output = a.concat(b, b, b, b, c);
    write("text1", output);
}

//uses slice()
function slicer() {
    var section = sentence.slice(3, 9);
    write("slice", section);
}

//uses toUpperCase() in order to scream the sentence into the paragraph
function text2Fill() {
    write("text2", sentence.toUpperCase());
}

//Uses lastOfIndex() to find the last "en" in sentence.
function text3Fill() {
    write("text3", sentence.lastIndexOf("en"));
}

//Makes a 4 into a 4, but string flavored.
function text4Fill() {
    var x = 4;
    write("text4", x.toString());
}

//Truncates to 4 digits.
function text5Fill() {
    var x = 234.835894;
    write("text5", x.toPrecision(4));
}

//Okay, I just have to say, that toFixed() is *truncating* not *rounding.*
//(laughing at past self)
function text6Fill() {
    var x = 23.798;
    write("text6", x.toFixed(2));
    //Okay, well, in the W3 schools example, it was truncating.  I'm not crazy.
}

//Even if I just put the write() function in here, it would have inherently used valueOf().
function text7Fill(){
    /*And I quote: "The valueOf() method is the default method for JavaScript strings.

    It is used internally by JavaScript.

    Normally, you will not use it in your code." 
    from https://www.w3schools.com/jsref/jsref_valueof_string.asp*/
    write("text7", a.valueOf());
}

//Java?  Is that you?  I miss you.
function main() {
    text1Fill();
    slicer();
    text2Fill();
    text3Fill();
    text4Fill();
    text5Fill();
    text6Fill();
    text7Fill();
}
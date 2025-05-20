//var var1 = "Our powers combined";
//var var2 = " create one complete sentence!";
var lure = "Hover your mouse here...";  //This is the base state of the paragraph with the id JS-Target.
var springTheTrap ="and yet more text will appear...";  //This is the appended string that is applied via concatonate().

//Okay, so originally there was a function that added var1 and var2.
//Instead I have done something more interesting than typing a sentence in a paragraph using a function.


//This function uses a button to reset the initial string in the paragraph id = JS-Target.
 function reset() {
    document.getElementById("JS-Target").innerHTML = lure;
    //alert("Should have reset page.");   This was an old error catching message.  
    //I had forgotten to use the new name after I repurposed this function.
 }


 //This function triggers on mouse over, adding the string var name "springTheTrap" to the contents of p id = JS-Target.
 function concatonate(){
    document.getElementById("JS-Target").innerHTML += springTheTrap;
 }
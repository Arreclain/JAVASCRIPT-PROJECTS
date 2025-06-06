//Parses down the form, checking that things have been answered.
function validateForm() {
    var txt = document.getElementsByClassName("textField");  //Used successfully when checking if text boxes have answers.
   // var rad = document.getElementById("psyRating");    //I'm no longer using this.  It seems return a 1 and not be easy to work with generally.
    var radioUsed = false;  //This should be flagged true if a radio button has been pressed.
    var scrl = document.getElementById("scroll").value;


    //This part works.  It checks that there is input in the text boxes (first and last name, home region).
    for (i = 0; i < txt.length; i++) {
        if (txt[i] == "") {
            alert("Text fields left blank");
            return false;
        }
    }
  //This part also works.  It throws a fit if the user did not pick a homeworld/station.
    if (scrl == "noChoiceMade") {
        alert("Please input your homeworld, colony, or station of origin.");
        return false;
    }

    //A reminder to check to see if they entered their rating as a psychic.



    //                        The problem section, the Radio Buttons.

    //This top one is for id='TelepathForm'
   // alert("Length of radio button = " + document.getElementsByName("psyApt").length);  //This returns 4.  There are 3 options.  This is a clue, somehow.
    for (i = 0; i < document.getElementsByName("psyApt").length; i++) {
        if (document.getElementsByName("psyApt")[i].checked == true) {  //document.forms[0][i].checked returns undefined.  This is also a problem.
            radioUsed = true;
            //alert("Choice number " + i +" was selected.");
        }
        //alert("i = " + i + " and rad[i] = " + document.getElementsByName("psyApt")[i].checked);
    }
    if (radioUsed == false) {
        alert("Please report power type, or unknown if unknown to you.");
        return false;
    }

    rad = document.getElementById("radioQuestion2");  //I know for a fact that my code isn't even getting here.
    radioUsed = false;
    //alert("Length of radio button = " + document.getElementsByName("blipQ").length);
    for (i = 0; i < document.getElementsByName("blipQ").length; i++) {
        if (document.getElementsByName("blipQ")[i].checked) radioUsed = true;
    }
    if (radioUsed == false) {
        alert("You MUST report if you were apprehended as a blip.");
        return false;
    }
    return true;
}


//No longer used by the submitForm() function.  It orders and tells me the name of all of my forms so I can pick the right one above.
function formList() {
    for (x = 0; x < document.forms.length; x++)
        console.log("Form " + x + " is " + document.forms[x].id);
    //This returns 4 entries and names them correctly.
}



//              Main: it calls validateForm(), is triggered when the user hits the submit button.

function submitForm() {
    //    alert("Submitted form.")
    //  formList();
    if (validateForm() == false) {
        alert("Answer every question on the form.");  //This ending is being reached.
    }
    else {
        alert("Thank you for your cooperation.  Remember: the Corp is Mother; the Corp is father.");
    }
}
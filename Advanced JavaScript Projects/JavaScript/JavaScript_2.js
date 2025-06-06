function validateForm() {
    var txt = document.getElementsByClassName("textField");
   // var rad = document.getElementById("psyRating");
    var radioUsed = false;
    var scrl = document.getElementById("scroll").value;

    for (i = 0; i < txt.length; i++) {
        if (txt[i] == "") {
            alert("Text fields left blank");
            return false;
        }
    }
  //  alert("Planet Choice = " + scrl);
    if (scrl == "noChoiceMade") {
        alert("Please input your homeworld, colony, or station of origin.");
        return false;
    }

    alert("Document.forms[0] length = " + document.forms[0].length);
    for (i = 0; i < document.forms[0].length; i++) {
        if (document.forms[0][i].checked == true) {
            radioUsed = true;
            alert("Choice number " + i +" was selected.");
        }
        alert("i = " + i + " and rad[i] = " + document.forms[i].checked);
    }
    if (radioUsed == false) {
        alert("Please report power type, or unknown if unknown to you.");
        return false;
    }

    rad = document.getElementById("radioQuestion2");
    radioUsed = false;
    alert("Radio question 2 length = " + document.forms[1].length);
    for (i = 0; i < document.forms[1].length; i++) {
        if (document.forms[i].checked) radioUsed = true;
    }
    if (radioUsed == false) {
        alert("You MUST report if you were apprehended as a blip.");
        return false;
    }

}

function formList() {
    for (x = 0; x < document.forms.length; x++)
        console.log("Form " + x + " is " + document.forms[x].id);
}

function submitForm() {
    //    alert("Submitted form.")
//    formList();
    if (validateForm() == false) {
        alert("Answer every question on the form.")
    }
    else {
        alert("Thank you for your cooperation.  Remember: the Corp is Mother; the Corp is father.")
    }
}
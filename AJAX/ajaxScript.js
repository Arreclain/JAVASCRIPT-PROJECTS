function getMsg() {
    //Step 1: setup the XML HTTP Request object.
    let ajaxRequest = new XMLHttpRequest();

    //Get input user name for display once the request has been made.

    let inputVal = document.getElementById("fullName").value;

    //Function to display user input value once the request has been recieved.
    ajaxRequest.onload = function () {
        document.getElementById("tkuMsg").innerHTML = "Thank you " +
            inputVal + " for signing up!";
    }

    //Step 2: prepare the type of request and what to 
    //request from the server.
    ajaxRequest.open('GET', 'response.html', true);

    //Step 3: defines the AJAx response callback method that establishes
    //whether the response was successful and where the data should
    //be displayed.
    ajaxRequest.onreadystatechange = function () {
        //status of 200 means that there was a successful this.response.
        //ready state 4 means that the requested task is complete and 
        // ready to be used by the client computer.
        if (this.readyState === 4 && this.status === 200) {
            document.getElementById('content').innerHTML = ajaxRequest.responseText;
        }

    }

    //Step 4: send the request
    ajaxRequest.send();
}

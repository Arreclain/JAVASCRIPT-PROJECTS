function my_Dictionary(){
    var ShipClass = {
        patrol: "destroyer",  //This is the value that should be displayed.
        //patrol: "bomber",
        skirmish: "corvette",
        raid: "frigate",
        battle: "cruiser",
        war: "battleship"
    };
    delete ShipClass.patrol;  //This deletes that value before it gets displayed.
    document.getElementById("Dictionary").innerHTML = ShipClass.patrol;  //Calls the deleted key value pair.
}
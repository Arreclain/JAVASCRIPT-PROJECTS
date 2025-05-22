function my_Dictionary(){
    var ShipClass = {
        patrol: destroyer,
        skirmish: corvette,
        raid: frigate,
        battle: cruiser,
        war: battleship
    };
    document.getElementById("Dictionary").innerHTML = ShipClass.patrol;
}
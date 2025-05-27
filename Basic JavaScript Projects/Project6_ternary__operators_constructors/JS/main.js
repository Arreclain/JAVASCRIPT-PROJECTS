//Literally what you all asked me to write until line 24.  This includes a ternary operation (Ride_Function's little Height check, three instances of creating an object [Jack, Emily, and Erik] and my_Function, which just talks about a dude's car.)
function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You're too short" : "You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
        "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model
        + " manufactured in " + Erik.Vehicle_Year;
}

//Okay, this is my code.  Here, the function carSale spits out Jack's car details as though it were Erik's.  I would change the values, but Jack hasn't reported the sale to the DMV, so he's still liable for damages concerning his car.  Don't be like Jack.  Report car sales as soon as possible.
function carSale() {
    document.getElementById("New_and_This").innerHTML =
        "Erik buys Jack's " + Jack.Vehicle_Color + " " + Jack.Vehicle_Make + " " +
        Jack.Vehicle_Model + ", which was manufactored in " + Jack.Vehicle_Year + ".  It is " +
        (2025 - Jack.Vehicle_Year) + " years old when it is purchased."
}

//This constructor is for recording groups of people in the Babylon 5 setting.  Alien species.  You know what I mean.
function Babylon5Faction(homeworld, technology, age, alignment) {
    //Spoilers for seasons 3 and onward.  You've been warned.
    //Oh, all of these are strings.
    var homeworld, technology, age, alignment;
    this.homeworld = homeworld;
    this.technology = technology;
    this.age = age;
    this.alignment = alignment;  //Alignment to one of the Ancients, either the Shadows or the Vorlons.
}

//These constructors just add 5 factions.  I was having a little fun.  Also, the age and power of the Mimbari is a little hard to classify.
var Mimbari = new Babylon5Faction("Mimbar", "Advanced", "Venerable", "Vorlons");
var Dilgar = new Babylon5Faction("Omelos", "League", "Extinct", "Shadows (probably)");
var Humans = new Babylon5Faction("Earth", "Influencial", "Younger", "Shadows"); //I warned you.  Sorry.
var Narn = new Babylon5Faction("Narn", "Influencial", "Younger", "None");
var Markab = new Babylon5Faction("Septis", "League", "Younger", "None");

//The Drafa Plague is mimicked by this function that takes a Babylon 5 faction, and make's them go extinct!  One of the most chilling episodes I have ever watched.  Of any show.
function drafa(Babylon5Faction) {
    var target = Babylon5Faction;
    function outbreak() {  //This nexted function takes target from the parent function and sets it's age to "Extinct."  No, that doesn't exactly make sense, but you probably care more about the code than the grammar.
        target.age = "Extinct";
    }
    document.getElementById("Nested_Function").innerHTML = "The people born of " + target.homeworld + ", one of the " + target.age + " factions, is now ";
    outbreak();  //You can't call a function within this kind of thing, so I call it between two parts of the string.  That way, target.age changes before, then after the plague.
    document.getElementById("Nested_Function").innerHTML += target.age + ".";
}

//Uses a ternary comparator to figure out if you're the humans and just botched first contact with a group of people who make the Dilgar look like cake-walk.
function fireFirst(Babylon5Faction) {
    var fools = Babylon5Faction.homeworld;
    var message = (fools == "Earth") ? "Oh no, you've started a war with the Mimbari." : "Oh good, you're not the humans.  Yeesh, that's going badly.";  //Who knew the Markab were almost joined by the humans in the game of "die for your sins."
    alert(message);

}
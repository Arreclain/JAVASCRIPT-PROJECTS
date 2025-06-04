//alert("Your code loaded");  I was figuring out why the link to the script didn't autocomplete.  It is now in the right folder.
var battleTypes = ["patrol", "skirmish", "raid", "battle", "war", "armageddon"];

//I type document.getElementById so much that I feel this method is worth it.
//x equals the location the y string is printed.
function write(x, y) {
    toString(x);
    toString(y);
    document.getElementById(x).innerHTML = y;
}


//This is a simple prototype of part of a UI that helps people with scenarios for a miniatures game.
//With the given input, it goes down a switch and tells you what you can bring to the match.
function battleMapTxt() {
    let scale = battleMap.value;
    let baseMessage = "This is a " + battleTypes[scale] + " level engagement.";
    //alert("Scale equals "+scale);  //Checking that input from the slider read correctly.
    //console.log(typeof(scale));  //Apparently scale is being recorded as a string.  Why, I cannot tell you.
    switch (scale) {
        case "0":
            baseMessage += "  You may bring 4 ships of this size and two wings of fighters."
            write("battleTxtArea", baseMessage);
            break;
        case "1":
            baseMessage += "  You may bring 2 ships of this size, two patrol and four wings of fighters."
            write("battleTxtArea", baseMessage);
            break;
        case "2":
            baseMessage += "  You may bring 2 ships of this size and four patrol or wings of fighters."
            write("battleTxtArea", baseMessage);
            break;
        case "3":
            baseMessage += "  This constitutes a major engagement.  You may bring 2 ships of this size and 6 skirmish level craft as well as 4 wings of fighters."
            write("battleTxtArea", baseMessage);
            break;
        case "4":
            baseMessage += "  This is likely the turning point of the campaign.  You may bring 1 ship of this rank, 2 at battle rank, and up to 8 support craft of either skirmish or patrol rank.  Wings of fighters can replace patrol rank vessels."
            write("battleTxtArea", baseMessage);
            break;
        case "5":
            baseMessage += "  Bring every ship you have in your fleet.  You will need to if you want a chance of winning."
            write("battleTxtArea", baseMessage);
        default:
            console.log("I don't know what you did, but you forced an entry that doesn't exist.");
            break;
    }
}
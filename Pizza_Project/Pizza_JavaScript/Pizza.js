function getReceipt() {
    //This function starts a string so it can get passed from function to function, 
    // growing line by line like Shai-Hulud!  (Dune music plays)
    var text1 = "<h3>You Ordered:</h3>";
    var runningTotal = 0;  //Records the total cost.  Has an appropriate name.
    var sizeTotal = 0;  //This functions like the price.  Should probably be renamed.
    var sizeArray = document.getElementsByClassName("size");  //Records the pizza sizes as an array.
    //For each item in the array, check if checked, then store the cost of the indicated size.
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    } //Oh look, the prices, hidden away in the backend of the code.
    if (selectedSize === "Mini Bite Pizza") {
        sizeTotal = 4;
    }
    else if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    }
    else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    }
    else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    }
    else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    }
    runningTotal = sizeTotal;  //This is where we store sizeTotal
    console.log(selectedSize + " = $" + sizeTotal + ".00");  //Here sizeTotal = runningTotal
    console.log("size text1: " + text1);  //This makes the recipt.
    console.log("subtotal: $" + runningTotal + ".00");  //If this gave null, we would have a issue with sizeTotal.
    //These variables will get passed along to the next function.
    getTopping(runningTotal, text1);  //Pass the info, summon the worm! (Dune music rises in volume)  I mean, summon getTopping()!  (Dune music fades out)
};
function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];  //makes selectedTopping an array.
    var toppingArray = document.getElementsByClassName("toppings"); //Make array of all toppings.
    //Okay, go through the entire array, finding selected toppings.
    for (var j = 0;j < toppingArray.length;j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value); //Topping no longer looks like a word to me.
            console.log("selected topping item: ("+toppingArray[j].value+")"); //Add them to the recipt.
            text1 = text1+toppingArray[j].value+"<br>";  //spoiler alert, every topping costs 1 dollar.
        }
    }  //This next part reduces the number of toppings by 1, to a minimum of 0.
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {  //1 could be 0 and this would still work.
        toppingTotal = (toppingCount -1);  //Discount of 1 topping.
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal+toppingTotal);  //charge them for their toppings.
    //Formats and prints the recipt to console.
    console.log("total selected topping items: "+toppingCount);
    console.log(toppingCount+" topping -1 free topping = $"+toppingTotal+".00");
    console.log("topping text1: "+text1);
    console.log("Purchase Total: $"+runningTotal+".00");
    //Modifies the HTML to display their costs and purchases.
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>";
};
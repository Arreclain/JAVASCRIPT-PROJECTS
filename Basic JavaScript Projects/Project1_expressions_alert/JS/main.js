var A = "Hello World!!";   // A string.  Designed to add to another string in a doc.write.
var B = "\"This string\'ll contain backslashes!\" he said.";  //A string to be used in an alert box and to demonstrate escaping characters. 
var C = "  The world needs a hug."; // A string.  Designed to add to another string in a doc.write.
var x = 1, y = 2, z = 3;  //I assign 3 variables, x, y, and z.  They get the values 1, 2, and 3 respectively.

//The requested variables are grouped below.  They are strings.  They belong together in a specific order, send1, then send2.
var send1 = "This is the beginning of the string";
var send2 =" and this is the end of the string.";

//Actual code here.
window.alert(B);
document.write(A+C);  //sums two strings.
document.write(z+y);  //sums two numeric values.
document.write(send1+send2); //Adds send1 and send2 together to produce a single sentence.
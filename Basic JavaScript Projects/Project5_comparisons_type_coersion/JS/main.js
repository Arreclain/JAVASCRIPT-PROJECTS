function coercion(){
let x = "Help";
let y = 7;
let a = x+y;
let b = y+x;
document.getElementById("aResults").innerHTML = "String plus a number yields a " + typeof a;
document.getElementById("bResults").innerHTML = "A number plus a string yields a " + typeof b;
//document.write(typeof a);
//document.write(typeof b);

}
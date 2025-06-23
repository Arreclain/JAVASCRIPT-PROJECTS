$(document).ready(function(){\
    //The shineLoop function uses the chaining technique to 
    //utilize multiple animate event methods in the same function.
function shineLoop(){
    $(".shine").animate({backgroundPositionX: '1600px'}, 2500)
    .animate({backgroundPositionX: '-800px'}, 2500);
};

    setInterval(shineLoop, 0);
})
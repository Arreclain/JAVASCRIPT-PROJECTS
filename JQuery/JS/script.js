$(document).ready(function(){
    //The shineLoop function uses the chaining technique to 
    //utilize multiple animate event methods in the same function.
function shineLoop(){
    $(".shine").animate({backgroundPositionX: '1600px'}, 2500)
    .animate({backgroundPositionX: '-800px'}, 2500);
};
    //setInterval will repeat the shineLoop function and 500
    //sets the delayed amount of time between each repeat.
    setInterval(shineLoop, 0);

    //Shrinks header size when the top is scrolled down 50px
        $(document).on("scroll", function(){
            if($(document).scrollTop() >50){
                $("h1").addClass("header-scrolled");
            } else {
                $("h1").removeClass("header-scrolled");
            }
        });
})
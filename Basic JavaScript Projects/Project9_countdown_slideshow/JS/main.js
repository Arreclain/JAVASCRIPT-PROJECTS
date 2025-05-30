//Timer work.
function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        //Wow this was smoother than what I did in Project 7.
        timer.innerHTML = seconds;
        //Okay, this is also more convenient.  I used setInterval.
        var time = setTimeout(tick, 1000);
        if (seconds == -1) {
            alert("Time's Up!");
            //OMG, this is again nicer than what I did.
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();
}

//Slideshow work.
let slideIndex = 1;  //Starts on the middle slide.
showSlides(slideIndex);

//Changes the slideIndex and calls showSlides via arrows.
function changeSlide(x) {
    showSlides(slideIndex += x);  //Called by the arrow keys, so it scrolls through the array.  Hence the += part of the showSlides().
}

//Activating slides via Dots.
function currentSlide(x) {
    showSlides(slideIndex = x);  //Dots pick a picture directly, hence the arg in showSlides is a number [x].
}

function showSlides(x) {
    let i;
    let slides = document.getElementsByClassName("slide");  //Builds an array of objects.
//    alert(slides.length);
    let dots = document.getElementsByClassName("dot");  //Redundancy, should it not equal the number of slides.
    if(x>slides.length){
        slideIndex=1;  //A catch if x is too big.  Returns to the second picture [0,1,2].
    }
    if(x<1){
        slideIndex=slides.length;  //A catch if x is 0 or less.  Wait, length should be a value longer than the array.  The index (according to W3 Schools) starts at 0.  Why does this act like the start is 1?  Because they artificially remove 1 below.
    }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display="none";
    }
    for(i=0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    //alert("slides is a "+typeof(slides) +"and slideIndex is a "+typeof(slideIndex)+" value of "+slideIndex);
    slides[slideIndex-1].style.display = "block";  //Puts the slide in place.  Removes 1 to prevent a segfault when accessing that part of the array.
    dots[slideIndex-1].className += " active";  //Makes the slide visible.  Removes 1 for the same reason as above.
}
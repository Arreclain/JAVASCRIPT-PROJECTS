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
let slideIndex = 1;
showSlides(slideIndex);

//Changes the slideIndex and calls showSlides via arrows.
function changeSlide(x) {
    showSlides(slideIndex += x);
}

//Activating slides via Dots.
function currentSlide(x) {
    showSlides(slideIndex = x);
}

function showSlides(x) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if(x>slides.length){
        slideIndex=1;
    }
    if(x<1){
        slideIndex=slides.length;
    }

    for(i = 0; i < slides.length; i++){
        slides[i].style.display="none";
    }
    for(i=0;i<dots.length;i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    alert("slides is a "+typeof(slides) +"and slideIndex is a "+typeof(slideIndex)+" value of "+slideIndex);
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}
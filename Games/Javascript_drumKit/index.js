// Detecting Button Key

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var btnInnnerHTML = this.innerHTML;
        makeSound(btnInnnerHTML);
        buttonAnimation(btnInnnerHTML);
    });
}


// Detecting Keypress


document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


// Playing Sounds


function makeSound(key) {
    switch (key) {
        case 'w':
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;

        case 'a':
            sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;

        case 's':
            sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;

        case 'd':
            sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;

        case 'j':
            sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;

        case 'k':
            sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;

        case 'l':
            sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
            // Adding the capital letters to the mix too! As sometimes while playing user tend to hit caps
        case 'W':
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;

        case 'A':
            sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;

        case 'S':
            sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;

        case 'D':
            sound = new Audio("sounds/tom-4.mp3");
            sound.play();
            break;

        case 'J':
            sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;

        case 'K':
            sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;

        case 'L':
            sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        default: 
    }
}

// Button animations

function buttonAnimation(currrentKey) {
    var activeButton = document.querySelector("." + currrentKey);

    activeButton.classList.add("pressed");

     setTimeout(function() { 
         activeButton.classList.remove("pressed");
    }, 100);
}

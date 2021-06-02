
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i = 0; i < numberOfDrumButtons; i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    
        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML)
        
    });
}

// drum kit when keyword are cliked

document.addEventListener("keydown", function(Event){
   
    makeSound(Event.key)
    buttonAnimation(Event.key)


});


function makeSound(key){

    switch (key){

        case "w":
                  var tom1 = new Audio('sounds/tom-1.mp3');
                  tom1.play();
                  break;
        case "a":
                    var tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;
        case "s":
                  var tom3 = new Audio("sounds/tom-3.mp3");
                  tom3.play();
                  break;
        case "d":
                  var tom4 = new Audio("sounds/tom-4.mp3");
                  tom4.play();
                  break;
        case "j":
                  var snar = new Audio("sounds/snare.mp3");
                  snar.play();
                  break;
        case "k":
                  var crash = new Audio("sounds/crash.mp3");
                  crash.play();
                  break;
        case "l":
                  var kick = new Audio("sounds/kick-bass.mp3");
                  kick.play();
                  break;
        default: 
                 console.log("buttonInnerHTML");
    }

}


//annimation when click on event

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
}


 //  this.style.color = "white";   this is for changing the color of text when is clicks
//  this.style.background = "blue"; to background when it has clicked


// var audio = new Audio('sounds/tom-1.mp3');
//audio.play();


//keypree -------- keydown
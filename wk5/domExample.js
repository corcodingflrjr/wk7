document.addEventListener("DOMContentLoaded", function() {
//   console.log("The DOM's content is loaded...")
//}
    const display = document.getElementById("display");
    const button = document.getElementsByTagName("button"); //this const button returns a list of buttons.
//    console.log(buttons);                                 //Lists are just like an Array.

let currentButton = null;

for (let index = 0; index < buttons.length; index++) {  //this for loop adds 
//    const element = buttons[index];                     //an event listener to every button.


        currentButton = buttons[index];
        currentButton.addEventListener("click", function(event) {
//          console.log('a button was clicked...')
            if (event.target.id == "1") {                 //If the targeted event id is equal to 1,
                display.innerText = display.innerText + "1"; //Display 1(buttoninnertext) when youpress 1
                console.log("You clicked the number 1...") //Then return/display "You clicked...".
            }  
                                                       //Build code by simply writing out the
//            console.log(event.target);                    //logical statements of action line by line
            if (event.target.id == "addition" && display.innerText.charAt(display.length - 1) != "+") {   //charAt is a STRING METHOD that has set features that live within it.
                // console.log(display.innerText.charAt(display.length - 1));
                display.innerText = display.innerText + "+"; // innerText is a STRING, so counting characters gets us to the logic 
            }

            if (event.target.id == "compute") {
                display.innerText = display.innerText + "1";
            }
        });


// The Target of the 'Event'



// Classes in Javascript
//     Object Constructor Function 
//     Class Keyword

function Car(make, model, year) {
    this.make = make; //THIS is the function's keyword to construct the Object
    this.model = model;
    this.year = year;
}

// function Cookie(passedInFlavor) {
//     this.flavor = passedInFlavor;
// }

// function User(name, email) {

//}


//Example
// {
//     make: someValue, whateverWePassedIn
//     model: someValue, whateverWePassedIn
//     year: someValue, whateverWePassedIn
// }

//-----------------------------------------
// function Car(make, model, year) {
//     this.make = make; //THIS is the function's keyword to construct the Object
//     this.model = model;
//     this.year = year;
// }

// const rickycar = new Car("Mercedes", "ML320", "1999")
// const lawrencecar = new Car("BMW", "540i", "1995")

// console.log(rickycar);
// console.log(lawrencecar);
// //------------------------------------------

// function Car(passedInOptions) {
//     this.options = passedInOptions;
//     this.numberOfWheels = 4;

// // //METHODS are functions that live on an Object or Class. 
// this.changeOptions = function(optionsToChangeTo) {
//      this.options = optionsToChangeTo
//     }
// }
    
// const rickycar = new Car({
//     powerWindows: true,
//     boseSoundSystem: false
// });

// console.log(rickycar);


// If (this.numberOfFruits) == 2) {
//     this.options = (optionsToChangeTo)
// }


//Class Keywords.js - similar to Object Constructor Function, in that we are creating and Object. 
//It returns an Object... REMINDER {} is the Code BLOCK.
//OBJECT CONSTRUCTOR via CLASS KEYWORD

class Car {
    constructor(make, model, year) {
        this.make = passedInMake;
        this.model = passedInModel;
        this.year = passedInYear;
        this.color = passedInColor;
    }

changeColor(newColor) {
    this.color = newColor
}
}
const rickycar = new Car("Mercedes", "ML320", "1999", "white")    
rickycar.changeColor("black");
    
console.log(rickyCar);


// //BOTH PERFORM THE SAME ACTIONS AND DELIVERS THE SAME RETURN. STYLE OF CODING VARIANCES HERE.
// function Car(passedInMake, passedInModel, passedInYear, passedInColor) {
//     this.make = passedInMake; //THIS is the function's keyword to construct the Object
//     this.model = passedInModel;
//     this.year = passedInYear;
//     this.color = passedInColor;


//     this.changeColor = function(newColor) {
//         this.color = newColor
//         }
//     }
// const rickyCar = new Car("Mercedes", "ML320", "1999", "white")    
// rickycar.changeColor("black");

// console.log(rickyCar);















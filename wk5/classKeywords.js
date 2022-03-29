//Class Keywords.js - similar to Object Constructor Function, in that we are creating and Object. 
//It returns an Object... REMINDER {} is the Code BLOCK.
//OBJECT CONSTRUCTOR via CLASS KEYWORD

function Car (passedInMake, passedInModel, passedInYear, passedInColor) {
        this.make = passedInMake;
        this.model = passedInModel;
        this.year = passedInYear;
        this.color = passedInColor;
    

        this.changecolor = function(newColor) {
            this.color = newColor;
        }
}

const rickycar = new Car ("Mercedes", "ML320", '1999', "white")    
rickycar.changecolor("black");
    
console.log(rickycar);

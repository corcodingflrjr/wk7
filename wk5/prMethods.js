class pie {
    constructor(meatToppings, veggieToppings, sauce, otherToppings, cheeseToppings) {
    this.meatTopping = meatToppings;
    this.veggieToppings = veggieToppings;
    this.sauce = sauce; //could create another method for amount of sauce
    this.otherToppings = otherToppings;
    this.cheeseToppings = cheeseToppings; 
    }
}

//A Method is CHANGING A PROPERTY of the OBJECT.
const pizzaPie = {
    meatTopping: "Italian Sausage",
    veggieToppings: "mushrooms",
    sauce: "marinara", //could create another method for amount of sauce
    otherToppings: "peppers",
    cheeseToppings: "feta",
}
 
    pizzaPie: function() {
        return this.meatTopping + " " + this.veggieToppings + " " + sauce;
}

console.log(pizzaPie)

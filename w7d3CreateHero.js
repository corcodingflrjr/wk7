// ---------------------------------------------------------------------------------
//TOY'S VERSION OF SUPERHERO CODE PRACTICE this.value key, value combo
class Hero {
    constructor(realName, alias, location) {
        this.realName = realName;
        this.alias = alias;
        this.location = location;
        this.nemesis = [];
        this.friends = ["Ricky"];
        this.powerLevel = 100;
        this.isAlive = true;
        this.powers = {
            jump: 5,
            fly: 10,
            punch: 5,
            kick: 5
        };
    }

    usePower(power, force = false) {
        if (this.isAlive == false) {
            return console.log("YOU DEAD MATE");
        }
        const powerLevelAfterUsingPower = this.powerLevel - this.powers[power];
        if (powerLevelAfterUsingPower < 0 && force == false) {
            console.log("You can't use that power! You don't have enough energy, you'll die...");
        } 
        else {
            this.powerLevel = powerLevelAfterUsingPower;
            console.log(`${this.alias} used ${power}. Their power level is now ${this.powerLevel}`);
            if (this.powerLevel < 0) {
                this.isAlive = false;
                console.log("YOU DEAD");
            }
        }
    }

    addFriend(friendName) {
        this.friends.push(friendName);
        console.log(`${this.alias} just made a new friend named ${friendName}.`);
    }

    addNemesis(nemesisName) {
        this.nemesis.push(nemesisName);
        console.log(`${this.alias} has a new nemesis named ${nemesisName}.`);
    }
}


class SuperHero extends Hero {
    constructor(realName, alias, location) {
        super(realName, alias, location);

        this.powerLevel = 200
        this.superPowers = {
            superJump: 10,
            superFly: 20,
            superPunch: 10,
            superKick: 10
        };
    }

    usePower(power, force = false) {
        if (this.isAlive == false) {
            return console.log("YOU DEAD MATE");
        }
        const powerLevelAfterUsingPower = this.powerLevel - this.powers[power];
        if (powerLevel < -100 && force == false) {
            console.log("You can't use that power! You don;t have enough energy, you'll die...");
            if (this.powerLevel < -100) {
                this.isAlive = false;
                console.log("YOU DEAD");
            }
        }
    }
}

const meteorMan = new Hero("robert Townsend", "Meteor Man", "NY");
const blankMan = new Hero("Damon Wayans", "Blank Man", "DC");
const blackPanther = new SuperHero("Chadwick Boseman", "Black Panther", "Wakanda");
const donQuijote = new SuperHero("Don Quijote", "Don Q", "Spain");


console.log(meteorMan);

meteorMan.usePower("jump");

while (meteorMan.powerLevel > 5) {
    meteorMan.usePower("fly");
}

meteorMan.usePower("fly", true);

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// MY IN-CLASS WORK BEFORE REVIEW...
class Hero {
    constructor(realName, alias, location) {
        this.realName = realName;
        this.alias = alias;
        this.location = location;
        this.nemesis = [];
        this.friends = ["Tom"];  // This will make Tom everyone's friend if we construct the friend class initially including Tom
        this.powerLevel = 100;  // set for all Heros at start of Function. The power levels vary decreasingly as function runs. Warning display at powerLevel=0.
        this.isAlive = true;
        this.powers = {
            jump: 5, // (key, value) pairs
            fly: 10,
            punch: 5,
            kick: 5
        };
    }
 //----------------------------------------------------------------------------------------------------
    usePower(power, force = false) {  // force value added to function construction and will default to false if NO FORCE.
        if (this.isAlive == false) {
            return console.log("YOU DEAD DUDE!")
        }
        const powerLevelAfterUsingPower = this.powerLevel - this.powers[power]; // current power level minus new power level passing in
        if (powerLevelAfterUsingPower < 0 && force == false) {  // when powerLevelAfterUsingPower is less than zero and force is FALSE... && AND operator both sides must be true.
            console.log("You can't use that power! You don't have enough energy, you'll die...");
        } else {
            this.powerLevel = powerLevelAfterUsingPower;
            console.log(`${this.alias} used ${power}. Their power level is now ${this.powerLevel}`);
            if (this.powerLevel < 0) {
                this.isAlive = false; // this. sets the isAlive object to false, turns off usePower, and displays...
                console.log("YOU DEAD"); // when this.isAlive is false, display returns "YOU DEAD"
            }
        }
    }
// -------------------------------------------------------------------------------------------
    addFriend(friendName) {  //adding a whole NEW METHOD to Function
        this.friends.push(friendName);
        console.log(`${this.alias} just made a new friend named ${friendName}.`);
    } 

    addNemesis(nemesisName) {  //adding a whole NEW METHOD to Function
        this.nemesis.push(nemesisName);
        console.log(`${this.alias} just made a new friend named ${friendName}.`);
    } 
}
// -------------------------------------------------------------------------------------------

class SuperHero extends Hero { // New Class constructor SuperHero of Heros
    constructor(realName, alias, location) {
        super(realName, alias, location);

        this.powerLevel = 200;
        this.superPowers = {
            superJump: 10,
            superFly: 20,
            superPunch: 10,
            superKick: 10
        };


    }
}

usePower(power, force = false) {  // force value added to function construction and will default to false if NO FORCE.
        if (this.isAlive == false) {
            return console.log("YOU DEAD DUDE!")
        }
        const powerLevelAfterUsingPower = this.powerLevel - this.powers[power]; // current power level minus new power level passing in
        if (powerLevelAfterUsingPower < -100 && force == false) {  // when powerLevelAfterUsingPower is less than zero and force is FALSE... && AND operator both sides must be true.
            console.log("You can't use that power! You don't have enough energy, you'll die...");
        } else {
            this.powerLevel = powerLevelAfterUsingPower;
            console.log(`${this.alias} used ${power}. Their power level is now ${this.powerLevel}`);
            if (this.powerLevel < -100) {  //copied usePower Function and changed the < 0 to < -100 for SUPERHERO powers.
                this.isAlive = false; // this. sets the isAlive object to false, turns off usePower, and displays...
                console.log("YOU DEAD"); // when this.isAlive is false, display returns "YOU DEAD"
            }
        }
    }
const meteorMan = new Hero("Robert Townsend", "Meteor Man", "NY");
const blankMan = new Hero("Damon Wayans", "Blank Man", "DC");
const blackPanther = new SuperHero("Chadwick Boseman", "Black Panther", "Wakanda");
const donQuijote = new SuperHero("Don Quijote", "Don Q", "Spain");

console.lof(meteorMan);

meteorMan.usePower("jump");

while (meteorMan.powerLevel > 5) {
    meteorMan.usePower("fly");
}

meteorMan.usePower("fly", true);






// //CREATE A HERO!
// class Hero {
//     constructor(govName, alias, location, nemesis, friends, isAlice, powerLevel, powerName, powerAmt)
// }
// function(heroSaves) {}
// this.govName
// this.alias
// this.location
// this.nemesis
// this.friends
// let p > 0, display "Status"                                   // Status, live is alive
// //Power Attributes:
// If "Status", then 1 <= p >= 5,                                // then each power has a name and a number of levels.
// this.powerName                                                // each power should have...
// this.powerLevel                                               // this will be a number p < 5, p++
// function(powerOn) {}                                          // There should be a method to use a power
// let p = 0, p < 5, p++                                         // Power level (which should be 100)
// // function heroSaves() {  // When a power is used its level should be subtracted from the hero’s power level
// //     this.powerOn = true;
// let p + 1 <= 5
// let
// If the power used would take the hero’s power level below 0 a warning should be issued that it can’t be used because they’ll die
// There should be a method to force a power to be used, meaning that no warning should be issued even if the hero’s power level will be taken below 0.
// If a hero’s power level goes below zero their status should be dead and none of the methods should work
// Heroes should be able to add a friend
// Heroes should be able to add a nemesis
// Create a superhero
// This superhero should have all of the details and abilities of the hero with some slight differences:
// Superhero should have a default power level of 200
// In addition that should have SUPER powers that are stronger than (higher level) than regular powers
// Superhero should be able to function up until their power level has reached -100
// The way in which they operate should have the same names
// Create at least 2 instances of a hero and 2 instances of a superhero.

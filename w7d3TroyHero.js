class Hero {
    constructor(realName, alias, location) {
        this.realName = realName;
        this.alias = alias;
        this.location = location;
        this.nemesis = [];
        this.friends = ["Tom"];
        this.powerLevel = 100;
        this.isAlive = true;
        this.powers = {
            jump: 5,
            fly: 10,
            punch: 5,
            kick: 5
        };
    }

    usePower(power, force = false) { //Function established. Key, Value combo is (power, force where the value of force = false, there is no power being used at start)
        if (this.isAlive == false) { //At Function's starts, If this. key given a value of isAlive that equals == false,  
            return console.log("YOU DEAD MATE"); //then return the on screen message, "YOU'RE DEAD MATE"
        }
        const powerLevelAfterUsingPower = this.powerLevel - this.powers[power]; //const = constant, which is set and cannot change. Therefore, this is a const Function where the power level after use equals this.powerLevels minus any powers power used up.
        if (powerLevelAfterUsingPower < 0 && force == false) { //if the const less than 0 AND the force is false (no power used)
            console.log("You can't use that power! You don't have enough energy, you'll die..."); //then return AN ACTION... display this message
        } else { //IF NOT THE FIRST IF CASE, THEN, or else...
            this.powerLevel = powerLevelAfterUsingPower; //this.powerLevel Key equals powerLevelAfterUsingPower
            console.log(`${this.alias} used ${power}. Their power level is now ${this.powerLevel}` ); //return AN ACTION... display this message "Meteor Man used jump. Their power level is now 95"
            if (this.powerLevel < 0) { //IF this.powerLevel KEY value is less than zero...
                this.isAlive = false; //AND this.isAlive KEY value is false...
                console.log("YOU DEAD"); //THEN return AN ACTION... display this message "YOU'RE DEAD"
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

//---------------------------
class SuperHero extends Hero {
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

    usePower(power, force = false) {
        if (this.isAlive == false) {
            return console.log("YOU DEAD MATE");
        }
        const powerLevelAfterUsingPower = this.powerLevel - this.powers[power];
        if (powerLevelAfterUsingPower < -100 && force == false) {
            console.log("You can't use that power! You don't have enough energy, you'll die...");
        } else {
            this.powerLevel = powerLevelAfterUsingPower;
            console.log(`${this.alias} used ${power}. Their power level is now ${this.powerLevel}` );
            if (this.powerLevel < -100) {
                this.isAlive = false;
                console.log("YOU DEAD");
            }
        }
    }
}

const meteorMan = new Hero("Robert Townsend", "Meteor Man", "NY");
const blankMan = new Hero("Damon Wayans", "Blank Man", "DC");
const blackPanther = new SuperHero("Chadwick Boseman", "Black Panther", "Wakanda");
const donQuijote = new SuperHero("Don Quijote", "Don Q", "Spain");


console.log(meteorMan);

meteorMan.usePower("jump");

while (meteorMan.powerLevel > 5) {
    meteorMan.usePower("fly");
}

meteorMan.usePower("fly", true);
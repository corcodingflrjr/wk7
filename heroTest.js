// ---------------------------------------------------------------------------------
//TROY'S VERSION OF SUPERHERO CODE PRACTICE this.value key, value combo
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


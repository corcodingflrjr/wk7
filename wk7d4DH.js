class Person {
    constructor(fullName, address, telephone, email) {
        this.activeBuyer = true;
        this.firstName = firstName
        this.lastName = lastName
        this.fullName = (`${firstName} ${lastName}`);
        this.address = address;
        this.telephone = telephone;
        this.email = email;
        this.incomes = {
            payCheck: 100,
            gift: 50,
            grant: 40,
            loan: 5
        };
        this.incomeLevel = 100;
        this.newBaby = [];
        this.grandParents = ["Mr/Mrs CheerfulGivers"];  
    }
}

    useIncome(income, savings = false) {
        if (this.activeBuyer == false) {
            return console.log("YOU AIN'T READY TO BUY YET!");
        }
        const incomeLevelAfterCollectingIncome = this.incomeLevel + this.incomes[income];
        if (incomeLevelAfterCollectingIncome < 0 && activeBuyer == false ) { //there are no savings and they are electing they are not an active Buyer
            console.log("You can't buy no house yet fam! As much as I'd love to sell you your dream home, you MUST INCREASE your savings to buy wisely and with equity, for the sake of your family's inheritance and financial security. Please call me when you've saved 10% of your purchase price.");
        } 
        else {
            this.incomeLevel = incomeLevelAfterCollectingIncome;
            console.log(`${this.fullName} has ${income}. This down payment income level is now ${this.incomeLevel}`);
            if (this.incomeLevel > 40) {
                this.activeBuyer = true;
                console.log("YOU'RE READY TO PURCHASE YOUR DREAM HOME! LET'S START YOUR FINANCING AND THEN IT IS WISE TO SEARCH.");
            }
        }
    }

    addBaby(babyName) {
        this.newBaby.push(babyName);
        console.log(`${this.grandParents} has a new grandbaby named ${newBaby}.`);
    }
    
    addgrantParent(gpName) {
        this.grandParent.push(gpName);
        console.log(`This ${this.lastName} Family has another pair of baby sitters to fight over who's keeping lil ${newBaby}.`);
    }
}

class Family extends Person {
    constructor(fullName, address, telephone, email) {
        extra(fullName, address,telephone, email);

        this.incomeLevel = 200;
        this.extraIncomes = {
            extrapayCheck: 150,
            extragift: 75,
            extragrant: 65,
            extraloan: 10
        };
    }

    useIncome(income, savings = false) {
        if (this.activeBuyer == false) {
            return console.log("YOU AIN'T READY TO BUY NOTHING!");
        }
        const incomeLevelAfterCollectingIncome = this.incomeLevel + this.incomes[income] + this.extraIncomes[extra];
        if (incomeLevelAfterCollectingIncome < 0 && activeBuyer == false ) { //there are no savings and they are electing they are not an active Buyer
            console.log("You can't buy no house yet fam! As much as I'd love to sell you your dream home, you MUST INCREASE your savings to buy wisely and with equity, for the sake of your family's inheritance and financial security. Please call me when you've saved 10% of your purchase price.");
        } 
        else {
            this.incomeLevel = incomeLevelAfterCollectingIncome;
            console.log(`${this.fullName} has ${income}. This down payment income level is now ${this.incomeLevel}`);
            if (this.incomeLevel > 200) {
                this.activeBuyer = true;
                console.log("YOU'RE READY TO PURCHASE YOUR DREAM HOME! LET'S START YOUR FINANCING AND THEN IT IS WISE TO SEARCH.");
            }

}

class dreamHome {
    constructor(bedrooms, bathrooms, garages, constructionStyle) {
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.garages = garages;
        this.constructionStyle = constructionStyle;
    }
}

//QUESTIONS ABOUT ABOVE CODE...
//1.    Why are there two identical blocks of code for this line,    useIncome(income, savings = false) {     ?
//2.    



class MoreSpaceNeeded extends dreamHome {
    constructor(bedrooms, bathrooms, garages, construction)
}
// Template Literals
// Spread Operator






//Template Literals, Template Strings

// const emptyTemplateLiteral = '';

// const poem = '
// //Heights by great men reached amd kept were not obtained by sydden flight, 
// //but they, while their companions slept
// //were toiling upward
// //in the night.
// ';'

// const firstName = "Will";
// const lastName = "Smith";

// const fullName = '${firstName} ${lastName}'; //${}

// console.log(fullName);


//--- Spread Operator
//const actors = ["Denzel Washington", "Morgan Freeman"];
//const actresses = ["Halle Berry", "Nia Long"];

//const hollywood = [...actors, ...actresses]; //... is the SPREAD OPERATOR.
//const reverseHollywood = [...actresses, ...actors];
//const separatedHollywood = [actresses, actors];

//console.log(hollywood);
//console.log(reverseHollywood);
//console.log(separatedHollywood);


//--- Destructuring
// const actors = ["Denzel Washington", "Morgan Freeman"];
// const actresses = ["Halle Berry", "Nia Long"];
// const hollywood = [...actors, ...actresses];

//const firstActor = actors[0];
//const firstActor = actors;
//const [firstActor, secondActor] = actors; //ORDER MATTERS AND THE OUTPUT WILL CONTINUE TO LIST IN EACH UNTIL ARRAY EXHAUSTED OF ELEMENTS.
//const firstActress = actresses[0];  //
//const [firstActress] = actresses;
//const [firstPlace, secondPlace, ...everybodyElse] = hollywood;
//const [firstPlace, ...everybodyElse] = hollywood;
//const [...everybodyElse] = hollywood;
//const [actorOne, ...rest] = hollywood;

// const firstconstructionStyle = constructionStyles[0];
// const firstconstructionStyle = constructionStyles;
// const [firstconstructionStyle, secondconstructionStyle, thirdconstructionStyle] = newarrayconstructionStyles; //ORDER MATTERS AND THE OUTPUT WILL CONTINUE TO LIST IN EACH UNTIL ARRAY EXHAUSTED OF ELEMENTS.
// const firstroomsType = roomsTypes[0];  
// const [firstroomsType] = roomsTypes;


// //const firstActress = actresses[0];
//const [firstActress] = actresses;

//console.log(firstActor); //ORDER MATTERS HERE
//console.log(secondActor);
//console.log(everybodyElse);
//console.log(actorOne);
//console.log(rest);


//--Practice Exercise:

// ---Write a function that takes in 2 arrays and combines them into a single array. 
 
// const constructionStyles = ["Bungalow", "Mid-Century Modern", "Craftsman", "Equestrian", "Victorian", "Ranch", "Tudor", "Shotgun", "Spanish", "Mediterranean"];
// const roomsTypes = ["Bed", "Living", "Kitchen", "Bath", "Greatroom", "Dining", "Closet", "Laundry", "Lounge", "Parlor", "Guest", "Garage", "Utility", "Patio", "Solarium", "Loft"];
// const buildHouses = [...constructionStyles, ...roomsTypes]; //new array created.
//console.log(buildHouse)

// ---Then, it should save the value of the first 3 values of the new array into new variables. 
// const [firstbuildHouses, secondbuildHouses, thirdbuildHouses, ...rest] = buildHouses;
// const firstthreeHouses = [firstbuildHouses, secondbuildHouses, thirdbuildHouses]
//console.log(buildHouses);

// const firstconstructionStyle = constructionStyles[0];
// const firstconstructionStyle = constructionStyles;
// const [firstconstructionStyle, secondconstructionStyle, thirdconstructionStyle] = newarrayconstructionStyles; //ORDER MATTERS AND THE OUTPUT WILL CONTINUE TO LIST IN EACH UNTIL ARRAY EXHAUSTED OF ELEMENTS.
// const firstroomsType = roomsTypes[0];  
// const [firstroomsType] = roomsTypes;


// import { constructionStyles, roomsTypes } from "./person.js";  good for retrieving data from external files.

// let text = constructionStyles, roomsTypes

// document.getElementById("demo").innerHTML = text


// ---The remaining values of the combined array should be saved into a new variable. 
//const restofbuildHouses = [...rest]
//console.log(buildHouses);
//console.log(restofbuildHouses);

// ---All of the values in the remaining values variable you created should have an 's' added to them. 
// rest = rest.map(i => i + 's'); //MAP FUNCTION will iterate through elements in an ARRAY and MODIFY ARRAY WITH NEW values.
// console.log(rest);
//---------------------------------------------------------------------------------------------------
//--NOTES FROM TROY EXAMPLE... ( MY ATTEMPT TO COPY NOTES FOR PRACTICE AND REVIEW DURING CLASS. appears that code is not prepared before class, so we end up trying to follow him in his head doing the code. In a BOOTCAMP, all these things should be prepared BEFORE CLASS. CLASS IS FOR TEACHING KNOWLEDGE, NOT FIGURING IT OUT.)
// function arrayMachine(arr1, arr2) {
//     let combinedArray = [...arr1, ...arr2]; //const was changed to let, the console.log(combinedArray); will run with the NEW MAP.
//     let [val1, val2, val3, ...remainingVals] = combinedArray;

//     let [thisVal] = combinedArray;
//     let [thatVal, anotherVal] = combinedArray;

//     console.log(val1, thisVal, thatVal);
    

//     console.log(combinedArray);

//     combinedArray = combinedArray.map((currentValue) => { //MAPPING will iterate over ALL ARRAY VALUES. Then it will modify values with a DEFINED ACTION. 
//     //    return '${currentValue}s'; //Then it will RETURN AN ARRAY that includes the MODIFIED DEFINED ACTION.
//         return currentValue * 5
//     })
//     console.log(combinedArray);
// }
// 
// arrayMachine([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);
// 
// 
//--TROY POSTED CORRECTED CODE FROM EXAMPLE ABOVE...
// function arrayMachine(arr1, arr2) {
//     let combinedArray = [...arr1, ...arr2];
//     let [val1, val2, val3, ...remainingVals] = combinedArray;
//     remainingVals = remainingVals.map((currentValue) => {
//         return `${currentValue}s`;
//     })
// 
//--CODE OUTPUT IN TERMINAL...  function arrayMachine(arr1, arr2) {   ...ABOVE
// corcoding@DJs-iPhone wk7 % node templateLiteral.js
// [
//   1, 2, 3, 4,  5,
//   6, 7, 8, 9, 10
// ]
// [
//    5, 10, 15, 20, 25,
//   30, 35, 40, 45, 50
// ]
// 
// ----------------------------------------------------------------------------------------------------
// ---Finally, all of the remaining values that were saved into that variable should be printed to the screen within the  
// ---following sentence:
//
// ---"The current value is [REMAINING VAL?UE]"
// 
// ---and so on until all of the remaining values have been printed in that sentence.
// CODE CONTINUED....
//     remainingVals.forEach((whatWeGotForThisIteration) => {
//         console.log(`The current value is ${whatWeGotForThisIteration}`);
//     })
// }
// arrayMachine([1, 2, 3, 4, 5], [6, 7, 8, 9, 10]);
// 
// CODE OUTPUT IN TERMINAL... 
// corcoding@DJs-iPhone wk7 % node templateLiteral.js
// The current value is 4s
// The current value is 5s
// The current value is 6s
// The current value is 7s
// The current value is 8s
// The current value is 9s
// The current value is 10s
// corcoding@DJs-iPhone wk7 % 

//-----------------------------------------------------------------------------------------------------
// 
// 
// ---You should be using the things we just learned.
// 
// ---Resources: Canvas ES6 Module, w3schools, etc.





//JS Activity 4 -Vowel. Write a program which will check whether a letter is a vowel or not. If the letter is a vowel,
//then print true, or else print false. will need to create an Object with an Array of letters (a word that is being tested 
//for a vowel count.
// function isVowel(letter) {
function isVowel(stringOfLetters)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < stringOfLetters.length ; x++)
  {
    if (vowel_list.indexOf(stringOfLetters[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(isVowel("They had twenty seven thousand one hundred and eighty eight letters!"));


// function vowelCheck(letter) {
//   const vowels = {
//     "a": true
//     "e": true
//     "i": true
//     "o": true
//     "u": true
//   };

//   if (vowels[letter]) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }



// console.log(isVowel("a")) //true A
// console.log(isVowel("b")) //false
// console.log(isVowel("c")) //false  
// console.log(isVowel("d")) //false
// console.log(isVowel("e")) //true E
// console.log(isVowel("c")) //false
// console.log(isVowel("f")) //false
// console.log(isVowel("g")) //false
// console.log(isVowel("h")) //false
// console.log(isVowel("i")) //true I
// console.log(isVowel("j")) //false
// console.log(isVowel("k")) //false
// console.log(isVowel("l")) //false
// console.log(isVowel("m")) //false
// console.log(isVowel("n")) //false
// console.log(isVowel("o")) //true O
// console.log(isVowel("p")) //false
// console.log(isVowel("q")) //false
// console.log(isVowel("r")) //false
// console.log(isVowel("s")) //false
// console.log(isVowel("t")) //false
// console.log(isVowel("u")) //true U
// console.log(isVowel("v")) //false
// console.log(isVowel("w")) //false
// console.log(isVowel("x")) //false
// console.log(isVowel("y")) //true Y
// console.log(isVowel("z")) //false













//Javascript Activity 1: Looping tthrough an Array of Friends
// let myFriends = ["John", "Jane", "Jacob", "Jingle-Heimer-smith"];
// let arrayLength = myFriends.length;
// for (var i=0; i<arrayLength; i++){
//     console.log(myFriends[i]);
// }

//Javascript Activity 2: Write a Javascript program to compute the sum of the two given integers. 
//If the sum is in the range 50..80 return 65 otherwise return 80. Corey's exercise. 
//Study up on the two things the "return" command does.
//Study "console.log" and understand its placement and position in code.

// function whatNum (x, y) {
//     const sumNums = x + y;
//     return sumNums;
//     if (sumNums >= 50 && sumNums <= 80) {
//         return 65;
//     }
//     return 80;
// }
// console.log(whatNum(25, 50));
// console.log(whatNum(25, 60));


// Javascript 101 - 
// "For" Loop. Create and iterative loop by 1) set a base number x=0, 2) set a range x<10, and
// 3) set increment size x++ (++ short for 2).
// var = x
// }

//"While" Loop. Use the 'while' keyword followed by an expression of actions. True? the program will continue to loop
//through the code.
// var x = 0
// while (x<10) {
//     console.log(x);
//     x++;
// }


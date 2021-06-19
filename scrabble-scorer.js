// https://github.com/LC101-May-2021/assignment-2-scrabble-scorer-laurenwmo

//inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

const vowelBonusStructure = {
  1: ['B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z'],
  3: ['A','E','I','O','U']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

let word = "";
function initialPrompt() {
   word = input.question("Let's play some scrabble! Enter a word:");
   //console.log(oldScrabbleScorer(word))
};

function simpleScore(word) {
  
   //word = input.question("Let's play some scrabble! Enter a word (simple score):");
   word = word.toUpperCase();
   pointValue = word.length;
   letterPoints = "";

   for (i = 0; i < word.length; i++) {
     letterPoints += `Points for '${word}': ${pointValue}\n`
     return letterPoints

   }
   
}
  




word = "";
function vowelBonusScore(word) {
  //word = input.question("Let's play some scrabble! Enter a word (bonus):");
	word = word.toUpperCase();
	let letterPoints = 0;
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in vowelBonusStructure) {
      
		 if (vowelBonusStructure[pointValue].includes(word[i])) {
       
			console.log(`Points for '${word[i]}': ${pointValue}\n`);
      letterPoints += +pointValue;
		 }
 
	  }	}
    
	return letterPoints;
 }




let scrabbleScore;


let simpleScoreObj = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scorerFunction: simpleScore
}

let vowelBonusScoreObj = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 pt.",
  scorerFunction: vowelBonusScore
}

let scrabbleScoreObj = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scorerFunction: oldScrabbleScorer
}

const scoringAlgorithms = [simpleScoreObj, vowelBonusScoreObj, scrabbleScoreObj];





function scorerPrompt() {
  let scoreOptions = input.question("What scoring algorithm would you like to use? \n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2:");
  if (scoreOptions === "0") {
    console.log(simpleScore(word))
  } else if (scoreOptions === "1") {
    console.log(vowelBonusScore(word))
  } else if (scoreOptions === "2") {
    console.log(oldScrabbleScorer(word))
  }

};





function transform(obj) {
    var newPointStructure = {};
    for (pointValue in oldPointStructure) {
        for (character of oldPointStructure[pointValue]) {
            newPointStructure[character] = pointValue;
        }
    }
    return newPointStructure;
}



//{ a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10 }





let newPointStructure = transform(oldPointStructure);






function runProgram() {
   initialPrompt();
   scorerPrompt();
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};


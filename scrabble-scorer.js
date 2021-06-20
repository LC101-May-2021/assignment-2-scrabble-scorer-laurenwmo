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
let letterPoints = 0;
  
   word = word.toUpperCase();
   
   if (word.length === 0) {
     pointValue = 0;
     return letterPoints;
   } else if (word.length > 0) {
 pointValue = word.length;
   
   for (i = 0; i < word.length; i++) {
    
     console.log(`Points for '${word}': ${pointValue}\n`);
     letterPoints += +pointValue;

     return letterPoints
    
   }
   }
   }
   
   /*pointValue = word.length;
   
   for (i = 0; i < word.length; i++) {
    
     console.log(`Points for '${word}': ${pointValue}\n`);
     letterPoints += +pointValue;

     return letterPoints
    
   }
   }*/



  




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


let newPointStructure = transform(oldPointStructure)


function scrabbleScore(word) {
  word = word.toLowerCase();
  let letterPoints = 0;

  for (const character of word) {
    let pointValue = newPointStructure[character];
    console.log(`Points for '${character}': ${pointValue}\n`);
   
    letterPoints += pointValue;
    
  }
  console.log(letterPoints)
  return letterPoints
} 


let simpleScoreObj = {
  name: "Simple Score",
  description: "Each letter is worth 1 point.",
  scoringFunction: simpleScore
}

let vowelBonusScoreObj = {
  name: "Bonus Vowels",
  description: "Vowels are 3 pts, consonants are 1 point.",
  scoringFunction: vowelBonusScore
}

let scrabbleScoreObj = {
  name: "Scrabble",
  description: "The traditional scoring algorithm.",
  scoringFunction: scrabbleScore
}

const scoringAlgorithms = [simpleScoreObj, vowelBonusScoreObj, scrabbleScoreObj];

console.log(scoringAlgorithms)



function scorerPrompt() {
  let scoreOptions = input.question("What scoring algorithm would you like to use? \n\n0 - Simple: One point per character\n1 - Vowel Bonus: Vowels are worth 3 points\n2 - Scrabble: Uses scrabble point system\nEnter 0, 1, or 2:");
  return scoringAlgorithms[+scoreOptions]

};


function transform(obj) {
    let newPointStructure = {};
    for (pointValue in obj) {
        for (character of obj[pointValue]) {
            newPointStructure[character.toLowerCase()] = +pointValue;
        }
    }
    return newPointStructure;
}







function runProgram() {
   initialPrompt();
   let scoringObj = scorerPrompt();
   let score = scoringObj.scoringFunction(word)
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


const LETTER_POOL = {
    A: 9, B: 2, C: 2, D: 4,
    E: 12, F: 2, G: 3, H: 2,
    I: 9, J: 1, K: 1, L: 4,
    M: 2, N: 6, O: 8, P: 2,
    Q: 1, R: 6, S: 4, T: 6,
    U: 4, V: 2, W: 2, X: 1,
    Y: 2, Z: 1
  };

const LETTERS_SCORE = {
  A: 1, E: 1, I: 1, O: 1, U: 1,
  L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10
};

export const drawLetters = () => {


  const letters = Object.keys(LETTER_POOL); 
  const cumulativeWeights = [];
  let totalWeight = 0;

for (const letter of letters) {
  totalWeight += LETTER_POOL[letter];
  cumulativeWeights.push({letter: letter, weight : totalWeight})
}

const randomLetter = () => {
  const randValue = Math.floor(Math.random() * totalWeight) + 1;

  for (const dict of cumulativeWeights) {
    if (randValue <= dict.weight) {
      return dict.letter
    } 
  }
}

let hand = [];
let letterCount = {}

while (hand.length < 10) {
  const letter = randomLetter()

  letterCount[letter] = (letterCount[letter] || 0) + 1;
  if (letterCount[letter] <= LETTER_POOL[letter]) {
    hand.push(letter)
  }
}
return hand;
};

export const usesAvailableLetters = (input, lettersInHand) => {
  const inputUp = input.toUpperCase();
  let handDict = {};

  for (const letter of lettersInHand) {
    handDict[letter] = (handDict[letter] || 0) + 1
  }

  for (const letter of inputUp) {
    if (!handDict[letter] || handDict[letter] === 0) {
      return false;
    }
    handDict[letter] -= 1;
  }
  return true;
};


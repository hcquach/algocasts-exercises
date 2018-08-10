// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const stringATransformed = stringA.replace(/[^\w]/g,"").toLowerCase();
  const stringBTransformed = stringB.replace(/[^\w]/g,"").toLowerCase();
  if (stringATransformed.length === stringBTransformed.length) {
    const charsA = {};
    const charsB = {};
    let index;
    for (index = 0; index < stringATransformed.length; index++) {
      charsA[stringATransformed[index]] = charsA[stringATransformed[index]] + 1 || 1;
      charsB[stringBTransformed[index]] = charsB[stringBTransformed[index]] + 1 || 1;
    }
    console.log(charsA);
    console.log(charsB);
    for (let key in charsA) {
      if (charsA[key] !== charsB[key]) {
        return false;
      }
    }
    return true;
    charsA === charsB;
  } else {
    return false;
  }
}

module.exports = anagrams;

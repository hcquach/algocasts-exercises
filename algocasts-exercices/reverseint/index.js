// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {

  // HC's solution, reversing the digits, then adding the minus if negative
  // const reversed_digits = parseInt(n.toString().split('').reverse().join(''), 10);
  // return (n < 0 ? -1 * reversed_digits : reversed_digits);

  // Trial with Math.sign returning -1 if negative directly
  return Math.sign(n) * parseInt(n.toString().split('').reverse().join(''), 10);
}

module.exports = reverseInt;

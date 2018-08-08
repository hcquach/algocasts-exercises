// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // HC's first solution
  // result_string = "";
  // var i;
  // for (i = str.length - 1; i >= 0; i--) {
  //   result_string += str[i];
  // }
  // return result_string;

  // First solution using helper
  //return str.split('').reverse().join('');

  // Second solution using a for loop
  // let reversed = '';
  // for (let character of str)
  //   reversed += character;
  // return reversed;

  // Third using reduce and ES6
  // debugger;
  return str.split('').reduce((rev, char) => char + rev, '');

}

// reverse('asbf');

module.exports = reverse;

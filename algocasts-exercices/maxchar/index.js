// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};
  let max = "";
  for (let char of str) {
    chars[char] = chars[char] + 1 || 1;
  }
  chars[max] = 0;
  for (let key in chars) {
    if (chars[key] > chars[max]) {
      max = key;
    }
  }
  return max;
}

module.exports = maxChar;

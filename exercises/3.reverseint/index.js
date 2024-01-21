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
    // Convert the number to a string to manipulate its characters
  const numStr = Math.abs(n).toString();

  // Reverse the string and convert it back to an integer
  const reversedNum = parseInt(numStr.split('').reverse().join(''), 10);

  // Apply the sign to the reversed number
  return n < 0 ? -reversedNum : reversedNum;

  // we can also return reversedNum * Math.sign(n)
}

module.exports = reverseInt;

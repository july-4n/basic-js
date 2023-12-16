const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxNumber = Number.NEGATIVE_INFINITY;
  const stringNum = n.toString();

  for(let i = 0; i < stringNum.length; i++) {
    const newNumber = stringNum.slice(0, i) + stringNum.slice(i + 1);
    maxNumber = Math.max(maxNumber, Number(newNumber));
  }
  return maxNumber;
}

module.exports = {
  deleteDigit
};

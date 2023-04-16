const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let str = n.toString()
  let sum = ""
  while(str.length > 1){
    let current = 0
    for(let i = 0;i < str.length;i++){
      current += Number(str[i])
      console.log('current',current)
    }
    str = current.toString()

    // sum = current.toString()
  }

  return Number(str)
}

module.exports = {
  getSumOfDigits
};

console.log('getSumOfDigits(100)',getSumOfDigits(100))

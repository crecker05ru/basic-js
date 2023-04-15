const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  let bStr = s1 > s2 ? s1 : s2
  let sStr = s1 < s2 ? s1 : s2
  let matches = 0
  for(let i = 0; i < bStr.length;i++){
    console.log('bStr[i]',bStr[i])
    console.log('sStr',sStr)
    console.log('bStr',bStr)

    console.log('sStr.includes(bStr[i])',sStr.includes(bStr[i]))
    if(sStr.includes(bStr[i])){
      matches ++
      sStr = sStr.replace(bStr[i],'')
      // bStr = bStr.replace(bStr[i],'')
    }
  }
  return matches
  // remove line with error and write your code here
}

module.exports = {
  getCommonCharacterCount
};

// console.log("getCommonCharacterCount('aabcc', 'adcaa')",getCommonCharacterCount('aabcc', 'adcaa')) //3
// console.log("getCommonCharacterCount('abca', 'xyzbac')",getCommonCharacterCount('abca', 'xyzbac')) //3


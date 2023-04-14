const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  let count = 0
  // arr.forEach(element => {
  //   if(element.includes('^^')){
  //     count += element.join(',').match(/\^\^/g).length
  //   }
  // });
  for(let i = 0;i < arr.length; i++){
    if(arr[i].includes('^^')){
      for(let k = 0;k < arr[i].length;k++){
        count += arr[i][k] == '^^' ?  1 : 0
      }
      // count += arr[i].join(',').match(/\^{2}/g).length
      console.log('count',count)
    }
  }
  return count
}

module.exports = {
  countCats
};

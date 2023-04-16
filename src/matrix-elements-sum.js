const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let sum = matrix[0].reduce((e,acc) => acc + e ,0)
  for(let r = 0; r < matrix.length;r++){
    // sum += matrix[0].reduce((e,acc) => acc + e ,0)
    for(let c = 0; c < matrix[r].length;c++){
      
      let current =  matrix[r][c]
      // let below = matrix[r+1][c]
       if(current !== 0){
        // if(matrix[0][c]){
        //   sum += matrix[0][c]
        // }
        if(matrix[r+1]){
          sum += matrix[r+1][c]
        }
        
       }
    }
  }

  return sum
}

module.exports = {
  getMatrixElementsSum
};

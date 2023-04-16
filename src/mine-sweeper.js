const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(/*matrix*/) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let mines = Array(matrix.length).fill(Array(matrix[0].length).fill(0))
  console.log('start mines',mines)
  for(let r = 0; r < matrix.length;r++){
    for(let c =0; c < matrix[r].length;c++){
      console.log('r,c',r,c)
      console.log('matrix[r][c]',matrix[r][c])
      let current = matrix[r][c]
      // let left = matrix[r][c-1]
      // let rigth = matrix[r][c+1]
      // let up = matrix[r-1][c]
      // let down = matrix[r+1][c]

      if(current === true){
        console.log('r,c in true',r,c)
        mines[r][c] += 1
        console.log("mines",mines)
      }else {
        mines[r][c] = mines[r][c]
      }
    }
  }

  return mines
}

// console.log("minesweeper", minesweeper([
//   [true, false, false],
//   [false, true, false],
//   [false, false, false],
// ]))

module.exports = {
  minesweeper
};

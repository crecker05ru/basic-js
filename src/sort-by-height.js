const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr ) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // return arr.sort((a,b) => {
  //   // if(a === -1 || b === -1)return 0
    
  //   if(a === -1){return 0}
  //   if(b === -1){return 1}
  //   if(a === -1 && b === -1){return 0}
  //   if(a > b)return 1
  //   if(a < b)return -1
  //   if(a === b)return 0
  //   // if(a !== -1 && b !== -1){
  //   //   if(a > b)return 1
  //   //   if(a < b)return -1
  //   //   if(a === b)return 0
  //   // }else {
  //   //   return 0
  //   // }
  // })
  // return arr.sort((a,b) =>  {a !== -1 ? 1 : 0})

  let indexes = []
  for(let i = 0;i < arr.length;i++){
    if(arr[i] === -1){
      indexes.push(i)
    }
  }
  console.log('indexes',indexes)
  let sorted = indexes.length > 0 ? arr.filter(e => e !== -1).sort((a,b) => a-b) : arr.sort((a,b) => a-b)
  for(let i = 0;i < indexes.length;i++){
  sorted.splice(indexes[i],0,-1)
  }
  return sorted
}

module.exports = {
  sortByHeight
};

console.log('sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]) - [-1, 150, 160, 170, -1, -1, 180, 190]',sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]))
console.log("[2, 2, 4, 9, 11, 16]",sortByHeight([4, 2, 9, 11, 2, 16]))
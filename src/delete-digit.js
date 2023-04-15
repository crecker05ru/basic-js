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
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let arr = n.toString().split('')
  let str = n.toString()
  let max = ''
  for(let i = 0; i < str.length;i++){
    // console.log('arr[i+1]',arr[i+1])
    // console.log('max',max)
      
    //   if(arr.splice(i,1).join() > max){
    //     max = arr.splice(i,1).join()
    //   }
    // console.log('str[i]',str[i])
    if(str.replace(str[i],'') > max){
      max = str.replace(str[i],'')
    }

  }
  return Number(max)
}


module.exports = {
  deleteDigit
};

// console.log('deleteDigit(152)',deleteDigit(152))
// console.log('deleteDigit(1001)',deleteDigit(1001))
// console.log('deleteDigit(1001)',deleteDigit(10))

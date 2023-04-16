const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // let map = {

  // }
  let answer = ""
  // for(let i = 0;i < str.length;i++){
  //   console.log('str[i]',str[i])
  //   if(map[str[i]] || map[str[i]]  === 0){
  //     map[str[i]] += 1
  //   }else {
  //     map[str[i]] = 1
  //   }
  // }
  let count = 1
  for(let i = 0;i < str.length;i++){

    if(str[i] === str[i + 1]){
      count ++
    }else {
      answer += count > 1 ? String(count)+ str[i]  : str[i]
      count = 1
    }
  }
  // console.log('map',map)

  // for(let [key,val] of Object.entries(map)){
  //   console.log('key,val',key,val)
  //   answer += map[key] > 1 ? String(val)+key : key
  // } 
  return answer 
}

module.exports = {
  encodeLine
};

console.log(encodeLine('aaaatttt')) //'4a4t'
console.log(encodeLine('abbcca')) //'a2b2ca'
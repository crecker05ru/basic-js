const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(sampleActivity === Infinity || isNaN(sampleActivity) || typeof sampleActivity === 'undefined' || typeof sampleActivity !== 'string') {
    return false
  }
  let num = Number(sampleActivity)
  if(num <= 0 || num > 15){
    return false
  }

  return Math.ceil((Math.log(num/MODERN_ACTIVITY)/ -0.693) * HALF_LIFE_PERIOD)
  // throw new NotImplementedError('Not implemented');

  // remove line with error and write your code here
}

module.exports = {
  dateSample
};

console.log(dateSample('1'),dateSample('1'))

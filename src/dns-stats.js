const { NotImplementedError } = require("../extensions/index.js")

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let map = {}

  domains.forEach((dom) => {
    let chain = ""
    let strs = dom.split(".").reverse()
    strs.forEach((str) => {
      str = "." + str
      chain += str
      if (map[chain]) {
        map[chain] += 1
      } else {
        map[chain] = 1
      }
    })
    // if(dom.lastIndexOf('.') !== -1 ){
    //   let last = dom.slice(dom.lastIndexOf('.'))
    //   dom =  + dom.slice(dom.lastIndexOf('.'))
    //   chain += dom
    //   if(map[last]){
    //     map[last] += 1
    //   }else {
    //     map[last] = 1
    //   }
    // }else {
    //   let last = dom.slice(0,dom.lastIndexOf('.')+1)
    //   dom = "." + dom.slice(0,dom.lastIndexOf('.') + 1)
    //   chain += dom
    //   if(map[last]){
    //     map[last] += 1
    //   }else {
    //     map[last] = 1
    //   }
    // }
  })
  console.log("map", map)
  return map
}

module.exports = {
  getDNSStats,
}

console.log(
  "getDNSStats(['epam.com']), { '.com': 1, '.com.epam': 1 })",
  getDNSStats(["epam.com"])
)
console.log(
  "{ '.com': 2, '.com.epam': 2, '.com.epam.info': 1 }",
  getDNSStats(["epam.com", "info.epam.com"])
)

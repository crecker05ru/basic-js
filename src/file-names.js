const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
 let count = 0
 let newArr = []
 for(let i = 0;i < names.length;i++){
  if(!newArr.includes(names[i])){
    newArr.push(names[i])
    count = 0
  }else {
    count ++
    names[i] = count > 0 ? `${names[i]}(${count})` : names[i]
    newArr.push(names[i])
  }
 }
 console.log('names',names)
 console.log('newArr',newArr)
 return names
//  let map = {}
//  for(let i = 0;i < names.length;i++){
//   if(map[names[i]]){
//     map[names[i]] += 1 
//   }else {
//     map[names[i]] = 1
//   }
//  }

//   console.log('map',map)
//  return names.map(name => {
//   if(map[name] > 1){
//     return `${name}(${map[name]})`
//   }else{
//     return name
//   }
//  })
}

console.log("['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)']",renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']))

module.exports = {
  renameFiles
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  let arr = [];

  members.map((member) => {
    if(typeof member === 'string') {
      arr.push(member.toUpperCase());
    }
    return arr
  })

  let arr2 = arr.sort();
  console.log(arr2)
  let str = '';
  for(let i = 0; i < arr2.length; i++) {
      str += arr2[i].charAt(0)
  }
  return str
}

module.exports = {
  createDreamTeam
};

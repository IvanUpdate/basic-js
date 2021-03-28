const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (typeof members === 'object' && members !== null && Array.isArray(members)) {
  members = members.filter( (el) => {return (typeof el === 'string')}).map( (elem) => 
  { return elem.trim().toUpperCase().slice(0,1)}).sort();
  if (members.length === 0) {
    return false;
  } else {
    return members.join('');
  }

} else {
  return false;
}

  
};

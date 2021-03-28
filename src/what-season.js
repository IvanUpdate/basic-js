const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date) return 'Unable to determine the time of year!'
  try{
      date.toJSON()
  }
  catch(error){
      throw new Error(error);
  }
  if (date instanceof Date){
    let month = date.getMonth();
    if (month > 11){
      throw new CustomError('Error');
    } else if (month > 10) {
      return 'winter';
    } else if (month > 7) {
      return 'autumn';
    } else if (month > 4){
      return 'summer';
    } else if (month > 1) {
      return 'spring';
    } else {
      return 'winter';
    }
  } else {
    throw new CustomError('Error');
  }
};

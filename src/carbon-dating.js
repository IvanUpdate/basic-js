const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  //throw new CustomError('Not implemented');
  if ((typeof sampleActivity === 'string') && (typeof Number(sampleActivity) === 'number') && (!isNaN(Number(sampleActivity))) && (Number(sampleActivity) > 0)&& (Number(sampleActivity) < 15)) {
    return Math.ceil((Math.log(MODERN_ACTIVITY/Number(sampleActivity)))/(0.693/HALF_LIFE_PERIOD));
  } else {
    return false;
  }

};


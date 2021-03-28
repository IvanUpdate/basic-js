const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

  let numberOfTurns = 2**disksNumber-1;
  let turn = (3600/turnsSpeed)*numberOfTurns;
  return {turns: numberOfTurns, seconds: Math.floor(turn) };

};

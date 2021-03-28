const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  count = 0;
  matrix.forEach(element => {
    element.forEach(elem => {if (elem == '^^') {count+=1;}})
  });
  return count;
};

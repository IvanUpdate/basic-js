const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(error);
  } 
  
  if(arr === []){
    return [];
  }
  finalArr = [];

  for (let i=0; i<arr.length; i++){

    if (arr[i] === '--discard-next') {

      i++;

    } else if  (arr[i] === '--discard-prev') {

      if (i!=0 && arr[i-2] !== '--discard-next'){
        finalArr.pop();
      }

    } else if (arr[i] === '--double-next') {

      if (i!=arr.length-1){
        finalArr.push(arr[i+1]);
      }

    } else if (arr[i] === '--double-prev' ) {

      if (i!=0 && arr[i - 2] !== '--discard-next'){
        finalArr.push(arr[i-1]);
      }

    } else {

      finalArr.push(arr[i]);

    }
  }
  return finalArr;

  }



// for (let i=0; i <arr.length; i++){
//   if (arr[i] === '--discard-next' && (i < arr.length-1)) {

//     let newArr = arr.slice(i+2);
//     return arr.slice(0, i-1).concat(transform(newArr));
//   }
//   if (arr[i] === '--discard-prev' && (i > 0)) {
//     let newArr = arr.slice(i+1);
//     return arr.slice(0, i-2).concat(transform(newArr));
//   }
//   if (arr[i] === '--double-next' && (i < arr.length-1)) {
//     let newArr = arr;
//     newArr[i] = arr[i+1];
//     return newArr.slice(0, i+2).concat(transform(newArr.slice(i+2)));
//   }
//   if (arr[i] === '--double-prev'  && (i > 0)) {
//     let newArr = arr;
//     newArr[i] = arr[i-1];
//     return newArr.slice(0, i+1).concat(transform(newArr.slice(i+1)));
//   }
// }
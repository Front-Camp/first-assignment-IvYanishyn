/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  function max(arr) {
	  var arrayLength = arr.length;
	  for (var i = 0; i < arrayLength; i++) {
	  	if(isNan(arr[i]) || isFinite(arr[i]){
	  		throw 'Error';
	 	 }
	  }
	  return Math.max.apply(Math, arr);
  }
};

export default max;

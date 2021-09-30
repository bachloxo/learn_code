/*
Given array of integers, find the 0-based index of its minimal element.
*/
function arrayMinimumIndex(inputArray) {
  let min = 0;
  let last = Number.MAX_VALUE;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] < last) {
      min = i;
      last = inputArray[i];
    }
  }
  return min;
}

console.log(arrayMinimumIndex([19, 32, 11, 23]));

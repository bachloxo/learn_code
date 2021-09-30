/*
Given array of integers, remove each kth element from it.
*/

function extractEachKth(inputArray, k) {
  // Return an array of each item that is not an index divisible by k.
  return inputArray.filter((x, i) => (i + 1) % k !== 0);
}

console.log(extractEachKth([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));

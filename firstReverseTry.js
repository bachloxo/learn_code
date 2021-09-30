// Given an array arr, swap its first and last elements and return the resulting array.

function firstReverseTry(arr) {
  if (arr.length > 0) {
    let holder = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = holder;
  }
  return arr;
}

console.log(firstReverseTry([1, 2, 3, 4, 5]));

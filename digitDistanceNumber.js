function digitDistanceNumber(n) {
  // Split the number into each digit as a string.
  let arr = n.toString().split("");
  // Init our output array.
  let outArr = [];
  // Loop from the first element to the second to last element.
  for (let i = 0; i < arr.length - 1; i++) {
    // Push the absolute value of the current element minus the next element to our output array.
    outArr.push(Math.abs(arr[i] - arr[i + 1]));
  }
  // Return the casted int from our outArr.
  return parseInt(outArr.join(""));
}
console.log(digitDistanceNumber(2744));

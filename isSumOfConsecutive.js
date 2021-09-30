/*
Determine if a number can be expressed as a sum of some consecutive positive integers.
*/

function isSumOfConsecutive(n) {
  // Init sum variable.
  let sum = 0;
  // Loop from 0 to n/2 (we only need half).
  for (let i = 0; i < n / 2; i++) {
    // Reinit sum for this iteration.
    sum = 0;
    // Loop through each value from i until n/2.
    for (let j = i; j < n / 2; j++) {
      // Iterate sum by j.
      sum += j;
      // If the sum equates to n then return true;
      if (sum == n) {
        return true;
      }
    }
  }
  // Sum was never equal to n, so return false;
  return false;
}

console.log(isSumOfConsecutive(8));

/*
For given n and k find the sum of all multiples of k that are not greater than n.
*/

function sumOfMultiples(n, k) {
  // Init sum.
  let sum = 0;
  // Loop from zero until limit n.
  for (let i = 0; i <= n; i++) {
    // If the current iteration is a multiple of k
    if (i % k == 0) {
      // Add the current i value to the sum.
      sum += i;
    }
  }
  // Return the sum.
  return sum;
}

console.log(sumOfMultiples(7, 2));

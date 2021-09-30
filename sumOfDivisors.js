// Find the sum of all divisors of a given integer.

// Example

//For n = 12, the output should be
//sumOfDivisors(n) = 28.

// Explanation: 1 + 2 + 3 + 4 + 6 + 12 = 28

function sumOfDivisors(n) {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      console.log(i);
      sum += i;
    }
  }
  return sum;
}

console.log(sumOfDivisors(12));

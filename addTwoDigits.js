/*
CodeSignal Add Two Digits Problem:
You are given a two-digit integer n. Return the sum of its digits.
Example
For n = 29, the output should be
addTwoDigits(n) = 11.
Input/Output
[execution time limit] 4 seconds (js)
[input] integer n
A positive two-digit integer.
Guaranteed constraints:
10 ≤ n ≤ 99.
[output] integer
The sum of the first and second digits of the input number.
*/

// Solution :

function addTwoDigits(n) {
  // Takes number in n and converts it to string i.e. 29 becomes '29'
  let str = n.toString();
  // Creates array where each string in str is an array element i.e 29 becomes ['2', '9']
  let arr = str.split('');

  let arr0 = arr[0];
  let arr1 = arr[1];

  // Unary operator converts ['2', '9'] to [2, 9] when added
  // Adds 2 + 9 to get correct answer of 11
  return +arr[0] + +arr[1];
}

/*
Check if all digits of the given integer are even.
Example
For n = 248622, the output should be
evenDigitsOnly(n) = true;
For n = 642386, the output should be
evenDigitsOnly(n) = false
*/

function evenDigitsOnly(n) {

  // Turn integers into array of strings
  let arrOfStrings = n.toString().split('');

  // Turn array of strings into array of integers
  let arrayOfNumbers = arrOfStrings.map(Number);

  // Check if every element is even or not
  let answer = arrayOfNumbers.every((num) => {
      return num % 2 == 0;
  })
    return answer;
}

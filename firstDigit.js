/*
Find the leftmost digit that occurs in a given string.
Example
For inputString = "var_1__Int", the output should be
firstDigit(inputString) = '1';
For inputString = "q2q-q", the output should be
firstDigit(inputString) = '2';
For inputString = "0ss", the output should be
firstDigit(inputString) = '0'.
*/

function firstDigit(inputString) {
  // Turn string into array of strings
  let arr = inputString.split('');
  let answer = [];

  for(let i = 0; i < arr.length; i++) {
      // Get current array element and turn it into it's own string
      let str = arr[i].toString();
      // Parse individual string into an int
      // If it's a number it returns the number
      // Else it returns NaN
      let parsed = parseInt(str);

      // If parsed is a number it will be equal to or greater than 0
      // If parsed is NaN it evaluates to less than 0
      if(parsed >= 0) {
          // Turn parsed back into a string because answer expects a string
          let str = parsed.toString();
          // Push all numbers into answer array
          answer.push(str);
      }

  }

  // Return answer[0] because it contains the leftmost digit
  return answer[0];
}

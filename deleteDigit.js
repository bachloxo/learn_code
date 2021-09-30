/*

Given some integer, find the maximal number you can obtain by deleting exactly one digit of the given number.

*/
function deleteDigit(n) {
  // Init an array holder for our digits, a string to hold the string values.
  let holder = [];
  let strHld = "";
  // Convert n to a string to loop through.
  let aString = n.toString();
  // Loop through each index in the string.
  for (let i = 0; i < aString.length; i++) {
    // Reinit strHld for this iteration.
    strHld = "";
    // Loop through the string again to compare values.
    for (let j = 0; j < aString.length; j++) {
      // If we are on a different loop iteration than the parent loop, append the current string digit to strHld.
      if (i !== j) {
        strHld += aString[j];
      }
    }
    // Push the casted int of strHld to holder.
    holder.push(parseInt(strHld));
  }
  // Sort desc holder.
  holder.sort((a, b) => b - a);
  // return the largest value in the array.
  return holder[0];
}

console.log(deleteDigit(152));

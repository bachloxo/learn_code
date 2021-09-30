/*
Given a string, your task is to replace each of its characters by the next one in the English alphabet; i.e. replace a with b, replace b with c, etc (z would be replaced by a).
Example
For inputString = "crazy", the output should be alphabeticShift(inputString) = "dsbaz".
*/

function alphabeticShift(inputString) {
  let newStr = [];
  for(let i = 0; i < inputString.length; i++) {
      // Increment each letter by 1 to get the next letter, push it into array
      newStr.push(String.fromCharCode((inputString[i].charCodeAt() + 1)));
  }
     /*
        After incrementing 'z' it becomes '}', need to handle this edge case
        Turns array containing answer into a string
        Handles 'z' edge case by using a RegEx to replace instances of '}' with 'a'
     */
     let answer = newStr.join("").replace(/{/g, 'a');;

     return answer;
}

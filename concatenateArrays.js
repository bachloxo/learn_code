/*
Given two arrays of integers a and b, obtain the array formed by the elements of a followed by the elements of b.
Example
For a = [2, 2, 1] and b = [10, 11], the output should be
concatenateArrays(a, b) = [2, 2, 1, 10, 11].
*/

function concatenateArrays(a, b) {
/*
   Solving with a for loop
   for(let i = 0; i < b.length; i++) {
       a.push(b[i]);
   }
    return a;
*/
    // Solving with the spread operator
    let concatArr = [...a, ...b];
    return concatArr;
}

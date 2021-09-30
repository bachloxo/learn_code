/*
CodeSignal: Given an integer n, return the largest number that contains exactly n digits.
Example
For n = 2, the output should be
largestNumber(n) = 99.
Input/Output
[execution time limit] 4 seconds (js)
[input] integer n
Guaranteed constraints:
1 ≤ n ≤ 9.
[output] integer
The largest integer of length n.
*/

// Solution :

function largestNumber(n) {
    let arr = [];
    for(let i = 0; i < n; i++) {
        // Push a 9 into arr for each digit in n
        arr.push(9)
    }

    // arr now contains [9, 9]

    // Use join to convert [9, 9] to '99'
    let answer = arr.join('');

    // Unary operator turns '99' into 99
    return +answer;

}

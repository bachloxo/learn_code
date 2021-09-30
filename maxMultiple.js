/*
Given a divisor and a bound, find the largest integer N such that:
N is divisible by divisor.
N is less than or equal to bound.
N is greater than 0.
It is guaranteed that such a number exists.
Example
For divisor = 3 and bound = 10, the output should be
maxMultiple(divisor, bound) = 9.
The largest integer divisible by 3 and not larger than 10 is 9.
Input/Output
[execution time limit] 4 seconds (js)
[input] integer divisor
Guaranteed constraints:
2 ≤ divisor ≤ 10.
[input] integer bound
Guaranteed constraints:
5 ≤ bound ≤ 100.
[output] integer
The largest integer not greater than bound that is divisible by divisor.
*/

// Solution :

function maxMultiple(divisor, bound) {
    // Creat emtpy array
    let divisibl  e = [];

    // Iterate every number from 0 to bound
    for(let i = 0; i <= bound; i++) {
        // If number is divisible by 3 push it into array
        if(i % divisor === 0) {
            divisible.push(i);
        }
    }

    // Grab largest number from divisible array and return it
    let largestDivisible = Math.max(...divisible);

    return largestDivisible;
}

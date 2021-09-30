/*
Given an integer size, return array of length size filled with 1s.
Example
For size = 4, the output should be
createArray(size) = [1, 1, 1, 1].
*/


function createArray(size) {
    let arr = new Array(size).fill(1);
    return arr;
}

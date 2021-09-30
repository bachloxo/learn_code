/*
We define the middle of the array arr as follows:
if arr contains an odd number of elements, its middle is the element whose index number is the same when counting from the beginning of the array and from its end;
if arr contains an even number of elements, its middle is the sum of the two elements whose index numbers when counting from the beginning and from the end of the array differ by one.
An array is called smooth if its first and its last elements are equal to one another and to the middle. Given an array arr, determine if it is smooth or not.
Example
For arr = [7, 2, 2, 5, 10, 7], the output should be
isSmooth(arr) = true.
The first and the last elements of arr are equal to 7, and its middle also equals 2 + 5 = 7. Thus, the array is smooth and the output is true.
For arr = [-5, -5, 10], the output should be
isSmooth(arr) = false.
The first and middle elements are equal to -5, but the last element equals 10. Thus, arr is not smooth and the output is false.
*/

function isSmooth(arr) {
    let middleNumber = 0;
    let middle1 = 0;
    let middle2 = 0
    // If odd
    if(arr.length % 2 !== 0) {
        // If odd length divide by 2 and truncate the result to get middle element
        middleNumber = arr[Math.trunc(arr.length / 2)];
    }
    // If even
    else {
        // If even length, divide by two to get first of the two middle numbers, then divide length by 2 and add 1 to get second middle number
        middle1 = arr.length / 2;
        middle2 = arr.length / 2 - 1;
        // Sum the two middle numbers
        middleNumber = arr[middle1] + arr[middle2];
    }
    // If first, middle, and last value are the same return true
    if(middleNumber === arr[0] && middleNumber === arr[arr.length - 1]) {
        return true;
    }
    else {
        return false;
    }
}

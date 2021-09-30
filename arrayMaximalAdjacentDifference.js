/*
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
Example
For inputArray = [2, 4, 1, 0], the output should be
arrayMaximalAdjacentDifference(inputArray) = 3.
*/

function arrayMaximalAdjacentDifference(inputArray) {
    let positionOfLargestDiff = 0;
    let largestDiff = 0;

    for(let i = 0; i < inputArray.length; i++) {
        if(Math.abs(inputArray[i + 1] - inputArray[i]) > largestDiff ) {
            largestDiff = Math.abs(inputArray[i + 1] - inputArray[i]);
        }
        else {
            largestDiff = largestDiff;
        }
    }

    return largestDiff;
}

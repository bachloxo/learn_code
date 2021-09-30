/*
Remove a part of a given array between given 0-based indexes l and r (inclusive).
Example
For inputArray = [2, 3, 2, 3, 4, 5], l = 2, and r = 4, the output should be
removeArrayPart(inputArray, l, r) = [2, 3, 5].
*/

function removeArrayPart(inputArray, l, r) {
    // Delete from l until r - l + 1 to include r
    // if l = 2 and r = 4
    // Subtract 4 - 2 = 2
    // Add 2 + 1 so that 3 numbers are deleted i.e. inclusive of r
    inputArray.splice(l, r - l + 1);
    return inputArray;
}

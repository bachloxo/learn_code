/*
A boy is walking a long way from school to his home. To make the walk more fun he decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately, not all of the houses have numbers written on them, and on top of that the boy is regularly taking turns to change streets, so the numbers don't appear to him in any particular order.
At some point during the walk the boy encounters a house with number 0 written on it, which surprises him so much that he stops adding numbers to his total right after seeing that house.
For the given sequence of houses determine the sum that the boy will get. It is guaranteed that there will always be at least one 0 house on the path.
Example
For inputArray = [5, 1, 2, 3, 0, 1, 5, 0, 2], the output should be
houseNumbersSum(inputArray) = 11.
The answer was obtained as 5 + 1 + 2 + 3 = 11.
*/

function houseNumbersSum(inputArray) {
    // Turn string into array
    let arr = inputArray;

    // Iterate through arr until we hit 0, splice everything after 0
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 0) {
            arr.splice(i);
        }
    }

    let total = 0;

    // Iterate through new arr, add all elements to get total
    for(let j = 0; j < arr.length; j++) {
        console.log(arr[j]);
        total += arr[j];
    }

    return total;
}

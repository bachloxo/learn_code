/*
Given an array of strings, return another array containing all of its longest strings.
Example
For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
*/

function allLongestStrings(inputArray) {
    let answers = inputArray;

    // Sort array largest to smallest by length
    answers.sort((a, b) => {
       return b.length - a.length;
    });

    // Iterate through array, once the next element has a smaller length than the         // current element remove that element and all elements after it
    // Only the elements equal to the largest element will get kept
    for(let i = 0; i < answers.length - 1; i++) {
        if(answers[i].length > answers[i + 1].length) {
            answers.splice(i + 1);
        }
    }

    return answers;
}

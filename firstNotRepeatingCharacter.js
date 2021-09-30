/*
Note: Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what you would be asked to do during a real interview.
Given a string s consisting of small English letters, find and return the first instance of a non-repeating character in it. If there is no such character, return '_'.
Example
For s = "abacabad", the output should be
firstNotRepeatingCharacter(s) = 'c'.
There are 2 non-repeating characters in the string: 'c' and 'd'. Return c since it appears in the string first.
For s = "abacabaabacaba", the output should be
firstNotRepeatingCharacter(s) = '_'.
There are no characters in this string that do not repeat.
*/


function firstNotRepeatingCharacter(s) {

    let singleOccurence = [];

    // Iterate through string
    // Use split to count how many times a letter appears in string
    // if letter appears once, push it to single occurence array
    for(let i = 0; i < s.length; i++) {
        let letter = s.split(s[i]).length - 1;

        if(letter === 1) {
            singleOccurence.push(s[i]);
        }
    }

    // If singleOccurence is equal to 0, no letters appears more than once
    // Return "_"
    if(singleOccurence.length === 0) {
        return "_";
    }
    // If singleOccurence is greater than zero there are repeat letters
    // Return earliest occurring repeat letter (the first element in singleOccurent)
    else {
        return singleOccurence[0];
    }

}

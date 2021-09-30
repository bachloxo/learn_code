/*
Check whether the given string is a subsequence of the plaintext alphabet.
Example
For s = "effg", the output should be
alphabetSubsequence(s) = false;
For s = "cdce", the output should be
alphabetSubsequence(s) = false;
For s = "ace", the output should be
alphabetSubsequence(s) = true;
For s = "bxz", the output should be
alphabetSubsequence(s) = true.
*/

function alphabetSubsequence(s) {
    // Make a set with unique letters in string
    let uniqueLetters = new Set(s);

    // If s has more letters than uniqueLetters set there are repeat characters in string
    // If there a multiple appearances of the same characater in string then it can't be
    // strictly increasing in terms of ASCII values, return false
    if(uniqueLetters.size < s.length) {
        return false;
    }
    // If uniqueLetters and s are of the same length we have to check each letter
    else {
        for(let i = 0; i < s.length + 1; i++) {
            // If the next character's ASCII code is less than or equal to previous character
            // then the string isn't strictly increasing in terms of ASCII value, return false
            if(s.charCodeAt(i + 1) <= s.charCodeAt(i)) {
                return false;
            }
            // If characters are strictly increasing in ASCII value the characters are in
            // alphabetical order, return true
            else {
                return true;
            }
        }
    }

    // Way 2
    // let result = str.split('').map( (res, index) => (str.charCodeAt(index) >= str.charCodeAt(index+1)) ? false : true);

    // return result.every( res => res == true);
}

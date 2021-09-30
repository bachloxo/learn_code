/*
Given a string, enclose it in round brackets.
Example
For inputString = "abacaba", the output should be
encloseInBrackets(inputString) = "(abacaba)".
*/

function encloseInBrackets(inputString) {
    let parathesis1 = '(';
    let parathesis2 = ')';
    let answer = parathesis1 + inputString + parathesis2;
    return answer;
}

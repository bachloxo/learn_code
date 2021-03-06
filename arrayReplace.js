/*
Given an array of integers, replace all the occurrences of elemToReplace with substitutionElem.
Example
For inputArray = [1, 2, 1], elemToReplace = 1, and substitutionElem = 3, the output should be
arrayReplace(inputArray, elemToReplace, substitutionElem) = [3, 2, 3].
*/

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    for(let i = 0; i < inputArray.length; i++) {
        if(inputArray[i] === elemToReplace) {
            inputArray[i] = substitutionElem;
        }
    }
    return inputArray;
}

function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    let answer = inputArray.reduce((a, element, index) => {
        if(element == elemToReplace)
            element = substitutionElem;
            a.push(element);
            return a;
    }, []);

    return answer;
}

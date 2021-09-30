/*
CodeSignal adjacentElementsProduct problem:
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.
Example
For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.
7 and 3 produce the largest product.
Input/Output
[execution time limit] 4 seconds (js)
[input] array.integer inputArray
An array of integers containing at least two elements.
Guaranteed constraints:
2 ≤ inputArray.length ≤ 10,
-1000 ≤ inputArray[i] ≤ 1000.
[output] integer
The largest product of adjacent elements.
*/

// Solution :

function adjacentElementsProduct(inputArray) {
    var products = [];
    for(var i = 0; i < inputArray.length -1; i++) {
        products.push(inputArray[i] * inputArray[i + 1]);
    };

     // Correctly logs elements of products array
     console.log(products);

     // Math.max can't be called on arrays, the spread operator takes the values out of products array and that allows us         to call Math.max on it
     return Math.max(...products);

}

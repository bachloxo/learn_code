/*
You have two integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and the other from b, that can be added together to get a sum of v. Return true if such a pair exists, otherwise return false.
Example
For a = [1, 2, 3], b = [10, 20, 30, 40], and v = 42, the output should be
sumOfTwo(a, b, v) = true.
*/

function sumOfTwo(a, b, v) {
    let bSet = new Set(b);
    for(let i = 0; i < a.length; i++) {
        if(bSet.has(v - a[i])) {
            return true;
        }
    }
    return false;
}

/*
Solves but takes too long due to nested for loops
for(let i = 0; i < a.length; i++) {
        for(let j = 0; j < b.length; j++) {
            if(a[i] + b[j] === v) {
                return true;
            }
        }
    }
    return false;
*/

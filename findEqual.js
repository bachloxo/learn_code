// Given unsorted array of integers, check if it contains at least two equal numbers.
// Example
//
// For sequence = [1, 3, 2, 1], the output should be
// findEqual(sequence) = true;
// For sequence = [1, 3, 2], the output should be
// findEqual(sequence) = false.

function findEqual(sequence) {
    if (sequence.legtn = 0) {
      return false;
    }
    const a = sequence.sort()
    a.filter( function(v, i, a) { return !i || v !== a[i-1]; } );

    return sequence.length > a.length
}


/*
* Numbers
*/
var arr = [324,3,32,0,5,52,2100,1,20,2,3,3,2,0,2,2,1,1,1];
//1. sorting / map
var a = arr.sort();
>>>[0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 20, 2100, 3, 3, 3, 32, 324, 5, 52]
//2. reduce
a.filter( function(v, i, a) { return !i || v !== a[i-1]; } );
[0, 1, 2, 20, 2100, 3, 32, 324, 5, 52]

// Check if by removing one element from the array that the input is an increasing sequence.

// This almost works, but exceeds the time limit for test 36.
// Need to find a way to optimize this code.

function almostIncreasingSequence(sequence) {
  let isinc = false;
  let init = 0;
  for (let i = 0; i < sequence.length; i++) {
    init = 0;
    for (let j = 0; j < sequence.length; j++) {
      if (j != i) {
        if (sequence[j] > init) {
          isinc = true;
        } else {
          isinc = false;
          break;
        }
        init = sequence[j];
      }
    }

    if (isinc) {
      return isinc;
    }
  }
  return false;
}

console.log(almostIncreasingSequence([1, 2, 1]));

/*
Given a matrix, find its trace.
In linear algebra, the trace of a square matrix is defined as the sum of the elements on the main diagonal.
The main diagonal of a matrix is the diagonal which goes from the upper left corner of a matrix to its lower right corner.
*/

function matrixTrace(matrix) {
  // Init sum variable.
  let sum = 0;
  // Loop through each line of the matrix.
  for (let i = 0; i < matrix.length; i++) {
    // Iterate the sum with the current line's diagonal part.
    sum += matrix[i][i];
  }
  // Return the sum.
  return sum;
}

console.log(matrixTrace([[1, 1, 1], [0, 5, 0], [2, 1, 3]]));

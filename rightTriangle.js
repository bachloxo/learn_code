/*

For a given triangle determine if it is a right triangle.

Example

For sides = [3, 5, 4], the output should be
rightTriangle(sides) = true.

*/

function rightTriangle(x) {
  // sort sides smallest to largest.
  x.sort((a, b) => a - b);
  // Apply the Pythagorean theorem.
  return x[0] * x[0] + x[1] * x[1] == x[2] * x[2];
}

console.log(rightTriangle([3, 5, 4]));

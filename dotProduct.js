/*
Given two 3D vectors, find their dot product.
*/

function dotProduct(v1, v2) {
  // Init product holder variable.
  let product = 0;
  // Loop through each entry in the first vector.
  for (let i = 0; i < v1.length; i++) {
    // Find the running product using the first and second vector.
    product += v1[i] * v2[i];
  }
  // return our result.
  return product;
}
console.log(dotProduct([0, 0, 1], [0, 5, -2]));

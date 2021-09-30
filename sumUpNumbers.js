// For inputString = "2 apples, 12 oranges", the output should be
//      sumUpNumbers(inputString) = 14.
function sumUpNumbers(inputString) {
  let numbers = inputString
    .replace(/[^0-9]/gi, " ")
    .split(" ")
    .map(Number);

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  return sum;
}

console.log(sumUpNumbers("2 apples, 12 oranges"));

numberOfEvenDigits = a => {
  // Split each digit out into an array.
  let b = a
    .toString()
    .split("")
    .map(Number);
  // init counter.
  let c = 0;
  // loop through each entry and use modulo 2 to determine if it is an even digit (zero counts)
  for (let i = 0; i < b.length; i++) {
    if (b[i] % 2 == 0) {
      c++;
    }
  }
  // return count.
  return c;
};

console.log(numberOfEvenDigits(10101234));

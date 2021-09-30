function evenNumbersBeforeFixed(sequence, fixedElement) {
  let exists = false;
  let el = -1;
  let count = 0;
  // Check to see if the fixedElement exists.
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] == fixedElement) {
      exists = true;
    }
  }

  // If the element exists, flag it as the element.
  if (exists) {
    el = fixedElement;
  } else {
    return -1;
  }

  // Loop through and count each even number until el.
  for (let i = 0; i < sequence.length; i++) {
    // If we've hit our element, return the current count.
    if (sequence[i] == el) {
      return count;
    }
    // If an even number, iterate count by one.
    if (sequence[i] % 2 == 0) {
      count++;
    }
  }
  // Return count if we make it out of the loop.
  return count;
}

console.log(evenNumbersBeforeFixed([1, 4, 2, 6, 3, 1], 6));

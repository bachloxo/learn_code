function validTime(time) {
  let split = time.split(":").map(Number);

  return split[0] >= 0 && split[0] <= 23 && split[1] > 0 && split[1] <= 59
    ? true
    : false;
}

console.log(validTime("13:68"));

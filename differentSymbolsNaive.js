function differentSymbolsNaive(s) {
  let holder = [];
  let isIn = false;
  for (let i = 0; i < s.length; i++) {
    isIn = false;
    for (let j = 0; j < holder.length; j++) {
      if (s[i] == holder[j]) {
        isIn = true;
      }
    }
    if (!isIn) {
      holder.push(s[i]);
    }
  }
  return holder.length;
}

console.log(differentSymbolsNaive("cabca"));

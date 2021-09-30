function longestWord(text) {
  text = text.replace(/[^a-zA-Z]/gi, " ");

  let split = text.split(" ");
  let longest = "";
  for (let i = 0; i < split.length; i++) {
    if (split[i].length > longest.length) {
      longest = split[i];
    }
  }

  return longest;
}

console.log(longestWord("Ready, steady, go!"));

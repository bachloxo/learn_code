// Correct a given proper noun.

function properNounCorrection(noun) {
  noun = noun.toLowerCase().split("");
  noun[0] = noun[0].toUpperCase();
  return noun.join("");
}

console.log(properNounCorrection("pARIs"));

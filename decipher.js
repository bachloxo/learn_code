// Given a ciphered string, return the initial one if it is known that it consists only of lowercase letters.

function decipher(cipher) {
  // init vars for the holder and final message.
  let holder = "";
  let message = "";
  // loop through the cipher.
  for (let i = 0; i < cipher.length; i++) {
    // add this char to the cipher.
    holder += cipher[i];
    // parse the holder value as an int.
    let asciiCode = parseInt(holder);
    // if the asciiCode is between a-z inclusive, then add the current letter to the message and reinit the holder.
    if (asciiCode >= 97 && asciiCode <= 122) {
      message += String.fromCharCode(parseInt(holder));
      holder = "";
    }
  }
  // return the final message.
  return message;
}

console.log(
  decipher(
    "979899100101102103104105106107108109110111112113114115116117118119120121122"
  )
);

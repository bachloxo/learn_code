/* 

Lucky numbers are the positive integers whose decimal representations contain only the lucky digits 4 and 7.

Example

For n = 47, the output should be
isLuckyNumber(n) = true.

*/

isLuckyNumber = n => {
  let s = n.toString();

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "4" && s[i] !== "7") return false;
  }

  return true;
};

console.log(isLuckyNumber(4774));

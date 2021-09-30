/*

Given a string, return its encoding defined as follows:

    First, the string is divided into the least possible number of disjoint substrings consisting of identical characters
        for example, "aabbbc" is divided into ["aa", "bbb", "c"]
    Next, each substring with length greater than one is replaced with a concatenation of its length and the repeating character
        for example, substring "bbb" is replaced by "3b"
    Finally, all the new strings are concatenated together in the same order and a new string is returned.

Example

For s = "aabbbc", the output should be
lineEncoding(s) = "2a3bc".



*/

function lineEncoding(s) {
  let arr = [];
  let final = "";
  let prev = "";
  let curr = "";
  let str = "";
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (i == 0) {
      prev = s[i];
      curr = s[i];
      count = 0;
    } else {
      curr = s[i];
    }

    if (curr != prev) {
      arr.push(str);
      str = curr;
    } else {
      str += curr;
      count++;
    }

    prev = s[i];
  }

  arr.push(str);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length == 1) {
      final += arr[i];
    } else {
      final += arr[i].length.toString() + arr[i][0];
    }
  }

  return final;
}

console.log(lineEncoding("aaabbbbc"));

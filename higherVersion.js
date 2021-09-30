// Check versioning of software.  Return true if ver1 is larger than v2.
function higherVersion(ver1, ver2) {
  // Map into an array each version.
  let v1 = ver1.split(".").map(Number);
  let v2 = ver2.split(".").map(Number);
  // Compare each value to see if the version/subversion is larger.
  for (let i = 0; i < v1.length; i++) {
    // If subversion 1 is less than subversion 2, return false;
    if (v1[i] < v2[i]) {
      return false;
    } else if (v1[i] > v2[i]) {
      // if subversion 1 is larger than subversion 2, return true;
      return true;
    }
  }
  // return false if it makes it all the way through the loop.  this means the versions are equal.
  return false;
}

console.log(higherVersion("1.2.2", "1.2.0"));

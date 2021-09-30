// For the given list of domains return the list of their labels.

function domainType(a) {
  // Make a hash table for each domain type.
  let hash = new Object();
  hash["org"] = "organization";
  hash["com"] = "commercial";
  hash["net"] = "network";
  hash["info"] = "information";

  let index = 0;
  let type = "";
  let out = [];
  // Loop through each input.
  for (let i = 0; i < a.length; i++) {
    // get the domain type by getting the last period and then substringing out the rest.
    index = a[i].lastIndexOf(".");
    type = a[i].substring(index + 1, a[i].length);
    out.push(hash[type]);
  }
  return out;
}

console.log(
  domainType(["en.wiki.org", "codesignal.com", "happy.net", "code.info"])
);

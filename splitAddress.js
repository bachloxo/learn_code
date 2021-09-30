function splitAddress(address) {
  // Get the protocol.
  let first = address.split("://");
  // Get the domain.
  let second = first[1].split(".");
  // Get the context.
  let third = second[1].split("/");
  // Init the return array.
  let rtnVal = [];

  // If context is not undefined, then we ahve protocol, domain, and context to return.
  if (third[1] != undefined) {
    rtnVal = [first[0], second[0], third[1]];
  } else {
    // Else we only need to return the protocol and domain.
    rtnVal = [first[0], second[0]];
  }
  // Return the array.
  return rtnVal;
}

console.log(splitAddress("http://stackoverflow.com/questions"));

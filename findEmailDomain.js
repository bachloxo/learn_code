/*
An email address such as "John.Smith@example.com" is made up of a local part ("John.Smith"), an "@" symbol, then a domain part ("example.com").
The domain name part of an email address may only consist of letters, digits, hyphens and dots. The local part, however, also allows a lot of different special characters. Here you can look at several examples of correct and incorrect email addresses.
Given a valid email address, find its domain part.
Example
For address = "prettyandsimple@example.com", the output should be
findEmailDomain(address) = "example.com";
For address = "fully-qualified-domain@codesignal.com", the output should be
findEmailDomain(address) = "codesignal.com".
*/

function findEmailDomain(address) {
    // Turn string into array of letters
    let arr = address.split('');
    let domain = '';
    let sliced = '';
    // Iterate through array checking if the current element is @
    // If current item is @, slice everything after the @
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].charCodeAt(0) === 64) {
           sliced = arr.slice(i + 1);
        }
    }

    // Turn array cont  aining domain info back into a string
    domain = sliced.join('');
    return domain;
}

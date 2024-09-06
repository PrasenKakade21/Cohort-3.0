/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  str = str.toLowerCase();
  let s = '';
  for (let i = 0; i < str.length; i++) {
    const c = str[i];
    if (c.toLowerCase() != c.toUpperCase()){
      s += c;
    }
  }
  str = s;
  
  return str == str.split('').reverse().join('');
}

module.exports = isPalindrome;

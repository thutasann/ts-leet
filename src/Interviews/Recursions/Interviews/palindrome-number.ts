/**
 * Palindrome
 * @description
 * A palindromic number is a number (such as 16461) that remains the same when its digits are reversed
 * @question
 * Given an integer x, return true if x is a palidrome, and false otherwiese
 * @description
 * Input: x = 121 ====> Output: true
 * Input: x = 10  ====> Output: false
 */
function isPalindrome(n: number): boolean {
  const str = n.toString();

  if (str.length <= 1) {
    return true;
  }

  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  return isPalindrome(Number(str.slice(1, -1)));
}

const PalindromeAnswer = isPalindrome(121);
console.log('PalindromeAnswer', PalindromeAnswer);

// ---- String slice test
let fullName = 'Bro Code';
let firstName;
let lastName;

firstName = fullName.slice(0, fullName.indexOf(' '));
lastName = fullName.slice(fullName.indexOf(' ') + 1);
console.log('firstName', firstName);
console.log('lastName', lastName);

/**
 * Reverse a string
 * @description
 * Input: "hello" ===> "olleh"
 */
function reverseString(str: string): string {
  if (str === '') {
    return '';
  }
  return reverseString(str.substring(1)) + str.charAt(0);
}

const reversedAnswer = reverseString('hello');
console.log('reversedAnswer', reversedAnswer);

/**
 * reverseString("hello") => reverseString("ello") + h
 * reverseString("ello") => reverseString("llo") + e
 * reverseString("llo") => reverseString("lo") + l
 * reverseString("lo") => reverseString("o") + l
 * reverseString("o") => reverseString(" ") + o
 * reverseString("") => ""
 */

function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // reverse the input string
  const reversedWord = reverseString(word);
  // compare the reversed string to the input
  return word === reversedWord;
}
/* 
  Add your pseudocode here
  everse the input string

if the reversed string is the same as the input
  return true
else
  return false
*/

/*
  Add written explanation of your solution here
  reverseString(word): This function reverses a given word by splitting it into an array of characters, 
  reversing the array, and then joining the characters back into a string. For example,
   if the input is "hello", the output will be "olleh".

isPalindrome(word): This function first calls reverseString(word) to get the reversed version 
of the input word. It then compares the original word with the reversed word. If they are equal,
 the function returns true, 
indicating that the input word is a palindrome. Otherwise, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

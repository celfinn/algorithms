// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome (str) {
  const len = str.length
  const medium = len / 2

  for (let i = 0; i < medium; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false
    }
  }

  return true
}

module.exports = palindrome

// function palindrome (str) {
//   const reversed = str.split('').reduce((reversed, char) => char + reversed, '')
//   return str === reversed
// }

// function palindrome (str) {
//   const len = str.length
//   const medium = len / 2

//   for (let i = 0; i < medium; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return false
//     }
//   }

//   return true
// }

// function palindrome (str) {
//   return str.split('').every((element, index, array) => element === array[array.length - index - 1])
// }

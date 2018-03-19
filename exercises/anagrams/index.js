// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams (stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB)
}

function cleanString (str) {
  return str
    .replace(/[^\w]/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('')
}

module.exports = anagrams

// function anagrams (stringA, stringB) {
//   const cleanStringA = onlyWords(stringA)
//   const cleanStringB = onlyWords(stringB)

//   if (cleanStringA.length !== cleanStringB.length) {
//     return false
//   }

//   let charMapA = buildCharMap(cleanStringA)
//   let charMapB = buildCharMap(cleanStringB)

//   return compareCharMaps(charMapA, charMapB)
// }

// function onlyWords (value) {
//   return value.replace(/[^\w]/g, '').toLowerCase()
// }

// function buildCharMap (str) {
//   const charMap = {}
//   for (let s of str) {
//     charMap[s] = charMap[s] + 1 || 1
//   }
//   return charMap
// }

// function compareCharMaps (charMapA, charMapB) {
//   for (let char in charMapA) {
//     if (charMapA[char] !== charMapB[char]) {
//       return false
//     }
//   }

//   return true
// }


// function anagrams (stringA, stringB) {
//   if (stringA.length !== stringB.length) {
//     return false
//   }

//   let mapA = {}
//   let mapB = {}

//   for (let s of onlyWords(stringA)) {
//     mapA[s] = mapA[s] + 1 || 1
//   }

//   for (let s of onlyWords(stringB)) {
//     mapB[s] = mapB[s] + 1 || 1
//   }

//   for (let s in mapA) {
//     if (mapA[s] !== mapB[s]) {
//       return false
//     }
//   }

//   return true
// }

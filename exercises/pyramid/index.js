// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid (n, row = 0, level = '') {
  if (row === n) {
    return
  }

  const size = 2 * n - 1

  if (level.length === size) {
    console.log(level)
    return pyramid(n, row + 1)
  }

  const midpoint = Math.floor(size / 2)
  let add

  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#'
  } else {
    add = ' '
  }

  pyramid(n, row, level + add)
}

module.exports = pyramid

// function pyramid (n) {
//   const size = 2 * n - 1
//   let result = ''
//   for (let i = 0; i < n; i++) {
//     if (i === 0) {
//       result += '#'
//     } else {
//       result += '##'
//     }

//     if (result.length === size) {
//       console.log(result)
//     } else {
//       const initialPad = Math.floor((size + result.length) / 2)
//       console.log(result.padStart(initialPad).padEnd(size))
//     }
//   }
// }

// const initialPad = Math.floor((size - result.length) / 2 + result.length)

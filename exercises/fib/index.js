// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

const memoize = (fn) => {
  const cache = {}

  return (...args) => {
    if (cache[args]) {
      return cache[args]
    }

    const result = fn.apply(this, args)
    cache[args] = result
    return result
  }
}

let fib = (n) => {
  if (n < 2) {
    return n
  }

  return fib(n - 1) + fib(n - 2)
}

fib = memoize(fib)

module.exports = fib

// function fib (n, memo = {}) {
//   if (memo[n]) {
//     return memo[n]
//   }

//   if (n < 2) {
//     memo[n] = n
//     return n
//   }

//   memo[n] = fib(n - 1, memo) + fib(n - 2, memo)
//   return memo[n]
// }

// function fib (n) {
//   if (n < 2) {
//     return n
//   }

//   const result = [0, 1]

//   for (let i = 2; i <= n; i++) {
//     result.push(result[i - 1] + result[i - 2])
//   }

//   return result[n]
// }


// function fib (n) {
//   if (n < 2) {
//     return n
//   }

//   return fib(n - 1) + fib(n - 2)
// }

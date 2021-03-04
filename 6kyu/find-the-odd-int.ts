// Find the odd int
// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/typescript

export function findOdd(numbers: number[]): number {
  for (const number of numbers) {
    const count = numbers.filter((n) => n === number).length
    if (count % 2 !== 0) {
      return number
    }
  }
  return 0
}
console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]))

/**
 * Using Bitwsie XOR operator
 * 
 * When we XOR number with itself it becomes 0, so even numbers will automatically
 * result into 0 and only single number with odd appearances will remain in the 
 * picture which is our final answer.
 */
export function findOdd2(numbers: number[]): number {
  return numbers.reduce((a, b) => a ^ b)
}
console.log(findOdd2([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]))

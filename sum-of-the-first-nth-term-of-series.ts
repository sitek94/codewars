// Sum of the first nth term of Series
// https://www.codewars.com/kata/555eded1ad94b00403000071/train/typescript

export function seriesSum(n: number): string {
  let sum = 0
  let dividend = 1

  for (let i = 0; i < n; i++) {
    sum += 1 / dividend
    dividend += 3
  }

  return sum.toFixed(2)
}

console.log(seriesSum(2));
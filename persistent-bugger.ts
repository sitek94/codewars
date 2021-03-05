// Persistent bugger
// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

// Recursive solution
export function persistence(n: number, step = 0): number {
  return n < 10
    ? step
    : persistence(
        splitNumber(n).reduce((acc, n) => acc * n, 1),
        step + 1
      )
}

function splitNumber(n: number): number[] {
  return n
    .toString()
    .split("")
    .map((n) => +n)
}

console.log(persistence(999))

// More concise recursive solution
export function persistence2(n: number): number {
  return `${n}`.length > 1
    ? 1 + persistence(`${n}`.split("").reduce((acc, n) => acc * +n, 1))
    : 0
}

// While loop solution
export function otherSolution(n: number) {
  let str = n.toString()
  let steps = 0

  while (str.length > 1) {
    steps++
    str = str
      .split("")
      .reduce((acc, n) => acc * +n, 1)
      .toString()
  }

  return steps
}

console.log(otherSolution(999))

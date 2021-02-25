// Square every digit
// https://www.codewars.com/kata/546e2562b03326a88e000020/typescript

export function squareDigits(num: number) {
  return +num
    .toFixed()
    .split("")
    .map((d) => (+d) ** 2)
    .join("")
}

console.log(squareDigits(9119))
// Expect 811181
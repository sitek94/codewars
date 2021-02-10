// Playing with digits
// https://www.codewars.com/kata/5552101f47fc5178b1000050/typescript

// My solution
function digPow(n: number, p: number) {
  const digits = n
    .toString()
    .split('')
    .map((d) => +d);

  let sum = 0;

  for (let i = 0; i < digits.length; i++) {
    sum += digits[i] ** (p + i);
  }

  let k = sum / n;

  return Number.isInteger(k) ? k : -1;
}

function otherSolution(n: number, p: number) {
  const x = n
    .toString()
    .split('')
    .reduce((sum, digit, i) => sum + Math.pow(+digit, p + i), 0);

  return x % n ? -1 : x / n;
}
